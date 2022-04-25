import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { CartDropDownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { Link } from 'react-router-dom';


const CartDropDown = ({ cartItems, dispatch}) => {
    return (
        <CartDropDownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                        : <EmptyMessageContainer>Üres</EmptyMessageContainer>
                }
            </CartItemsContainer>
            {
                cartItems.length ?
                <Link to='/checkout'>
                    <CustomButton onClick={() => {
                        dispatch(toggleCartHidden());
                        }}>PÉNZTÁR
                    </CustomButton>
                </Link>
                :null
            }
        </CartDropDownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropDown);