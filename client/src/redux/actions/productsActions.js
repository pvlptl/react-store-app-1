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

export const getProductDetails = id => {
    return {
        type: types.GET_PRODUCT_DETAILS_INIT,
        id
    }
};

export const getProductDetailsResult = data => {
    return {
        type: types.GET_PRODUCT_DETAILS_RESULT,
        data
    }
};

export const getProductDetailsLoading = data => {
    return {
        type: types.GET_PRODUCT_DETAILS_LOADING,
        data
    }
};

