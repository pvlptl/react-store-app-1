import { put } from 'redux-saga/effects';
import axios from "axios";
import {clearErrors, getErrors} from "../actions/errActions";
import {getProductDetailsLoading, getProductDetailsResult, getProducutsResult} from "../actions/productsActions";

export function* loadProductsSaga() {

    try {

        yield put(clearErrors());
        const response = yield axios.get('/api/products');
        yield put(getProducutsResult(response.data));

    }
    catch (err) {

        yield put(getErrors(err));

    }

}

export function* getProductDetailsSaga(action) {

    try {

        yield put(getProductDetailsLoading(true));
        const response = yield axios.get(`/api/products/${action.id}`);
        yield put(getProductDetailsResult(response.data));
        yield put(getProductDetailsLoading(false));

    }
    catch (err) {

        yield put(getErrors(err));

    }

}
