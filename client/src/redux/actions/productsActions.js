import * as types from '../actions/ActionTypes';

export const getProducts = () => {
    return {
        type: types.GET_PRODUCTS
    }
};

export const getProducutsResult = data => {
    return {
        type: types.GET_PRODUCTS_RESULT,
        data
    }
};

