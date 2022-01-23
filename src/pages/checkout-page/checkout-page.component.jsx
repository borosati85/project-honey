import React from 'react';
import { CheckoutPageContainer, CartTotalContainer, OrderButtonContainer } from './checkout-page.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import { selectDeliveryCost, selectPaymentType } from '../../redux/user/user.selectors.js'
import CustomButton from '../../components/custom-button/custom-button.component'
import StripeCheckoutButton from '../../components/stripe-button/StripeButton.component';
import CheckoutSummaryComponent from '../../components/checkout-summary/checkout-summary.component';
import UserAddressInputForm from '../../components/user-address-input-form/user-address-input-form.component';



const CheckoutPage = ({ cartItemsTotal, deliveryCost, paymentType }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutSummaryComponent />
            <CartTotalContainer>Összesen: {cartItemsTotal + deliveryCost} Ft</CartTotalContainer>
            <UserAddressInputForm/>
            <OrderButtonContainer>
            {
                paymentType === 'debit-card' ? <StripeCheckoutButton price={cartItemsTotal + deliveryCost}/> 
                : <CustomButton>Megrendelés leadása</CustomButton>
            }
            </OrderButtonContainer>

        </CheckoutPageContainer>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItemsTotal: selectCartItemsTotal,
    deliveryCost: selectDeliveryCost,
    paymentType: selectPaymentType,
})

export default connect(mapStateToProps)(CheckoutPage);