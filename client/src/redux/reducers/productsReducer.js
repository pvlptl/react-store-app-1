import * as types from '../actions/ActionTypes';
const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {

        case types.GET_PRODUCTS_RESULT:
            return action.data;

        default:
            return state;
    }
}
