import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
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
        address: '',
        useDifferentAddressForInvoice: false,
        invoiceName: '',
        invoiceCity: '',
        invoicePost: '',
        invoiceAddress: ''
    },
    existingUsers: {}
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {...state,
            currentUser: action.payload
            };

        case UserActionTypes.SET_DELIVERY:
            return {
                ...state,
                delivery: {
                    type: action.payload.type,
                    price: action.payload.price
                }
            }

        case UserActionTypes.SET_PAYMENT:
            return {
                ...state,
                payment: {
                    type: action.payload.type,
                    price: action.payload.price
                }
            }
        
        case UserActionTypes.SET_USER_INPUT:
            return {
                ...state,
                userInput: { ...state.userInput, ...action.payload}
            }
        
        case UserActionTypes.ADD_EXISTING_USER:
            return {
                ...state,
                existingUsers: {...state.existingUsers, ...action.payload}
            }

        default: return state;        
    }
}

export default userReducer;