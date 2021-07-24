import { UPDATE } from './month.types';


const INITIAL_STATE = {
    month : "Aug"
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATE:

           return {

             ...state, month:action.payload

           };

         default: return state;

    }

};

export default reducer;