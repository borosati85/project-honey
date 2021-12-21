import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal, selectDeliveryCost, selectDeliveryType, selectPaymentType, selectUserInput } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import FormInput from '../../components/form-input/form-input.component'
import { setDelivery, setPayment, setUserInput, toggleCartHidden } from '../../redux/cart/cart.actions';
import { Navigate } from 'react-router-dom';

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
        <div className='checkout-page'>
            <div className='checkout-items'>
                <div className='items-block'>
                    <span>Termék</span>
                </div>
                <div className='items-block'>
                    <span>Név</span>
                </div>
                <div className='items-block'>
                    <span>Mennyiség</span>
                </div>
                <div className='items-block'>
                    <span>Ár</span>
                </div>
                <div className='items-block'>
                    <span>Törlés</span>
                </div>
            </div>
            {   
                cartItems.length ?
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem}/>)
                :
                <Navigate to='/shop'/>
            }
            <div className='checkout-delivery-and-payment'>
                <div className='delivery'>
                    <p>Átvétel</p>
                    <input type="radio" id="gls" name='delivery' value='gls' checked={deliveryType === 'gls'} onChange={()=> handleDeliveryChange('gls', 1290)}/>
                    <label htmlFor="gls">GLS futárszolgálat (+ 1 290 Ft)</label><br/>
                    <input type="radio" id="post" name='delivery' value='post' checked={deliveryType === 'post'} onChange={()=> handleDeliveryChange('post', 990)}/>
                    <label htmlFor="post">Postapont (+ 990 Ft)</label><br/>
                    <input type="radio" id="in-person" name='delivery' value='in-person' checked={deliveryType === 'in-person'} onChange={()=> handleDeliveryChange('in-person', 0)}/>
                    <label htmlFor="in-person">Személyesen (ingyenes)</label><br/>
                </div>
                <div className='payment'>
                    <p>Fizetés</p>
                    <input type="radio" id="debit-card" name='pay' value='debit-card' checked={paymentType === 'debit-card'} disabled={!deliveryType} onChange={()=> setPayment({type:'debit-card', price:0})}/>
                    <label htmlFor="debit-card">Bankkártya</label><br/>
                    <input type="radio" id="on-delivery" name='pay' value='on-delivery' checked={paymentType === 'on-delivery'} disabled={!deliveryType || deliveryType === 'in-person'} onChange={()=> setPayment({type:'on-delivery', price:390})}/>
                    <label htmlFor="on-delivery">Utánvét (+ 390 Ft)</label><br/>
                    <input type="radio" id="cash" name='pay' value='cash' checked={paymentType === 'cash'} disabled={!deliveryType || deliveryType !== 'in-person'} onChange={()=> setPayment({type:'cash', price:0})}/>
                    <label htmlFor="cash">Készpénz</label><br/>
                </div>
            </div>
            <div className='total'>Összesen: {cartItemsTotal + deliveryCost} Ft</div>
            <div className='details'>
                <p>Adatok</p>
                <form className='user-details'>
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
                </form>
            </div>
        </div>
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