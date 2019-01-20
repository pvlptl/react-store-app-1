import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {watchProducts, watchShopingCart} from "./sagas";

const initialState = {

};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);

// sagas handlers
sagaMiddleware.run(watchProducts);
sagaMiddleware.run(watchShopingCart);

export default store;
