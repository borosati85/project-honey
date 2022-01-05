import React from 'react';
import { NewsletterContainer, NewsletterContentContainer, NewsletterTitle, NewsletterText, NewsletterInput, NewsletterSignup } from './newsletter.styles';
import CustomButton from '../custom-button/custom-button.component';
const Newsletter = () => (
    <NewsletterContainer>
        <NewsletterContentContainer>
            <NewsletterTitle>Hírlevél feliratkozás</NewsletterTitle>
            <NewsletterText>Iratkozz fel hírlevelünkre, hogy értesülj legfrissebb termékeinkről, akcióinkról.</NewsletterText>
            <div>
                <NewsletterInput type='text' placeholder='Email cím'></NewsletterInput><CustomButton>Feliratkozás</CustomButton>
            </div>
        </NewsletterContentContainer>
    </NewsletterContainer>
)

export default Newsletter;