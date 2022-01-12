import React from "react";
import {
  TestimonialCardContainer,
  ClientImage,
  Quotemark,
  ContentContainer,
  NameContainer,
  QuoteContainer
} from "./testimonial-card.styles";

const TestimonialCard = ({ name, imageUrl, quote }) => (
  <TestimonialCardContainer>
    <Quotemark>"</Quotemark>
    <ContentContainer>
      <QuoteContainer>{quote} </QuoteContainer>
      <ClientImage src={imageUrl} />
      <NameContainer>{name}</NameContainer>
    </ContentContainer>
  </TestimonialCardContainer>
);

export default TestimonialCard;
