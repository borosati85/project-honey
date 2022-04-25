import React from 'react';
import { NewsletterContainer } from './newsletter.styles';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from '../newsletter-form/NewsletterForm.component';

const Newsletter = () => {

    const postUrl = `https://gmail.us20.list-manage.com/subscribe/post?u=f68f021203ed97371ccbe918f&id=761766af1c`;

    return (    
    <NewsletterContainer>
        <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
                <NewsletterForm status={status} message={message} onValidated={formData => subscribe(formData)}/>
            )}>                
        </MailchimpSubscribe>
    </NewsletterContainer>
    )
}

export default Newsletter;