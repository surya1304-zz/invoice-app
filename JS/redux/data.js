//Action Types
const ADD_DATA = "ADD_DATA";

//Actions
export const addData = (data) => ({
    type: ADD_DATA,
    payload: data,
});

//Reducer
const INITIAL_STATE = {
    data: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                data: action.payload,
            };
    }
};

export default reducer;
