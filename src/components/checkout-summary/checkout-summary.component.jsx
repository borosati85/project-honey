import React from "react";
import { CheckoutItemsContainer, CheckoutItemsHeaderTextContainer, DeliveryAndPaymentContainer, DeliveryContainer, PaymentContainer } from './checkout-summary.styles';
import CheckoutItem from "../checkout-item/checkout-item.component";
import { Navigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectDeliveryCost, selectDeliveryType, selectPaymentType } from '../../redux/user/user.selectors.js'
import { setDelivery, setPayment } from '../../redux/user/user.action'
import { connect } from "react-redux";

const CheckoutSummary = ({ cartItems, paymentType, deliveryType, setPayment, setDelivery }) => {

    const handleDeliveryChange = (type, price) => {
        if((type === 'gls' || type === 'post') && paymentType === 'cash') {
            setPayment({type:'debit-card', price:0})
        } else if (type === 'in-person' && paymentType === 'on-delivery') {
            setPayment({type:'cash', price:0})
        }
        setDelivery({type, price})
    }

    return (
        <>
        <CheckoutItemsContainer>
            <CheckoutItemsHeaderTextContainer>
                <span>Termék</span>
            </CheckoutItemsHeaderTextContainer>
            <CheckoutItemsHeaderTextContainer>
                <span>Név</span>
            </CheckoutItemsHeaderTextContainer>
            <CheckoutItemsHeaderTextContainer>
                <span>Mennyiség</span>
            </CheckoutItemsHeaderTextContainer>
            <CheckoutItemsHeaderTextContainer>
                <span>Ár</span>
            </CheckoutItemsHeaderTextContainer>
            <CheckoutItemsHeaderTextContainer>
                <span>Törlés</span>
            </CheckoutItemsHeaderTextContainer>
        </CheckoutItemsContainer>
        {   
            cartItems.length ?
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem}/>)
            :
            <Navigate to='/shop/#shop'/>
        }
        <DeliveryAndPaymentContainer>
            <DeliveryContainer>
                <p>Átvétel</p>
                <input type="radio" id="gls" name='delivery' value='gls' checked={deliveryType === 'gls'} onChange={()=> handleDeliveryChange('gls', 1290)}/>
                <label htmlFor="gls">GLS futárszolgálat (+ 1 290 Ft)</label><br/>
                <input type="radio" id="post" name='delivery' value='post' checked={deliveryType === 'post'} onChange={()=> handleDeliveryChange('post', 990)}/>
                <label htmlFor="post">Postapont (+ 990 Ft)</label><br/>
                <input type="radio" id="in-person" name='delivery' value='in-person' checked={deliveryType === 'in-person'} onChange={()=> handleDeliveryChange('in-person', 0)}/>
                <label htmlFor="in-person">Személyesen (ingyenes)</label><br/>
            </DeliveryContainer>
            <PaymentContainer>
                <p>Fizetés</p>
                <input type="radio" id="debit-card" name='pay' value='debit-card' checked={paymentType === 'debit-card'} disabled={!deliveryType} onChange={()=> setPayment({type:'debit-card', price:0})}/>
                <label htmlFor="debit-card">Bankkártya</label><br/>
                <input type="radio" id="on-delivery" name='pay' value='on-delivery' checked={paymentType === 'on-delivery'} disabled={!deliveryType || deliveryType === 'in-person'} onChange={()=> setPayment({type:'on-delivery', price:390})}/>
                <label htmlFor="on-delivery">Utánvét (+ 390 Ft)</label><br/>
                <input type="radio" id="cash" name='pay' value='cash' checked={paymentType === 'cash'} disabled={!deliveryType || deliveryType !== 'in-person'} onChange={()=> setPayment({type:'cash', price:0})}/>
                <label htmlFor="cash">Készpénz</label><br/>
            </PaymentContainer>
        </DeliveryAndPaymentContainer>
        </>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    deliveryCost: selectDeliveryCost,
    deliveryType: selectDeliveryType,
    paymentType: selectPaymentType,
})

const mapDispatchToProps = dispatch => ({
    setDelivery: item => dispatch(setDelivery(item)),
    setPayment: item => dispatch(setPayment(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSummary);