import styled from "styled-components";
import background from "../../assets/bg3.jpg";
import './newsletter.styles.scss';

const NewsletterContainer = styled.div`
    height: 500px;
    background: url(${background}) no-repeat center center fixed; 
    background-size: cover;
    background-color: rgba(230, 230, 50, 0.9);
    background-blend-mode: multiply;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NewsletterContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NewsletterTitle = styled.h2`
    font-family: "Pushster", cursive;
    font-weight: 400;
    font-size: calc(2vw + 35px);
    text-shadow: 2px 2px #000000;
`

const NewsletterText = styled.p`
    text-shadow: 2px 2px #000000;
    width: 100%;
`

const NewsletterInput = styled.input`
    padding: 10px;
    width: 280px;
    margin: 5px;
    height: 50px;
    border: none;

    &:focus {
        outline: none;
    }
`

const NewsletterSignup = styled.button`
    margin: 5px;
    height: 40px;
`
export { NewsletterContainer, NewsletterContentContainer, NewsletterTitle, NewsletterText, NewsletterInput, NewsletterSignup };