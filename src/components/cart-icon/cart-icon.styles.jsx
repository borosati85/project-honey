import styled from "styled-components";
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';

const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;    
    color: black; !important;
    filter: invert(100%) sepia(0%) saturate(2675%) hue-rotate(336deg) brightness(90%) contrast(70%);
`

const ShoppingIcon = styled(Icon)`
    width: 24px;
    height: 24px;    
`

const ItemCountContainner = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`

export { CartIconContainer, ShoppingIcon, ItemCountContainner }