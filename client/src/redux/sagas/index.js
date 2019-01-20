import {takeEvery, all} from 'redux-saga/effects';
import * as types from '../actions/ActionTypes';
import {getProductDetailsSaga, loadProductsSaga} from "./productsSagas";
import {
    addProdctToShopingCartSaga,
    loadShopingCartFromLocalStorageSaga,
    removeProductFromShopingCartSaga
} from "./shopingCartSagas";

export function* watchProducts() {
    yield all([
        takeEvery(types.GET_PRODUCTS, loadProductsSaga),
        takeEvery(types.GET_PRODUCT_DETAILS_INIT, getProductDetailsSaga)
    ]);
}

export function* watchShopingCart() {
    yield all([
        takeEvery(types.ADD_PRODUCT_TO_SHOPING_CART_INIT, addProdctToShopingCartSaga),
        takeEvery(types.LOAD_SHOPING_CART_FROM_LOCAL_STORAGE_INIT, loadShopingCartFromLocalStorageSaga),
        takeEvery(types.REMOVE_PRODUCT_FROM_SHOPING_CART_INIT, removeProductFromShopingCartSaga)
    ]);
}
