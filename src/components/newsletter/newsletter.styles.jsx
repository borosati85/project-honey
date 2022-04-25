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

export { NewsletterContainer };