import styled from "styled-components";
import background from "../../assets/hexbg.png";

const TestimonialsContainer = styled.div`
    background: url(${background});
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: multiply;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TestimonalsTitle = styled.h2`
    font-family: "Pushster", cursive;
    font-weight: 400;
    font-size: calc(2vw + 35px);
    color: white;
    text-shadow: 2px 2px #000000;
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