import styled from "styled-components";

const CartDropDownContainer = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`

const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
`

const EmptyMessageContainer = styled.span`
    font-size: 24px;
    margin: auto 0 auto;
`

export { CartDropDownContainer, CartItemsContainer, EmptyMessageContainer }