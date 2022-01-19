import React from 'react';
import { CheckoutPageContainer, CheckoutItemsContainer, CheckoutItemsHeaderTextContainer, DeliveryAndPaymentContainer, DeliveryContainer, PaymentContainer, CartTotalContainer, DeliveryFormContainer, OrderButtonContainer } from './checkout-page.styles';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import { selectDeliveryCost, selectDeliveryType, selectPaymentType, selectUserInput } from '../../redux/user/user.selectors.js'
import { setDelivery, setPayment, setUserInput } from '../../redux/user/user.action'
import CustomButton from '../../components/custom-button/custom-button.component'
import StripeCheckoutButton from '../../components/stripe-button/StripeButton.component';
import FormInput from '../../components/form-input/form-input.component';


const CheckoutPage = ({ cartItems, cartItemsTotal, deliveryCost, setDelivery, setPayment, deliveryType, paymentType, setUserInput, userInput }) => {
    const handleDeliveryChange = (type, price) => {
        if((type === 'gls' || type === 'post') && paymentType === 'cash') {
            setPayment({type:'debit-card', price:0})
        } else if (type === 'in-person' && paymentType === 'on-delivery') {
            setPayment({type:'cash', price:0})
        }
        setDelivery({type, price})
    }
    return (
        <CheckoutPageContainer>
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
            <CartTotalContainer>Összesen: {cartItemsTotal + deliveryCost} Ft</CartTotalContainer>
            <div className='details'>
                <p>Adatok</p>
                <DeliveryFormContainer>
                    <FormInput
                    type='text'
                    name='name' 
                    label='Név' 
                    value={userInput.name}
                    onChange={(event)=> setUserInput(event)}
                    required
                    />
                    <FormInput
                    type='email'
                    name='email' 
                    label='Email' 
                    value={userInput.email}
                    onChange={(event)=> setUserInput(event)}
                    required
                    />
                    <FormInput
                    type='tel'
                    name='tel' 
                    label='Telefon' 
                    value={userInput.tel}
                    onChange={(event)=> setUserInput(event)}
                    required
                    />
                    <FormInput
                    type='text'
                    name='country' 
                    label='Ország' 
                    value='Magyarország'
                    readOnly
                    required
                    />
                    <FormInput
                    type='text'
                    name='post' 
                    label='Irányítószám' 
                    value={userInput.post}
                    onChange={(event)=> setUserInput(event)}
                    required
                    />
                    <FormInput
                    type='text'
                    name='city' 
                    label='Város' 
                    value={userInput.city}
                    onChange={(event)=> setUserInput(event)}
                    required
                    />
                    <FormInput
                    type='text'
                    name='address' 
                    label='Utca/házszám' 
                    value={userInput.address}
                    onChange={(event)=> setUserInput(event)}
                    required
                    />
                </DeliveryFormContainer>
            </div>
            <OrderButtonContainer>
            {
                paymentType === 'debit-card' ? <StripeCheckoutButton price={cartItemsTotal + deliveryCost}/> 
                : <CustomButton>Megrendelés leadása</CustomButton>
            }
            </OrderButtonContainer>

        </CheckoutPageContainer>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsTotal,
    deliveryCost: selectDeliveryCost,
    deliveryType: selectDeliveryType,
    paymentType: selectPaymentType,
    userInput: selectUserInput
})

const mapDispatchToProps = dispatch => ({
    setDelivery: item => dispatch(setDelivery(item)),
    setPayment: item => dispatch(setPayment(item)),
    setUserInput: input => dispatch(setUserInput(input))
})


export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);