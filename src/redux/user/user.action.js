import { UserActionTypes } from "./user.types";

const setCurrentUser = (user) => {
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    }
}

const setDelivery = ({ type, price }) => ({
    type: UserActionTypes.SET_DELIVERY,
    payload: {
        type,
        price
    }
})

const setPayment = ({ type, price }) => ({
    type: UserActionTypes.SET_PAYMENT,
    payload: {
        type,
        price
    }
})

const setUserInput = (event) => ({
        type: UserActionTypes.SET_USER_INPUT,
        payload: {
            [event.target.name]: event.target.value
        }
    }
)

export { setCurrentUser, setDelivery, setPayment, setUserInput };