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
      <ClientImage src={imageUrl} />
      <NameContainer>{name}</NameContainer>
      <QuoteContainer>{quote} </QuoteContainer>
    </ContentContainer>
  </TestimonialCardContainer>
);

export default TestimonialCard;
