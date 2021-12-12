import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { createBrowserHistory } from 'history';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { Link } from 'react-router-dom';


const CartDropDown = ({ cartItems, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                        : <span class='empty-message'>Your cart is empty</span>
                }
            </div>
            <Link to='/checkout'>
                <CustomButton onClick={() => {
                    dispatch(toggleCartHidden());
                    }}>GO TO CHECKOUT
                </CustomButton>
            </Link>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropDown);