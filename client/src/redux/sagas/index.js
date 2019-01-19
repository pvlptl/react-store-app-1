import {takeEvery, all} from 'redux-saga/effects';
import {loadProductsSaga} from "./productsSagas";
import * as types from '../actions/ActionTypes';

export function* watchProducts() {
    yield all([
        takeEvery(types.GET_PRODUCTS, loadProductsSaga)
    ]);
}
