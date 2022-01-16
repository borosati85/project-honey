import styled from "styled-components";
import { device } from '../../common/breakpoints';

const CartDropDownContainer = styled.div`
    @media only screen and ${device.xs} {
        position: absolute;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        border: 1px solid black;
        background-color: white;
        top: 90px;
        z-index: 10;
    }
    @media only screen and ${device.m} {
        width: 300px;
        height: 400px;
        right: 40px;
    }

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