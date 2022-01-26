import React from "react";
import {
  Container,
  FormInputContainer,
  FormInputLabel,
  SuggestionsContainer
} from "./form-input.styles";
import { useState } from "react";

const FormInput = ({
  handleChange,
  label,
  value,
  key,
  displaySuggestions,
  suggestions,
  userInput,
  existingUsers,
  ...otherProps
}) => {
  const [focused, setFocus] = useState(false);

  return (
    <Container>
      <SuggestionsContainer
        suggestions={suggestions}
        displaySuggestions={displaySuggestions}
      >
        {suggestions
          ? suggestions.length > 0
            ? suggestions.map((name) => <p>{name}</p>)
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

export default FormInput;
