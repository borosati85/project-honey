import styled, { css } from "styled-components";

const shrink = css`
  top: 20%;
  font-size: 12px;
  color: black;
`;

const show = css`
  display: block;
`;

const hide = css`
  display: none;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const setShrink = ({ focused, valueLength }) => {
  if (focused || valueLength) {
    return shrink;
  } else {
    return null;
  }
};

const FormInputContainer = styled.input`
  background: none;
  background-color: transparent;
  color: grey;
  font-size: 18px;
  padding: 10px 5px 10px 5px;
  display: block;
  width: 100%;
  border-radius: 0;
  margin: 25px 0;
  border: none;
  border-bottom: 1px solid grey;

  &:focus {
    outline: none;
  }
`;

const FormInputLabel = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  left: 5px;
  top: 45%;
  pointer-events: none;
  transition: 300ms ease all;
  ${setShrink}
`;

const showSuggestions = (props) => {
  if (props.displaySuggestions) {
    return show;
  } else {
    return hide;
  }
};

const SuggestionsContainer = styled.div`
  width: 100%;
  font-size: 12px;
  position: absolute;
  top: -50px;
  left: 0px;
  background-color: yellow;
  ${showSuggestions}
`;

export { Container, FormInputContainer, FormInputLabel, SuggestionsContainer };
