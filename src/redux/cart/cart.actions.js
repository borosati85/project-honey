import CartActionTypes from "./cart.types";

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

const setDelivery = ({ type, price }) => ({
    type: CartActionTypes.SET_DELIVERY,
    payload: {
        type,
        price
    }
})

const setPayment = ({ type, price }) => ({
    type: CartActionTypes.SET_PAYMENT,
    payload: {
        type,
        price
    }
})

const setUserInput = (event) => ({
        type: CartActionTypes.SET_USER_INPUT,
        payload: {
            [event.target.name]: event.target.value
        }
    }
)



export { toggleCartHidden, addItem, removeItem, clearItemFromCart, setDelivery, setPayment, setUserInput }