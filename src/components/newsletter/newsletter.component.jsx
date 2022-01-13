import React from 'react';
import { NewsletterContainer, NewsletterContentContainer, NewsletterTitle, NewsletterText, NewsletterInput, NewsletterInputContainer } from './newsletter.styles';
import CustomButton from '../custom-button/custom-button.component';
const Newsletter = () => (
    <NewsletterContainer>
        <NewsletterContentContainer>
            <NewsletterTitle>Hírlevél feliratkozás</NewsletterTitle>
            <NewsletterText>Iratkozz fel hírlevelünkre, hogy értesülj legfrissebb termékeinkről, akcióinkról.</NewsletterText>
            <NewsletterInputContainer>
                <NewsletterInput type='text' placeholder='Email cím'></NewsletterInput><CustomButton>Feliratkozás</CustomButton>
            </NewsletterInputContainer>
        </NewsletterContentContainer>
    </NewsletterContainer>
)

export default Newsletter;