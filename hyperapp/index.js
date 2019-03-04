import { h, app } from "hyperapp";

const state = {
	
};

const actions = {
  loadCustomers: value => state => {
    if (!state.allCustomers) {

    }
  },
  up: value => state => ({ count: state.count + value })
};

const view = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </div>
);

app(state, actions, view, document.getElementById("root"));
