const redux = require('redux');

// Reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      };
    case 'decrement':
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

// Creating the store
const store = redux.createStore(counterReducer);

// Subscriber function
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Subscribing to the store
store.subscribe(counterSubscriber);

// Dispatching the 'increment' action 5 times
for (let i = 0; i < 5; i++) {
  store.dispatch({ type: 'increment' });
}

// Dispatching the 'decrement' action
store.dispatch({ type: 'decrement' });
