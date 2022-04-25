import ShopActionTypes from "./shop-types";

const initialState = {
    supplies: [],
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = (state = initialState, action) => {    
    switch(action.type){
        case ShopActionTypes.FETCH_SUPPLIES_START:
            return {
                ...state,
                isFetching: true
            }        

        case ShopActionTypes.FETCH_SUPPLIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                supplies: Object.values(action.payload)
            }

        case ShopActionTypes.FETCH_SUPPLIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default: return state; 
    }       
}

export default shopReducer;