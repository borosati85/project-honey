import styled from 'styled-components';
import { device } from '../../common/breakpoints';

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

const NewsletterInputContainer = styled.form`
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

export { NewsletterContentContainer, NewsletterTitle, NewsletterText, NewsletterInputContainer, NewsletterInput }