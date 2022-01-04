import styled from "styled-components";
import background from "../../assets/bg3.jpg";
import './newsletter.styles.scss';

const NewsletterContainer = styled.div`
    height: 500px;
    background: url(${background}) no-repeat center center fixed; 
    background-size: cover;
    background-color: rgba(230, 150, 75, 0.9);
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

    h2 {
        font-family: "Pushster", cursive;
        font-weight: 400;
        font-size: calc(2vw + 35px);
    }

    h2, p {
        text-shadow: 2px 2px #000000;
    }

    input, button {
        margin: 5px;
        height: 40px;
    }

    input {
        width: 170px;
    }
`

export { NewsletterContainer, NewsletterContentContainer };