import { put } from 'redux-saga/effects';
import axios from "axios";
import {getErrors} from "../actions/errActions";
import {getProducutsResult} from "../actions/productsActions";

export function* loadProductsSaga() {

    try {

        const response = yield axios.get('/api/products');
        yield put(getProducutsResult(response.data));

    }
    catch (err) {

        yield put(getErrors(err));

    }

}
