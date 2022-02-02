import React from 'react';
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle, signInWithEmail } from '../../firebase/firebase.utils';
import { SignInContainer, SignInTitle, ButtonContainer } from './signin.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    hanandleSubmit = () => {
        this.setState({email: '', password:''})
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value})
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>Már van fiókom</SignInTitle>
                <span>Jelentkezzen be email címe megadásával, vagy Google fiókjával</span>

                <form>
                    <FormInput
                        type='email' 
                        name='email' 
                        label='Email' 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required>
                    </FormInput>
                    <FormInput 
                        type='password'
                        name='password'                        
                        label='Jelszó'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required>
                    </FormInput>
                    <ButtonContainer>
                        <CustomButton type='button' onClick={()=>signInWithEmail(this.state.email, this.state.password)}>Bejelentkezés</CustomButton>
                        <CustomButton type='button' isGoogleSignin onClick={signInWithGoogle}>Google bejelentkezés</CustomButton>
                    </ButtonContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;