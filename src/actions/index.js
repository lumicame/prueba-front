
export const GET_PRODUCTS_FETCH = 'GET_PRODUCT_FETCH'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const UPDATE_CART = 'UPDATE_CART'
export const GET_CART = 'GET_CART'
export const DELETE_CART = 'DELETE_CART'
export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS'
export const getProductsFetch = () => ({
    type: GET_PRODUCTS_FETCH
});

export const updateCart = (product,value) => ({
    type: UPDATE_CART,
    product,
    value
});
export const deleteCart = () => ({
    type: DELETE_CART
});