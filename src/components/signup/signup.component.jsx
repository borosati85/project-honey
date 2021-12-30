import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SignUpContainer, SignUpTitleContainer } from './signup.styles'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        try {
            //creates an user in the auth object, and store only the user in a variable
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            //creates an user in firebase
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }


    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
                      
            <SignUpContainer>
                <SignUpTitleContainer>Még nincs fiókom</SignUpTitleContainer>
                <span>Regisztráljon email címmel</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Név'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Jelszó'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Jelszó ismét'
                        required
                    />
                    <CustomButton type='submit'>Regisztráció</CustomButton>
                </form>                    
            </SignUpContainer>
        )
    }
}

export default SignUp;