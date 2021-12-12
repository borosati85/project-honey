import React from 'react';
import './cart-item.styles.scss';
const CartItem = ( {item: {imageURL, price, title, quantity }} ) => {
    return (
        <div className='cart-item'>
            <img src={imageURL} />
            <div className='item-details'>
                <span className='name'>{title}</span>
                <span className='price'>{quantity} x {price} Ft</span>
            </div>
        </div>
    )
}

export default CartItem;