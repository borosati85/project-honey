import { createSelector } from 'reselect';
import { selectCart } from '../cart/cart.selectors';

const selectUser = state => state.user;

const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)

const selectDeliveryType = createSelector(
    [selectUser],
    user => user.delivery.type
)

const selectPaymentType = createSelector(
    [selectUser],
    user => user.payment.type
)

const selectDeliveryCost = createSelector(
    [selectUser],
    user => user.delivery.price + user.payment.price
)

const selectUserInput = createSelector(
    [selectUser],
    user => user.userInput
)

export { selectCurrentUser, selectDeliveryType, selectPaymentType, selectDeliveryCost, selectUserInput};