import styled from "styled-components";

const TestimonialsContainer = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TestimonalsTitle = styled.h2`
    font-family: "Pushster", cursive;
    font-weight: 400;
    font-size: calc(2vw + 35px);
`

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Arrow = styled.div`
    cursor: pointer;
    font-size: 60px;
`

export { TestimonialsContainer, TestimonalsTitle, CardContainer, Arrow };