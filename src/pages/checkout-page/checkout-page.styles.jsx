import styled from "styled-components";

const CheckoutPageContainer = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    margin: 200px auto 50px;
`

const CartTotalContainer = styled.div`
    width: 100%;
    margin: 30px auto 50px;
    text-align: right;
    font-size: 36px;
    border-bottom: 1px solid darkgrey;
`

const OrderButtonContainer = styled.div`
    margin: 20px auto 20px auto;
`

export { CheckoutPageContainer, CartTotalContainer, OrderButtonContainer }