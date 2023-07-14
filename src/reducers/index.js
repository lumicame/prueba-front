import { DELETE_CART_SUCCESS, GET_CART, GET_PRODUCTS_SUCCESS } from "../actions";
import { addProductCart } from "../helper";

const reducer = (state = { products: [],cart:[] }, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            let list= JSON.parse(localStorage.getItem('cart'))
            return { ...state, products: action.products,cart:list?list:[]};
        case GET_CART:
            let newCart = addProductCart(state.cart,action.product,action.value)
            localStorage.setItem('cart',JSON.stringify(newCart))
            console.log(newCart)
            return { ...state, cart: [...newCart] };
        case DELETE_CART_SUCCESS:
            localStorage.setItem('cart',JSON.stringify([]))
            return { ...state, cart: [...[]] };
        default:
            return state;
    }
};
export default reducer;