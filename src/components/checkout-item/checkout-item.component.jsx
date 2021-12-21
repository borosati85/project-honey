import React from 'react';
import { clearItemFromCart } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux';
import { addItem, removeItem } from '../../redux/cart/cart.actions'
import { CheckoutItemContainer, ImageContainer, CheckoutImage, NameContainer, QuantityContainer, PriceContainer, RemoveButton, Arrow, ValueContainer } from './checkout-item.styles';

const CheckoutItem = ({ item, clearItemFromCart, addItem, removeItem }) => {
    const { title, quantity, price, imageURL } = item;
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <CheckoutImage src={imageURL} alt='product-picture'/>
        </ImageContainer>
        <NameContainer>{title}</NameContainer>
        <QuantityContainer>
            <Arrow onClick={()=>removeItem(item)}>&#10094;</Arrow>
            <ValueContainer>{quantity}</ValueContainer>
            <Arrow onClick={()=>addItem({...item, quantity: 1})}>&#10095;</Arrow>
        </QuantityContainer>
        <PriceContainer>{price} Ft</PriceContainer>
        <RemoveButton onClick={()=> clearItemFromCart(item)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);