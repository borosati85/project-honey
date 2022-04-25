import React, { useState, useEffect } from "react";
import { DeliveryFormContainer } from "./user-address-input-form.style";
import FormInput from "../form-input/form-input.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectUserInput,
  selectExistingUsers
} from "../../redux/user/user.selectors";
import { setUserInput } from "../../redux/user/user.action";
import {
  getLocationByZipcode,
  getZipCodesByLocation,
  getLocationByLetters
} from "../../data/locations.js";
import { auth, getUserAddress } from "../../firebase/firebase.utils";

const UserAddressInputForm = ({ userInput, setUserInput, existingUsers }) => {
  const handleChange = (event) => {
    setUserInput(event);
    if (event.target.name === "name") {
      setSuggestions(getSuggestions(event));
    } else if (event.target.name === "city") {
      setLocationSuggestions(getLocationByLetters(event.target.value));
    }
  };

  const [suggestions, setSuggestions] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [loadedUserData, setLoadedUserData] = useState(false);

  const getSuggestions = (event) => {
    const users = Object.keys(existingUsers);
    const name = event.target.value;
    let filteredUsers = [];

    if (name) {
      filteredUsers = users.filter((fullname) =>
        fullname.toLowerCase().startsWith(name.toLowerCase())
      );
    }

    if (filteredUsers.length > 0) {
      return filteredUsers;
    } else {
      return [];
    }
  };

  useEffect(() => {
    if (!loadedUserData) {
      getUserAddress(auth.currentUser).then((data) => {
        for (let entry in data) {
          setUserInput({
            target: {
              name: entry,
              value: data[entry]
            }
          });
        }
      });
      setLoadedUserData(true);
    }
  });

  return (
    <div className="details">
      <p>
        <input
          name="useDifferentAddressForInvoice"
          type="checkbox"
          checked={!userInput.useDifferentAddressForInvoice}
          onChange={(event) => {
            setUserInput({
              target: {
                name: event.target.name,
                value: !event.target.checked
              }
            });
          }}
        />
        Szállítási és számlázási adatok megegyeznek
      </p>
      {userInput.useDifferentAddressForInvoice ? (
        <p>Szállítási adatok</p>
      ) : (
        <p>Szállítási és számlázási adatok</p>
      )}
      <DeliveryFormContainer>
        <FormInput
          type="text"
          name="name"
          label="Név"
          suggestionsType="user"
          suggestions={suggestions}
          value={userInput.name}
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={userInput.email}
          onChange={handleChange}
        />
        <FormInput
          type="tel"
          name="tel"
          label="Telefon"
          value={userInput.tel}
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="country"
          label="Ország"
          value="Magyarország"
          readOnly
        />
        <FormInput
          type="text"
          name="post"
          label="Irányítószám"
          value={userInput.post}
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="city"
          label="Város"
          suggestionsType="location"
          suggestions={locationSuggestions}
          value={userInput.city}
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="address"
          label="Utca/házszám"
          value={userInput.address}
          onChange={handleChange}
        />
      </DeliveryFormContainer>
      {userInput.useDifferentAddressForInvoice ? (
        <div>
          <p>Számlázási Adatok</p>
          <DeliveryFormContainer>
            <FormInput
              type="text"
              name="invoiceName"
              label="Név"
              value={userInput.invoiceName}
              onChange={handleChange}
            />
            <FormInput
              type="text"
              name="Country"
              label="Ország"
              value="Magyarország"
              readOnly
            />
            <FormInput
              type="text"
              name="invoicePost"
              label="Irányítószám"
              value={userInput.invoicePost}
              onChange={handleChange}
            />
            <FormInput
              type="text"
              name="invoiceCity"
              label="Város"
              value={userInput.invoiceCity}
              onChange={handleChange}
            />
            <FormInput
              type="text"
              name="invoiceAddress"
              label="Utca/házszám"
              value={userInput.invoiceAddress}
              onChange={handleChange}
            />
          </DeliveryFormContainer>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userInput: selectUserInput,
  existingUsers: selectExistingUsers
});

const mapDispatchToProps = (dispatch) => ({
  setUserInput: (input) => dispatch(setUserInput(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAddressInputForm);
