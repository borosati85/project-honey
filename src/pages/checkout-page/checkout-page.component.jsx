import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CheckoutPage = ({ cartItems, cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Név</span>
            </div>
            <div className='header-block'>
                <span>Mennyiség</span>
            </div>
            <div className='header-block'>
                <span>Ár</span>
            </div>
            <div className='header-block'>
                <span>Törlés</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem}/>)
        }
        <div className='total'>Összesen: {cartTotal} Ft</div>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);