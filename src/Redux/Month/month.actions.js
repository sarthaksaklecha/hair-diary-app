import { UPDATE } from './month.types';


export const updateMonth = (month) => {

    return {

        type: UPDATE,
        payload: month

    };

};

