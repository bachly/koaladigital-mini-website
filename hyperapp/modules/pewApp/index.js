import { h, app } from "hyperapp";
import "../styles/main.scss";
import moment from "moment";
import { v4 as uniqueId } from "uuid";
import { DH_NOT_SUITABLE_GENERATOR } from "constants";

const PRICE_PER_ITEM = 5;
const TAX_RATE = 0.1;

// Data Layer
const firebase = require("firebase");
require("firebase/firestore");
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4iV2I-3dSaPcUlnCQstMe4B6VmxebkEk",
  authDomain: "pewsys.firebaseapp.com",
  databaseURL: "https://pewsys.firebaseio.com",
  projectId: "pewsys",
  storageBucket: "pewsys.appspot.com",
  messagingSenderId: "1093490402178"
});
var db = firebase.firestore();
const DB = DB || {};

DB.currentCustomerRef = customerId => db.collection("customers").doc(customerId);

DB.moveDraftOrderToQueue = draftOrder => {
  const totalPrice = draftOrder.items && draftOrder.items.length * PRICE_PER_ITEM;
  // TODO: Delete Draft Order
  db.collection("orders").add({
    ...draftOrder,
    timestampCreated: serverTimestamp(),
    totalPrice,
    tax: totalPrice * TAX_RATE
  });
};

/**** UTILITY *****/
function formatTimestamp(seconds) {
  return moment.unix(seconds).format("DD/MM/YYYY");
}
function formatTimestampFromNow(seconds) {
  return seconds ? moment.unix(seconds).fromNow() : "";
}
function serverTimestamp() {
  return firebase.firestore.FieldValue.serverTimestamp();
}

/**** HYPERAPP LAYER *****/
const state = {
  customerName: "Specsavers Optometrists - Winston Hills Mall",
  customerAddress: "Shop 60/180-190 Caroline Chisholm Dr, Winston Hills NSW 2153",
  customerId: "DZ5710u6ZvdyyjT53o6t",
  draftOrderLoading: true,
  draftOrderLastUpdated: undefined,
  draftOrderItems: [],
  draftOrderIsSaving: false,
  orderList: []
};

const actions = actions || {};

// Draft Order
actions.syncDraftOrder = () => (state, actions) => {
  DB.currentCustomerRef(state.customerId).onSnapshot(customerDoc => {
    var customer = customerDoc.data();
    actions.loadDraftOrder({
      draftOrderLastUpdated: customer.draftOrder && customer.draftOrder.timestampUpdated,
      draftOrderItems: (customer.draftOrder && customer.draftOrder.items) || []
    });
  });
};
actions.loadDraftOrder = ({ draftOrderLastUpdated, draftOrderItems }) => {
  return { draftOrderLastUpdated, draftOrderItems };
};
actions.addEmptydraftOrderItems = () => (state, actions) => {
  state.draftOrderItems.push({
    id: uniqueId(),
    name: "",
    phone: ""
  });
  return {
    draftOrderItems: state.draftOrderItems
  };
};
actions.removeDraftOrderItems = id => (state, actions) => {
  return {
    draftOrderItems: state.draftOrderItems.filter(item => id !== item.id)
  };
};
actions.enterDraftOrderItemDetails = ({ id, name, phone }) => (state, actions) => {
  const itemToUpdate = state.draftOrderItems.find(item => id == item.id);
  if (typeof name !== "undefined") itemToUpdate.name = name;
  if (typeof phone !== "undefined") itemToUpdate.phone = phone;
  return {
    draftOrderItems: state.draftOrderItems
  };
};
actions.beforeSaveDraftOrder = () => ({ draftOrderIsSaving: true });
actions.afterSaveDraftOrder = () => ({ draftOrderIsSaving: false });
actions.createDraftOrder = () => (state, actions) => {
  DB.currentCustomerRef(state.customerId)
    .update({
      draftOrder: {
        items: [
          {
            id: uniqueId(),
            name: "",
            phone: ""
          }
        ],
        timestampUpdated: serverTimestamp()
      }
    })
    .then(function() {
      console.log("DRAFT ORDER CREATED.");
    });
};
actions.saveDraftOrder = () => (state, actions) => {
  console.log("SAVING DRAFT ORDER... ", draftOrder);
  actions.beforeSaveDraftOrder();

  const draftOrder = {
    timestampUpdated: serverTimestamp(),
    items: state.draftOrderItems.map(item => ({
      id: item.id,
      name: item.name,
      phone: item.phone
    }))
  };

  DB.currentCustomerRef(state.customerId)
    .update({ draftOrder })
    .then(function() {
      console.log("  ===> DRAFT ORDER SAVED!");
    })
    .catch(function(error) {
      console.error("  ===> ERROR: ", error);
    })
    .finally(function() {
      actions.afterSaveDraftOrder();
    });
};

// OrderList
actions.syncOrderList = value => (state, actions) => {
  db.collection("orders")
    .orderBy("timestampCreated", "desc")
    .onSnapshot(querySnapshot => {
      var results = [];
      querySnapshot.forEach(function(doc) {
        results.push({
          id: doc.id,
          ...doc.data()
        });
      });
      actions.updateOrderList(results);
    });
};

actions.updateOrderList = results => {
  return {
    orderList: results
  };
};

const OrderListView = props => (state, actions) => {
  return (
    <div oncreate={() => actions.syncOrderList()}>
      <h2>Print jobs</h2>
      <ul>
        {state.orderList.map(order => {
          return (
            <li key={order.id}>
              {formatTimestamp(order.timestampCreated.seconds)} &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Number
              of items: {order.items.length} &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Total: ${order.total}{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Status: <strong>{order.status}</strong>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
              <a>View</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const NameAndPhone = ({ id, name, phone, isDeletable }) => (state, actions) => {
  const enter = field => event => {
    event.preventDefault();
    const value = event.target.value;
    actions.enterDraftOrderItemDetails({
      id,
      [field]: value.trim() || ""
    });
  };

  return (
    <fieldset id={id}>
      <input
        onchange={enter("name")}
        type="text"
        name={`Name_${id}`}
        placeholder="Enter name"
        style="width:40%; display: inline-block;"
        value={name}
        autocomplete="new"
      />
      <input
        onchange={enter("phone")}
        type="text"
        name={`Phone_${id}`}
        placeholder="Enter phone"
        style="width:40%; display: inline-block;"
        value={phone}
        autocomplete="new"
      />
      {isDeletable ? <a onclick={() => actions.removeDraftOrderItems(id)}>Remove</a> : ""}
    </fieldset>
  );
};

const DraftOrderForm = props => (state, actions) => {
  const canSave = () => {
    const noEmptyItem = state.draftOrderItems.filter(item => !item.name || !item.phone).length > 0;
    const noPendingEdit = !state.draftOrderIsSaving;
    return noEmptyItem && noPendingEdit;
  };

  return (
    <div oncreate={() => actions.syncDraftOrder()}>
      {state.draftOrderItems.length === 0 ? (
        <h2>
          <a onclick={() => actions.createDraftOrder()}>Create</a>
        </h2>
      ) : (
        <form
          onsubmit={event => {
            event.preventDefault();
            actions.saveDraftOrder();
          }}
        >
          <h2>Draft order</h2>

          <p>
            Last updated: {formatTimestampFromNow(state.draftOrderLastUpdated && state.draftOrderLastUpdated.seconds)}
          </p>

          <h5>Names and phone numbers</h5>
          {state.draftOrderItems.map((item, index) => (
            <NameAndPhone key={item.id} {...item} isDeletable={index === 0 ? false : true} />
          ))}

          <fieldset>
            <a onclick={() => actions.addEmptydraftOrderItems()}>Add +</a>
          </fieldset>
          <hr />
          <fieldset>
            <button disabled={canSave()}>Save</button>
            <button disabled={canSave()}>Pay</button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

const view = (state, actions) => {
  return (
    <div>
      <menu>
        <span>
          {state.customerName} ({state.customerAddress})
        </span>
        <a>Log out</a>
      </menu>
      <main>
        <DraftOrderForm />
        <hr />
        <OrderListView />
      </main>
    </div>
  );
};

app(state, actions, view, document.body);
