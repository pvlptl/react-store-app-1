import { put } from 'redux-saga/effects';
import {addProductToShopingCart, loadShopingCartFromLocalStorage} from "../actions/shopingCartActions";

export function* addProdctToShopingCartSaga(action) {

    const {shopingCart, product} = action;
    let data = {};
    const products = [...shopingCart];
    let isProductAlreadyInShopingCart = false;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === product.id) {
            isProductAlreadyInShopingCart = true;
            products[i].amount++;
        }
    }

    if (!isProductAlreadyInShopingCart) {
        data = {...product, amount: 1};
        const cartData = [...products, data];
        yield put(addProductToShopingCart(cartData));

        // save cart to local storage
        yield localStorage.setItem("shopingCart", JSON.stringify(cartData));
    }
    else {
        const cartData = [...products];
        yield put(addProductToShopingCart(cartData));

        // save cart to local storage
        yield localStorage.setItem("shopingCart", JSON.stringify(cartData));
    }

}

export function* loadShopingCartFromLocalStorageSaga() {

    const data = localStorage.getItem('shopingCart');
    if (data) {
        yield put(loadShopingCartFromLocalStorage(JSON.parse(data)));
    }

}
