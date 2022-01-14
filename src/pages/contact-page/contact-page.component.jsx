import React, { useState } from "react";
import {
  ContactSection,
  ContactTitle,
  ContactFormBackground,
  ContactForm
} from "./contact-page.styles";
import pic from "../../assets/profilepic4.png";
import CustomButton from "../../components/custom-button/custom-button.component";

const ContactPage = () => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [text, setText] = useState('');
  const handleChange = (event) => {
      const type = event.target.name;
      const value = event.target.value;
      switch(type) {
        case 'name': setUserName(value);
        break;
        case 'email': setUserEmail(value);
        break;
        case 'text': setText(value);
      }
  }

  const validateEmail = (email) => {
      const pattern = /^[\w\d]{3,}@[\w]{3,}\.[\w]{2,3}$/i
      return pattern.test(email);
  }

  const handleSubmit = () => {
      if (validateEmail(userEmail)) {
          if(!text) {
            alert('Kérjük tedd fel a kérdésed');
          } else if(!userName) {
            alert('Kérjük add meg a neved')
          } else {
            alert('Köszönjük');
            setUserName('');
            setUserEmail('');
            setText('');
          }
      } else {
          (alert('Az email cím nem megfelelő'))
      }
  }

  return (
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
          <input type="text" name='name' onChange={handleChange} value={userName} placeholder="Név" />
          <input type="email" name='email' onChange={handleChange} value={userEmail} placeholder="Email" />
          <textarea value={text} name='text' onChange={handleChange} placeholder="Tedd fel kérdésedet" />
          <CustomButton onClick={handleSubmit}>Elküld</CustomButton>
        </ContactForm>
      </ContactFormBackground>
    </ContactSection>
  )
};

export default ContactPage;
