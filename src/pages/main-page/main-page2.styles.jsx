import styled from "styled-components";
import "./main2.styles.scss";

const MainPageSection = styled.section`
  padding: 60px 40px;
  background: url("https://wallpaperaccess.com/full/1585697.jpg") no-repeat
    right center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: multiply;
  height: 100vh;
  font-family: "Montserrat", sans-serif;
  color: #ddc9bc;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroTitle = styled.h1`
  font-family: "Waterfall", cursive;
  font-weight: 400;
  font-size: calc(4.5vw + 40px);
  width: fit-content;
  margin: 20px 0;
`;

const MainTitle = styled.h1`
  font-family: "Pushster", cursive;
  font-weight: 400;
  font-size: calc(2vw + 35px);
  letter-spacing: 2px;
  width: fit-content;
  margin: 20px 0;
`;

const MainText = styled.p`
  font-family: "Pushster", cursive;
  font-weight: 200;
  font-size: 20px;
  width: 450px;
  letter-spacing: 1px;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  margin: 20px 0;
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

export { MainPageSection, HeroTitle, MainTitle, MainText, ButtonContainer };
