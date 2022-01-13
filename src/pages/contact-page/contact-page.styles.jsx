import styled from "styled-components";
import background from "../../assets/bg2.jpg";
import { device } from "../../common/breakpoints";

const ContactSection = styled.section`
  @media only screen and ${device.xs} {
    padding: 60px 10px;
    background: url(${background});
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: multiply;
    height: 900px;
  }
  @media only screen and ${device.sm} {
    padding: 60px 20px;
  }

  @media only screen and ${device.m} {
    padding: 60px 40px;
  }
`;

const ContactTitle = styled.h1`
  @media only screen and ${device.xs} {
    font-family: "Pushster", cursive;
    font-weight: 400;
    font-size: calc(2vw + 35px);
    letter-spacing: 2px;
    color: white;
  }

`;

const ContactFormBackground = styled.div`
  @media only screen and ${device.xs} {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: 400px;
    background-color: white;
    box-shadow: 10px 10px 10px black;
  }

  @media only screen and ${device.sm} {
    flex-direction: row;
    align-items: flex-start;    
  }

  @media only screen and ${device.lg} {
    left: 100px;
    width: 700px;
  }

  @media only screen and ${device.xl} {
    left: 300px;
    width: 700px;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  div {
    @media only screen and ${device.xs} {
    font-family: "Roboto", sans-serif;
    padding: 10px;
    width: 100%;
    display: inline;
    text-align: center;
    }

    @media only screen and ${device.sm} {
      text-align: left;
    }
  }
`;

const ContactForm = styled.form`
@media only screen and ${device.xs} {
  font-family: "Roboto", sans-serif;
  padding: 20px;
  position: absolute;
  top: 270px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #ddc9bc;
  display: flex;
  gap: 10px;
  flex-direction: column;
  box-shadow: 10px 10px 10px black;
}

@media only screen and ${device.sm} {
  top: 150px;
}

@media only screen and ${device.lg} {
  left: 120px;
}

  input {
    font-family: "Roboto", sans-serif;
    padding: 10px;
    border: none;
    &:focus {
      outline: none;
    }
  }

  textarea {
    font-family: "Roboto", sans-serif;
    padding: 10px;
    border: none;
    height: 100%;

    &:focus {
      outline: none;
    }
  }
`;

export { ContactSection, ContactTitle, ContactFormBackground, ContactForm };
