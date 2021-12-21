import styled, { css } from "styled-components";

const defaultButtonStyles = css`
    background-color: black;    

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const googleButtonStyles = css`
    background-color: #4285f4;

    &:hover{
    background-color: #357ae8;
    border: none;
    }
`

const getButtonStyles = (props) => {
    if (props.isGoogleSignin) {
        return googleButtonStyles;
    } else {
        return defaultButtonStyles
    }
}

const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 60px;
    letter-spacing: 0.5px;
    line-height: 20px;
    padding: 5px 20px 5px 20px;
    font-size: 14px;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    ${getButtonStyles}
`

export { CustomButtonContainer }