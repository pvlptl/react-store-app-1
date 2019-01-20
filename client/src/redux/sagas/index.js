import {takeEvery, all} from 'redux-saga/effects';
import * as types from '../actions/ActionTypes';
import {getProductDetailsSaga, loadProductsSaga} from "./productsSagas";

export function* watchProducts() {
    yield all([
        takeEvery(types.GET_PRODUCTS, loadProductsSaga),
        takeEvery(types.GET_PRODUCT_DETAILS_INIT, getProductDetailsSaga)
    ]);
}
