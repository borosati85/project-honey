import React, { useState } from 'react';
import { NewsletterContentContainer, NewsletterTitle, NewsletterText, NewsletterInputContainer, NewsletterInput } from './newsletterform.styles';
import CustomButton from '../custom-button/custom-button.component';

const NewsletterForm = ({ status, message, onValidated }) => {
    const [userCredentials, setUserCredentials] = useState({firstName:'', lastName:'', email:''});

    const handleChange = (event) => {
        setUserCredentials({
            ...userCredentials,
            [event.target.name]: event.target.value
        })      
    }

    const validateEmail = (email) => {
        const pattern = /^[\w\d]{3,}@[\w]{3,}\.[\w]{2,3}$/i
        return pattern.test(email);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, firstName, lastName } = userCredentials;
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
        setUserCredentials({firstName:'', lastName:'', email:''})
    }

    return (
        <NewsletterContentContainer>
            <NewsletterTitle>Hírlevél feliratkozás</NewsletterTitle>

            <NewsletterText>
                {status === 'sending'
                ? 'Küldés...'
                : status === 'success'
                ? 'Köszönjük a feliratkozást'
                : status === 'error'
                ? `Hiba történt: ${message}`
                : 'Iratkozz fel hírlevelünkre, hogy értesülj legfrissebb termékeinkről, akcióinkról.'
                }                
            </NewsletterText>

            <NewsletterInputContainer onSubmit={e => handleSubmit(e)}>      
                <NewsletterInput type='text' name='lastName' onChange={handleChange} value={userCredentials.lastName} placeholder='Vezetéknév'></NewsletterInput> 
                <NewsletterInput type='text' name='firstName' onChange={handleChange} value={userCredentials.firstName} placeholder='Keresztnév'></NewsletterInput>          
                <NewsletterInput type='email' name='email' onChange={handleChange} value={userCredentials.email} placeholder='Email cím'></NewsletterInput>
                <CustomButton type='submit'>Feliratkozás</CustomButton>
            </NewsletterInputContainer>
        </NewsletterContentContainer>
    )
}

export default NewsletterForm;