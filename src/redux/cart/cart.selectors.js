import { createSelector } from 'reselect';

const selectCart = state => state.cart;

const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
            (accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity, 0
        )    
)

const selectDeliveryType = createSelector(
    [selectCart],
    cart => cart.delivery.type
)

const selectPaymentType = createSelector(
    [selectCart],
    cart => cart.payment.type
)

const selectDeliveryCost = createSelector(
    [selectCart],
    cart => (cart.delivery.price + cart.payment.price) || 0
)

const selectCartItemsTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
            (accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity * cartItem.price, 0
        ) 
)

const selectUserInput = createSelector(
    [selectCart],
    cart => cart.userInput
)


export { selectCartItems, selectCartItemsCount, selectCartHidden, selectCartItemsTotal, selectDeliveryCost, selectDeliveryType, selectPaymentType, selectUserInput };