import { h, app } from "hyperapp";
import "../styles/main.scss";
import moment from "moment";
import { v4 as uniqueId } from "uuid";

const ITEMS_PER_ORDER = 24;
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
  draftOrderIsLoading: true,
  draftOrderLastUpdated: undefined,
  draftOrderItems: [],
  draftOrderIsSaving: false,
  draftOrderIsClean: false,
  orderList: []
};

const actions = actions || {};

// Draft Order
actions.syncDraftOrder = () => (state, actions) => {
  DB.currentCustomerRef(state.customerId).onSnapshot(customerDoc => {
    var customer = customerDoc.data();
    actions.loadDraftOrder({
      draftOrderLastUpdated: customer.draftOrder && customer.draftOrder.timestampUpdated,
      draftOrderItems: (customer.draftOrder && customer.draftOrder.items) || [],
      draftOrderIsClean: true
    });
  });
};
actions.loadDraftOrder = ({ draftOrderLastUpdated, draftOrderItems }) => ({
  draftOrderLastUpdated,
  draftOrderItems,
  draftOrderIsLoading: false
});
actions.enterDraftOrderItemDetails = ({ id, name, phone }) => (state, actions) => {
  const itemToUpdate = state.draftOrderItems.find(item => id == item.id);
  if (typeof name !== "undefined") itemToUpdate.name = name;
  if (typeof phone !== "undefined") itemToUpdate.phone = phone;
  return {
    draftOrderItems: state.draftOrderItems,
    draftOrderIsClean: false
  };
};
actions.beforeSaveDraftOrder = () => ({ draftOrderIsSaving: true, draftOrderIsClean: false });
actions.afterSaveDraftOrder = () => ({ draftOrderIsSaving: false, draftOrderIsClean: true });
actions.createDraftOrder = () => (state, actions) => {
  const items = Array.apply(null, { length: ITEMS_PER_ORDER }).map((item, index) => ({
    id: uniqueId(),
    name: "",
    phone: ""
  }));

  DB.currentCustomerRef(state.customerId)
    .update({
      draftOrder: {
        items,
        total: 0,
        timestampUpdated: serverTimestamp()
      }
    })
    .then(() => {
      console.log("DRAFT ORDER CREATED.");
    });
};
actions.cancelDraftOrder = () => (state, actions) => {
  DB.currentCustomerRef(state.customerId)
    .update({ draftOrder: null })
    .then(() => {
      console.log("DRAFT ORDER CANCELED.");
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
      {state.orderList.map(order => {
        return (
          <div key={order.id}>
            <h2>Print Job {order.id}</h2>
            {formatTimestamp(order.timestampCreated.seconds)} &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Number
            of items: {order.items.length} &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Total: ${order.total}{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Status: <strong>{order.status}</strong>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <hr />
          </div>
        );
      })}
    </div>
  );
};

const NameAndPhone = ({ id, name, phone, index }) => (state, actions) => {
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
      <span style="font-family: monospace;font-size: .8rem;">
        {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
      </span>
      &nbsp;
      <input
        onchange={enter("name")}
        type="text"
        name={`Name_${id}`}
        placeholder=""
        style="width:40%; display: inline-block;"
        value={name}
        autocomplete="new"
      />
      <input
        onchange={enter("phone")}
        type="text"
        name={`Phone_${id}`}
        placeholder=""
        style="width:40%; display: inline-block;"
        value={phone}
        autocomplete="new"
      />
    </fieldset>
  );
};

const DraftOrderForm = props => (state, actions) => {
  const canSave = () => {
    const atLeastOneLabel = state.draftOrderItems.filter(item => item.name !== "" && item.phone !== "").length >= 1;
    return atLeastOneLabel;
  };

  const canPay = () => canSave && state.draftOrderIsClean;
  const column1 = [];
  const column2 = [];
  const column3 = [];

  if (state.draftOrderItems.length > 0) {
    for (let i = 0; i < 8; i++) {
      const item = state.draftOrderItems[i];
      column1.push(<NameAndPhone key={item.id} {...item} index={i} />);
    }

    for (let i = 8; i < 16; i++) {
      const item = state.draftOrderItems[i];
      column2.push(<NameAndPhone key={item.id} {...item} index={i} />);
    }

    for (let i = 16; i < 24; i++) {
      const item = state.draftOrderItems[i];
      column3.push(<NameAndPhone key={item.id} {...item} index={i} />);
    }
  }

  return (
    <div oncreate={() => actions.syncDraftOrder()}>
      {state.draftOrderIsLoading ? (
        <h2>Loading...</h2>
      ) : state.draftOrderItems.length === 0 ? (
        <h2>
          <a href="#" onclick={() => actions.createDraftOrder()}>
            New print job
          </a>
        </h2>
      ) : (
        <div>
          <h2>New print job</h2>
          <h5>Enter up to {ITEMS_PER_ORDER} Personalised Labels</h5>
          <dl style="margin: 0;">
            <dd>{column1}</dd>
            <dd>{column2}</dd>
            <dd>{column3}</dd>
          </dl>
          <br />
          <menu>
            <div>
              <button
                disabled={!canSave()}
                onclick={event => {
                  event.preventDefault();
                  actions.saveDraftOrder();
                }}
              >
                Save
              </button>
              <button onclick={() => actions.cancelDraftOrder()}>Cancel</button>
            </div>
            <button type="submit"
              disabled={!canPay()}
              onclick={event => {
                event.preventDefault();
                alert("Start Stripe Payment");
              }}
            >
              Finalise & Send to Printer
            </button>
          </menu>
          <p>
            Last updated: {formatTimestampFromNow(state.draftOrderLastUpdated && state.draftOrderLastUpdated.seconds)}
          </p>
        </div>
      )}
    </div>
  );
};

const view = (state, actions) => {
  return (
    <div>
      <header>
        <menu>
          <a>P.E.W</a>
          <a>Log out</a>
        </menu>
      </header>
      <main>
        <DraftOrderForm />
        <hr />
        <OrderListView />
      </main>
    </div>
  );
};

app(state, actions, view, document.body);
