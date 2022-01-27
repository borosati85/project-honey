import React from "react";
import {
  Container,
  FormInputContainer,
  FormInputLabel,
  SuggestionsContainer,
  Suggestion
} from "./form-input.styles";
import { useState, useEffect } from "react";
import { setUserInput } from "../../redux/user/user.action";
import {
  selectUserInput,
  selectExistingUsers
} from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const FormInput = ({
  handleChange,
  label,
  value,
  key,
  suggestions,
  userInput,
  existingUsers,
  setUserInput,
  ...otherProps
}) => {
  const [focused, setFocus] = useState(false);
  const [visible, setVisibile] = useState(true);

  const handleClick = (event) => {
    const name = event.target.innerText;
    const user = existingUsers[name];
    for (let prop in user) {
      const data = {
        target: {
          name: prop,
          value: user[prop]
        }
      };
      setUserInput(data);
      setVisibile(false);
    }
  };

  useEffect(() => {
    const existingNames = Object.keys(existingUsers);
    const name = userInput.name.toLowerCase();
    existingNames.find((fullName) => fullName.toLowerCase() === name)
      ? setVisibile(false)
      : setVisibile(true);
  });

  return (
    <Container>
      <SuggestionsContainer suggestions={suggestions} visible={visible}>
        {suggestions
          ? suggestions.length > 0
            ? suggestions.map((name) => (
                <Suggestion onClick={handleClick} key={name}>
                  {name}
                </Suggestion>
              ))
            : null
          : null}
      </SuggestionsContainer>
      <FormInputContainer
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={handleChange}
        value={value}
        {...otherProps}
      />
      {label ? (
        <FormInputLabel focused={focused} valueLength={value.length}>
          {label}
        </FormInputLabel>
      ) : null}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  userInput: selectUserInput,
  existingUsers: selectExistingUsers
});

const mapDispatchToProps = (dispatch) => ({
  setUserInput: (input) => dispatch(setUserInput(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
