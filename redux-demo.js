const redux = require('redux');

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
    case 'INCREMENTBY2':
      return {
        counter: state.counter + 2
      };
    case 'DECREMENTBY2':
      return {
        counter: state.counter - 2
      };
    default:
      return state;
  }
};


const store = redux.createStore(counterReducer);


const counterSubscriber = () => {
  const latestState = store.getState();
  console.log('Current Counter:', latestState.counter);
};


store.subscribe(counterSubscriber);


for (let i = 0; i < 5; i++) {
  store.dispatch({ type: 'increment' });
}


store.dispatch({ type: 'decrement' });


store.dispatch({ type: 'INCREMENTBY2' });


// store.dispatch({ type: 'DECREMENTBY2' });
