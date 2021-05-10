import reducer from "./reducer.js";

function createStore(reducer) {
  let state = {
    k: [],
  };

  function getState() {
    return state;
  }

  function dispatch(action) {
    // call the reducer to get the new state
    state = reducer(state, action);

    // notify the subscribers
  }

  return {
    dispatch,
    getState,
  };
}

export default createStore(reducer);
