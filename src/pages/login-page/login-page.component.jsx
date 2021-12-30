import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component'
import { LoginPageContainer } from './login-page.styles';

const LoginPage = () => {
    return (
        <LoginPageContainer>
            <SignIn />
            <SignUp />
        </LoginPageContainer>
    )
}

export default LoginPage;