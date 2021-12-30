import styled from "styled-components";

const CheckoutPageContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto 0;
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
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

export { CheckoutPageContainer, CheckoutItemsContainer, CheckoutItemsHeaderTextContainer, DeliveryAndPaymentContainer, DeliveryContainer, PaymentContainer, CartTotalContainer, DeliveryFormContainer }