import React from "react";
import {
  CheckoutPageContainer,
  CartTotalContainer,
  OrderButtonContainer
} from "./checkout-page.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import {
  selectDeliveryCost,
  selectPaymentType,
  selectUserInput
} from "../../redux/user/user.selectors.js";
import { addExistingUser } from "../../redux/user/user.action";
import CustomButton from "../../components/custom-button/custom-button.component";
import StripeCheckoutButton from "../../components/stripe-button/StripeButton.component";
import CheckoutSummaryComponent from "../../components/checkout-summary/checkout-summary.component";
import UserAddressInputForm from "../../components/user-address-input-form/user-address-input-form.component";
import { auth, storeUserAddress } from "../../firebase/firebase.utils";

const CheckoutPage = ({
  cartItemsTotal,
  deliveryCost,
  paymentType,
  userInput,
  addExistingUser
}) => {
  const handleClick = () => {
    //validation
    if (
      (!userInput.useDifferentAddressForInvoice &&
        userInput.name &&
        userInput.email &&
        userInput.tel &&
        userInput.city &&
        userInput.post &&
        userInput.address) ||
      (userInput.useDifferentAddressForInvoice &&
        userInput.name &&
        userInput.email &&
        userInput.tel &&
        userInput.city &&
        userInput.post &&
        userInput.address &&
        userInput.invoiceName &&
        userInput.invoiceCity &&
        userInput.invoicePost &&
        userInput.invoiceAddress)
    ) {
      addExistingUser(userInput);
      storeUserAddress(auth.currentUser, userInput);
      alert("Köszönjük a megrendelést");
    } else {
      alert("Kérjük töltse ki a címadatokat");
    }
  };

  return (
    <CheckoutPageContainer>
      <CheckoutSummaryComponent />
      <CartTotalContainer>
        Összesen: {cartItemsTotal + deliveryCost} Ft
      </CartTotalContainer>
      <UserAddressInputForm />
      <OrderButtonContainer>
        {paymentType === "debit-card" ? (
          <StripeCheckoutButton price={cartItemsTotal + deliveryCost} />
        ) : (
          <CustomButton onClick={handleClick}>Megrendelés</CustomButton>
        )}
      </OrderButtonContainer>
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsTotal: selectCartItemsTotal,
  deliveryCost: selectDeliveryCost,
  paymentType: selectPaymentType,
  userInput: selectUserInput
});

const dispatchStateToProps = (dispatch) => ({
  addExistingUser: (user) => dispatch(addExistingUser(user))
});

export default connect(mapStateToProps, dispatchStateToProps)(CheckoutPage);
