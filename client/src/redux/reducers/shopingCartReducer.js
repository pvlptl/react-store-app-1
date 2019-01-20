import * as types from '../actions/ActionTypes';
const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {

        case types.LOAD_SHOPING_CART_FROM_LOCAL_STORAGE:
            return action.data;

        case types.ADD_PRODUCT_TO_SHOPING_CART:
            return action.data;

        default:
            return state;
    }
}
