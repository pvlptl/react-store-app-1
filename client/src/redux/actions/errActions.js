import * as types from '../actions/ActionTypes';

export const getErrors = err => {
    return {
        type: types.GET_ERRORS,
        data: err.response.data
    }
};

export const clearErrors = () => {
    return {
        type: types.CLEAR_ERRORS
    }
};
