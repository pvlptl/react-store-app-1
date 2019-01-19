import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import errReducer from './errReducer';

export default combineReducers({
    products: productsReducer,
    errors: errReducer
});
