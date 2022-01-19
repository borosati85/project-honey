import styled from "styled-components";

const CheckoutPageContainer = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    margin: 200px auto 50px;
`

const CheckoutItemsContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

const CheckoutItemsHeaderTextContainer = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
    width: 8%;
    }
`

const DeliveryAndPaymentContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid darkgrey;
`

const DeliveryContainer = styled.div`
    width: 50%;
`

const PaymentContainer = styled.div`
    width: 50%;
`

const CartTotalContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
    text-align: right;
    padding: 10px 0;
    border-bottom: 1px solid darkgrey;
`

const DeliveryFormContainer = styled.form`
    width: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`

const OrderButtonContainer = styled.div`
    margin: 20px auto 20px auto;
`

export { CheckoutPageContainer, CheckoutItemsContainer, CheckoutItemsHeaderTextContainer, DeliveryAndPaymentContainer, DeliveryContainer, PaymentContainer, CartTotalContainer, DeliveryFormContainer, OrderButtonContainer }