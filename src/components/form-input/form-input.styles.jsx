import styled, { css } from "styled-components";

const shrink = css`
  top: 20%;
  font-size: 12px;
  color: black;
`;

const visible = css`
  display: block;
`;

const hidden = css`
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

const getVisibility = (props) => (props.visible ? visible : hidden);

const SuggestionsContainer = styled.div`
  width: 100%;
  font-size: 12px;
  position: absolute;
  bottom: 25px;
  left: 0px;
  background-color: white;
  transform: translateY(100%);
  z-index: 10;
  ${getVisibility};
`;

const Suggestion = styled.p`
  padding: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export {
  Container,
  FormInputContainer,
  FormInputLabel,
  SuggestionsContainer,
  Suggestion
};
