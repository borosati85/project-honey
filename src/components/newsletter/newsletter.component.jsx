import React from 'react';
import { NewsletterContainer, NewsletterContentContainer } from './newsletter.styles';

const Newsletter = () => (
    <NewsletterContainer>
        <NewsletterContentContainer>
            <h2>Hírlevél feliratkozás</h2>
            <p>Iratkozz fel hírlevelünkre, hogy értesülj legfrissebb termékeinkről, akcióinkról.</p>
            <div>
                <input type='text' placeholder='email'></input><button>Feliratkozás</button>
            </div>
        </NewsletterContentContainer>
    </NewsletterContainer>
)

export default Newsletter;