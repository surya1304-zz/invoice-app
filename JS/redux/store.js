import reducer from "./data.js";

function createStore(reducer) {
    let state;

    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action);
    }

    return {
        getState,
        dispatch,
    };
}

export default createStore(reducer);
