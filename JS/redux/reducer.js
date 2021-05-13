const INITIAL_STATE = {
  k: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        k: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
