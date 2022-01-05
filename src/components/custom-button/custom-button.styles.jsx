import styled, { css } from "styled-components";

const defaultButtonStyles = css`
    background-color: black;    
    color: white;

    &:hover {
        background-color: white;
        color: black;
    }
`

const primaryButtonStyles = css`
    background-color: #DDC9BC;    
    color: black;

    &:hover {
        background-color: orange;
    }
`

const secondaryButtonStyles = css`
    background-color: orange;    
    color: black;

    &:hover {
        background-color: #DDC9BC;  
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
    border-radius: 30px;
`

const getButtonStyles = (props) => {
    if (props.isGoogleSignin) {
        return googleButtonStyles;
    } else if (props.primary) {
        return primaryButtonStyles;
    } else if (props.secondary) {
        return secondaryButtonStyles;
    } else {
        return defaultButtonStyles;
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