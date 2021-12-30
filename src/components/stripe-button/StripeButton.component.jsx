import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K6y8CC8xRkRqfo3T8PWqHrC0XJesuO2ZGpWoPZmAKkOSz96UxfdC0M0dOP9ATds4M9xDmHaPkjfb58Ly3tYJ16u00W3BmXMVI';
    
    const onToken = () => {
        alert('Payment successful')
    }

    return(
        <StripeCheckout
            label='Fizetés kártyával'
            name='Honey Kft.'
            billingAddress
            shippingAddress
            description={`Fizetendő összegX: ${price} Ft`}
            amount={priceForStripe}
            panelLabel='Fizetés kártyával'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton