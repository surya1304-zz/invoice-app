const INITIAL_STATE = {
  k: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("I'm Called");
      return {
        ...state,
        k: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
