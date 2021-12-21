import React from 'react';
import { CartItemContainer, ImgContainer, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ( {item: {imageURL, price, title, quantity }} ) =>(
    <CartItemContainer>
        <ImgContainer src={imageURL} />
        <ItemDetailsContainer>
            <span>{title}</span>
            <span>{quantity} x {price} Ft</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;