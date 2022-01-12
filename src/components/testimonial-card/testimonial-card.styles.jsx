import styled from "styled-components";
import "./testimonial-card.styles.scss";

const TestimonialCardContainer = styled.div`
  height: 400px;
  width: 250px;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  border-radius: 10px;
  box-shadow: 10px 10px 20px black;
`;

const Quotemark = styled.p`
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  font-family: "The Nautigal", cursive;
  font-size: 200px;
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  top: 15%;
`;

const ClientImage = styled.img`
  width: 150px;
  height: 120px;
  //border-radius: 50%;
`;

const NameContainer = styled.h3`
  padding-bottom: 10px;
`;

const QuoteContainer = styled.p`
  text-align: center;
  width: 100%;
  height: 120px;
`;

export {
  TestimonialCardContainer,
  ClientImage,
  Quotemark,
  ContentContainer,
  NameContainer,
  QuoteContainer
};
