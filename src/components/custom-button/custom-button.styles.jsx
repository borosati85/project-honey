import styled, { css } from "styled-components";

const defaultButtonStyles = css`
    background-color: #DDC9BC;    
    color: black;

    &:hover {
        background-color: orange;
    }
`

const googleButtonStyles = css`
    background-color: #4285f4;

    &:hover{
    background-color: #357ae8;
    border: none;
    }
`

const roundedButtonStyles = css`
    border-radius: 15px;
`

const getButtonStyles = (props) => {
    if (props.isGoogleSignin) {
        return googleButtonStyles;
    } else {
        return defaultButtonStyles
    }
}

const getButtonShape = (props) => {
    if (props.rounded) {
        return roundedButtonStyles;
    }
}

const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 16px;
    padding: 5px 20px 5px 20px;
    font-size: 14px;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    cursor: pointer;
    ${getButtonShape}
    ${getButtonStyles}
`

export { CustomButtonContainer }