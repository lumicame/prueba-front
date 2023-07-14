import { call, put, all, takeEvery, select } from 'redux-saga/effects';
import { DELETE_CART, DELETE_CART_SUCCESS, GET_CART, GET_PRODUCTS_FETCH, GET_PRODUCTS_SUCCESS, UPDATE_CART } from '../actions';
import { productsFetch } from '../api/product';

function* workGetProductsFetch() {
    const products = yield call(productsFetch)
    yield put({ type: GET_PRODUCTS_SUCCESS, products });
}

function* workUpdateCart({ product, value }) {
    yield put({ type: GET_CART, product: product, value: value });
}
function* workDeleteCart() {
    yield put({ type: DELETE_CART_SUCCESS });
}
function* mySaga() {
    yield takeEvery(GET_PRODUCTS_FETCH, workGetProductsFetch)
    yield takeEvery(UPDATE_CART, workUpdateCart)
    yield takeEvery(DELETE_CART, workDeleteCart)
}
export default mySaga;
