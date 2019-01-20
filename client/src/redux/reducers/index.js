import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import shopingCartReducer from './shopingCartReducer';
import errReducer from './errReducer';

export default combineReducers({
    products: productsReducer,
    shopingCart: shopingCartReducer,
    errors: errReducer
});
