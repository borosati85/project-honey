import styled from "styled-components";

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 380px;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const SignUpTitleContainer = styled.h2`
    margin: 10px 0;
`

export { SignUpContainer, SignUpTitleContainer }