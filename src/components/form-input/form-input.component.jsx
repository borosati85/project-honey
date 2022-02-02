import React from "react";
import {
  Container,
  FormInputContainer,
  FormInputLabel,
  SuggestionsContainer,
  Suggestion
} from "./form-input.styles";
import { useState } from "react";
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
  suggestionsType,
  userInput,
  existingUsers,
  setUserInput,
  ...otherProps
}) => {
  const [focused, setFocus] = useState(false);
  const [visible, setVisibile] = useState(true);

  const handleClick = (event) => {
    if (suggestionsType === 'user') {
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
      }
    } else if (suggestionsType === 'location') {
      const name = 'city';
      const value = event.target.innerText;
      const data = {
        target: {
          name: name,
          value: value
        }
      };
      setUserInput(data);
    }

    setVisibile(false);
  };

  return (
    <Container>
      <SuggestionsContainer suggestions={suggestions} visible={visible}>
        {suggestions
          ? suggestions.length > 0
            ? suggestions.map((name, idx) => (
                <Suggestion onClick={handleClick} key={idx}>
                  {name}
                </Suggestion>
              ))
            : null
          : null}
      </SuggestionsContainer>
      <FormInputContainer
        onFocus={() => { setFocus(true); setVisibile(true) }}
        onBlur={() => { setFocus(false); setTimeout(()=>setVisibile(false),1000) }}
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
