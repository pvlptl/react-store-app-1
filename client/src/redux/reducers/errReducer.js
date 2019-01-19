import * as types from '../actions/ActionTypes';
const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {

        case types.GET_ERRORS:
            return action.data;

        case types.CLEAR_ERRORS:
            return initialState;

        default:
            return state;
    }
}
