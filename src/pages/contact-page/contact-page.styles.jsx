import styled from "styled-components";
import background from '../../assets/bg2.jpg';

const ContactSection = styled.section`
    padding: 60px 40px;
    background: url(${background});
    //no-repeat right center;
    background-size: cover;
    background-color: rgba(0,0,0,0.6);
    background-blend-mode: multiply;
    height: 100vh;   
`

const ContactTitle = styled.h1`
    font-family: 'Architects Daughter', cursive;
    text-transform: uppercase;
    letter-spacing: 2vw;
    font-size: calc(2vw + 25px);
    color: white;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: fit-content;
    background-color: black;
`

export { ContactSection, ContactTitle }