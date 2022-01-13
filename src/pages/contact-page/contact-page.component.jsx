import React from "react";
import {
  ContactSection,
  ContactTitle,
  ContactFormBackground,
  ContactForm
} from "./contact-page.styles";
import pic from "../../assets/profilepic4.png";
import CustomButton from "../../components/custom-button/custom-button.component";

const ContactPage = () => (
  <ContactSection id="contact">
    <ContactTitle>
      Kapcsolat
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
