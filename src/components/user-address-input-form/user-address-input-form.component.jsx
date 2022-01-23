import React, {useState} from 'react';
import { DeliveryFormContainer } from './user-address-input-form.style';
import FormInput from '../form-input/form-input.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserInput } from '../../redux/user/user.selectors';
import { setUserInput } from '../../redux/user/user.action';

const UserAddressInputForm = ( {userInput, setUserInput} ) => {
    const [showSecondAddress, toggleSecondAddress] = useState(true);

    const handleAddressDisplay = () => {
        toggleSecondAddress(prevState => !prevState);
    };

    return (
        <div className='details'>
            <p><input type='checkbox' onChange={handleAddressDisplay} />Szállítási és számlázási adatok megegyeznek</p>
            {
                showSecondAddress ?
                <p>Szállítási adatok</p>
                :
                <p>Szállítási és számlázási adatok</p>
            }
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
            {
                showSecondAddress ? 
                    <div>
                    <p>Számlázási Adatok</p>
                    <DeliveryFormContainer>
                    <FormInput
                    type='text'
                    name='invoiceName' 
                    label='Név' 
                    value={userInput.invoiceName}
                    onChange={(event)=> setUserInput(event)}
                    required
                    />
                    <FormInput
                    type='text'
                    name='Country' 
                    label='Ország' 
                    value='Magyarország'
                    readOnly
                    required
                    />
                    <FormInput
                    type='text'
                    name='invoicePost' 
                    label='Irányítószám' 
                    value={userInput.invoicePost}
                    onChange={(event)=> setUserInput(event)}
                    required
                    />
                    <FormInput
                    type='text'
                    name='invoiceCity' 
                    label='Város' 
                    value={userInput.invoiceCity}
                    onChange={(event)=> setUserInput(event)}
                    required
                    />
                    <FormInput
                    type='text'
                    name='invoiceAddress' 
                    label='Utca/házszám' 
                    value={userInput.invoiceAddress}
                    onChange={(event)=> setUserInput(event)}
                    required
                    />
                </DeliveryFormContainer>
                </div>
                : null
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector ({
    userInput: selectUserInput
})

const mapDispatchToProps = dispatch => ({
    setUserInput: input => dispatch(setUserInput(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAddressInputForm);