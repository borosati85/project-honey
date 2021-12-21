import styled, { css } from "styled-components";

const shrink = css`
    top: -14px;
    font-size: 12px;
    color: black;
`

const Container = styled.div`
    position: relative;
    margin: 45px 0;
`

const setShrink = ({ focused, valueLength }) => {
    if(focused || valueLength) {
        return shrink
    } else {
        return null;
    }
}

const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: grey;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 25px 0;    

    &:focus {
        outline: none;
    }
`

const FormInputLabel = styled.label`
    color: $sub-color;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    ${setShrink}
`

export { Container, FormInputContainer, FormInputLabel }