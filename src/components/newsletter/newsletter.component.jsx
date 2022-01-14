import React, { useState } from 'react';
import { NewsletterContainer, NewsletterContentContainer, NewsletterTitle, NewsletterText, NewsletterInput, NewsletterInputContainer } from './newsletter.styles';
import CustomButton from '../custom-button/custom-button.component';

const Newsletter = () => {
    const [userEmail, setUserEmail] = useState('');
    const handleChange = (event) => {
        setUserEmail(event.target.value);
    }

    const validateEmail = (email) => {
        const pattern = /^[\w\d]{3,}@[\w]{3,}\.[\w]{2,3}$/i
        return pattern.test(email);
    }

    const handleSubmit = () => {
        const email = userEmail;
        if (validateEmail(email)) {
            alert('Köszönjük a feliratkozást');
            setUserEmail('');
        } else {
            (alert('Az email cím nem megfelelő'))
        }
    }

    return (
    <NewsletterContainer>
        <NewsletterContentContainer>
            <NewsletterTitle>Hírlevél feliratkozás</NewsletterTitle>
            <NewsletterText>Iratkozz fel hírlevelünkre, hogy értesülj legfrissebb termékeinkről, akcióinkról.</NewsletterText>
            <NewsletterInputContainer>                
                <NewsletterInput type='email' onChange={handleChange} value={userEmail} placeholder='Email cím'></NewsletterInput><CustomButton onClick={handleSubmit}>Feliratkozás</CustomButton>
            </NewsletterInputContainer>
        </NewsletterContentContainer>
    </NewsletterContainer>
    )
}

export default Newsletter;