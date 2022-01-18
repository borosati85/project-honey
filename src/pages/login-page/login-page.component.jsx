import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component'
import { LoginPageContainer, OptionsContainer } from './login-page.styles';

const LoginPage = () => {
    return (
        <LoginPageContainer>
            <OptionsContainer>
                <SignIn />
                <SignUp />
            </OptionsContainer>
        </LoginPageContainer>
    )
}

export default LoginPage;