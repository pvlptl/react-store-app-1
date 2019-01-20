import * as types from '../actions/ActionTypes';

export const removeProductFromShopingCartInit = (shopingCart, product) => {
    return {
        type: types.REMOVE_PRODUCT_FROM_SHOPING_CART_INIT,
        shopingCart,
        product
    }
};

export const addProductToShopingCartInit = (shopingCart, product) => {
    return {
        type: types.ADD_PRODUCT_TO_SHOPING_CART_INIT,
        shopingCart,
        product
    }
};

export const addProductToShopingCart = data => {
    return {
        type: types.ADD_PRODUCT_TO_SHOPING_CART,
        data
    }
};

export const loadShopingCartFromLocalStorageInit = () => {
    return {
        type: types.LOAD_SHOPING_CART_FROM_LOCAL_STORAGE_INIT
    }
};

export const loadShopingCartFromLocalStorage = data => {
    return {
        type: types.LOAD_SHOPING_CART_FROM_LOCAL_STORAGE,
        data
    }
};

