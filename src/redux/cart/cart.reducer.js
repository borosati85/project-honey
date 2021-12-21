import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    delivery: {
        type: 'in-person',
        price: 0
    },
    payment: {
        type: 'cash',
        price: 0
    },
    userInput: {
        name: '',
        email: '',
        tel: '',
        country: 'Magyarország',
        city: '',
        post: '',
        address: ''
    }
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        case CartActionTypes.SET_DELIVERY:
            return {
                ...state,
                delivery: {
                    type: action.payload.type,
                    price: action.payload.price
                }
            }

        case CartActionTypes.SET_PAYMENT:
            return {
                ...state,
                payment: {
                    type: action.payload.type,
                    price: action.payload.price
                }
            }
        
        case CartActionTypes.SET_USER_INPUT:
            return {
                ...state,
                userInput: { ...state.userInput, ...action.payload}
            }

        default: return state;
    }
}

export default cartReducer;