import styled from "styled-components";

const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

    form {
        display: flex;
        flex-direction: column;
    }
`

const SignInTitle = styled.h2`
    margin: 10px 0;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;

    > * {
        width: 48%;
    }
`

export { SignInContainer, SignInTitle, ButtonContainer }