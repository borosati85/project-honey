import React from "react";
import AboutPage from "../about-page/about-page.component";
import ContactPage from "../contact-page/contact-page.component";
import "./main2.styles.scss";

const MainPage = () => (
  <main className="main" id="main">
    <section className="main__header">
      <h1 className="main__header__title">
        <span className="main__header__title__first-letter">H</span>
        <span>oney</span>
      </h1>
    </section>
    <AboutPage />
    <ContactPage />
  </main>
);

export default MainPage;