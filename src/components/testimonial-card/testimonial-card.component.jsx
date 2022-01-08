import React from "react";
import { TestimonialCardContainer, ClientImage, Quotemark, ContentContainer, NameContainer, QuoteContainer } from "./testimonial-card.styles";
import pic1 from '../../assets/bee2.png';

const TestimonialCard = ({ name, imageUrl, quote }) => (
    <TestimonialCardContainer>
        <Quotemark>"</Quotemark>
        <ContentContainer >
            <ClientImage src={pic1} />
            <NameContainer>{name}</NameContainer>
            <QuoteContainer>{quote} </QuoteContainer>
        </ContentContainer>
    </TestimonialCardContainer>
)

export default TestimonialCard;