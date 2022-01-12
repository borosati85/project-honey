import styled from "styled-components";
import background from "../../assets/bg2.jpg";

const ContactSection = styled.section`
  padding: 60px 40px;
  background: url(${background});
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: multiply;
  height: 900px;
`;

const ContactTitle = styled.h1`
  font-family: "Pushster", cursive;
  font-weight: 400;
  font-size: calc(2vw + 35px);
  letter-spacing: 2px;
  color: white;
`;

const ContactFormBackground = styled.div`
  position: relative;
  left: 400px;
  display: flex;
  padding: 20px;
  width: 800px;
  height: 400px;
  background-color: #ddc9bc;
  box-shadow: 10px 10px 10px black;
  border-radius: 10px;
  img {
    width: 100px;
    height: 100px;
  }
  div {
    width: 70%;
    display: inline;
  }
`;

const ContactForm = styled.form`
  padding: 20px;
  position: absolute;
  top: 120px;
  left: 120px;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #ddc9bc;
  background-color: orange;
  display: flex;
  gap: 10px;
  flex-direction: column;
  box-shadow: 10px 10px 10px black;
  border-radius: 10px;

  input {
    border: none;
    &:focus {
      outline: none;
    }
  }

  textarea {
    border: none;
    height: 100%;

    &:focus {
      outline: none;
    }
  }
`;

export { ContactSection, ContactTitle, ContactFormBackground, ContactForm };
