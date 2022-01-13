import styled from "styled-components";
import background from "../../assets/bg3.jpg";
import './newsletter.styles.scss';
import { device } from '../../common/breakpoints';

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
    justify-content: center;
`
const NewsletterTitle = styled.h2`
    font-family: "Pushster", cursive;
    font-weight: 400;
    font-size: calc(2vw + 35px);
    text-shadow: 2px 2px #000000;
    text-align: center;
`

const NewsletterText = styled.p`
    @media only screen and ${device.xs} {
        text-shadow: 2px 2px #000000;
        width: 100%;
        text-align: center;
    }

`

const NewsletterInputContainer = styled.div`
    @media only screen and ${device.xs} {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 5px;
    }
    @media only screen and ${device.m} {
        flex-direction: row;
    }
`

const NewsletterInput = styled.input`
@media only screen and ${device.xs} {
    padding: 10px;
    width: 100%;
    height: 50px;
    border: none;
}
    &:focus {
        outline: none;
    }
`

export { NewsletterContainer, NewsletterContentContainer, NewsletterTitle, NewsletterText, NewsletterInputContainer, NewsletterInput };