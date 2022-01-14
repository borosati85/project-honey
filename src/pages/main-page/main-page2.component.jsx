import React from "react";
import Newsletter from "../../components/newsletter/newsletter.component";
import ChooseUs from "../../components/choose-us/choose-us.component";
import AboutPage from "../about-page/about-page.component";
import ContactPage from "../contact-page/contact-page.component";
import Testimonials from "../../components/testimonials/testimonials.component";
import {
  MainPageSection,
  HeroTitle,
  MainTitle,
  MainText,
  ButtonContainer
} from "./main-page2.styles";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
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
        Akár egy egészséges életmód a célod, akár csak az ízéért szereted,
        fogyaszd bátran mézeinket, nem fogsz csalódni.
      </MainText>
      <ButtonContainer>
        <HashLink to="#about">
          <CustomButton primary rounded>
            Tudj meg többet
          </CustomButton>
        </HashLink>
        <Link to="/shop">
          <CustomButton secondary rounded>
            Vásárlás
          </CustomButton>
        </Link>
      </ButtonContainer>
    </MainPageSection>
    <AboutPage />
    <ChooseUs />
    <Newsletter />
    <Testimonials />
    <ContactPage />
  </main>
);

export default MainPage;
