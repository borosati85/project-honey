import React from "react";
import AboutPage from "../about-page/about-page.component";
import ContactPage from "../contact-page/contact-page.component";
import {
  MainPageSection,
  HeroTitle,
  MainTitle,
  MainText,
  ButtonContainer
} from "./main-page2.styles";
import CustomButton from "../../components/custom-button/custom-button.component";

const MainPage = () => (
  <main className="main" id="main">
    <MainPageSection id="main">
      <HeroTitle>Balázs méze</HeroTitle>
      <MainTitle>
        Prémium minőségű
        <br />
        <span style={{ color: "#FCA103" }}>méz</span> közvetlen a termelőtől
      </MainTitle>
      <MainText>
        Akár egy egészséges életmód a célod,
        <br /> akár csak az ízéért szereted,
        <br /> fogyaszd bátran mézeinket, nem fogsz csalódni.
      </MainText>
      <ButtonContainer>
        <CustomButton rounded>Tudj meg többet</CustomButton>
        <CustomButton rounded>Vásárlás</CustomButton>
      </ButtonContainer>
    </MainPageSection>
    <AboutPage />
    <ContactPage />
  </main>
);

export default MainPage;
