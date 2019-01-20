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

        case types.MARK_PRODUCT_AS_IN_SHOPING_CART:

            const products = [...state.data];
            for (let i = 0; i < products.length; i++) {
                if (products[i].id === action.data.id) products[i].inShopingCart = true;
            }

            return {
                ...state,
                data: [...products]
            };

        default:
            return state;
    }
}
