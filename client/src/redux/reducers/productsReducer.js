import * as types from '../actions/ActionTypes';
const initialState = {
    data: [],
    productDetails: {
        data: {},
        loading: false
    }
};

export default function (state = initialState, action) {
    switch (action.type) {

        case types.GET_PRODUCTS_RESULT:
            return {
                ...state,
                data: action.data
            };

        case types.GET_PRODUCT_DETAILS_RESULT:
            return {
                ...state,
                productDetails: {
                    ...state.productDetails,
                    data: action.data
                }
            };

        case types.GET_PRODUCT_DETAILS_LOADING:
            return {
                ...state,
                productDetails: {
                    ...state.productDetails,
                    loading: action.data
                }
            };

        default:
            return state;
    }
}
