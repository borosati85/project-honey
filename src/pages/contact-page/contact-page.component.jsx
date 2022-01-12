import React from "react";
import {
  ContactSection,
  ContactTitle,
  ContactFormBackground,
  ContactForm
} from "./contact-page.styles";
import pic from "../../assets/blank-profile.png";
import CustomButton from "../../components/custom-button/custom-button.component";

const ContactPage = () => (
  <ContactSection id="contact">
    <ContactTitle>
      <span className="contact__title__first-letter">K</span>
      <span>apcsolat</span>
    </ContactTitle>
    <ContactFormBackground>
      <img src={pic} />
      <div>
        <h3>Írj nekünk</h3>
        <p>
          Ha kérdésed van, hagyj nekünk üzenetet, rövid időn belül válaszolunk
        </p>
      </div>
      <ContactForm>
        <input type="text" placeholder="Név" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Tedd fel kérdésedet" />
        <CustomButton>Elküld</CustomButton>
      </ContactForm>
    </ContactFormBackground>
  </ContactSection>
);

export default ContactPage;
