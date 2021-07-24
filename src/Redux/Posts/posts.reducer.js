const INITIAL_STATE = {
    posts : []
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case "SET":

           return {

             ...state, posts:[...action.payload]

           };

         default: return state;

    }

};

export default reducer;