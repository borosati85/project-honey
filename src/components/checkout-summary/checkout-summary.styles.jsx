import styled from "styled-components";

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

export { CheckoutItemsContainer, CheckoutItemsHeaderTextContainer, DeliveryAndPaymentContainer, DeliveryContainer, PaymentContainer }