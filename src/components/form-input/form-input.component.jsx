import React from 'react';
import { Container, FormInputContainer, FormInputLabel, SuggestionsContainer } from './form-input.styles';
import { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserInput, selectExistingUsers } from '../../redux/user/user.selectors';

const FormInput = ( {handleChange, label, value, key, displaySuggestions, userInput, existingUsers, ...otherProps} ) => {
    const [focused, setFocus] = useState(false);
    const [suggestions, setSuggestions] = [];

    const showSuggestions = () => {
        if (displaySuggestions) {
            const users = Object.keys(existingUsers);
            const name = userInput.name;
            if (users.find(name)) {
                setSuggestions(
                    users.filter(fullname => fullname.startsWith(name))
                    .map(fullname => existingUsers[fullname])
                )
                return true;
            }
        } else {
            return false;
        }
    }

    return (
    <Container>
        <SuggestionsContainer displaySuggestions={displaySuggestions}>
            {
                suggestions.map(suggestion => <p>{suggestion.name}</p>)
            }
        </SuggestionsContainer>        
        <FormInputContainer onFocus={()=> setFocus(true)} onBlur={()=> setFocus(false)} onChange={handleChange} value={value} {...otherProps}/>
        {
            (label ?
            <FormInputLabel focused={focused} valueLength={value.length}>{label}</FormInputLabel>
            : null)
        }
    </Container>
    )
}

const mapStateToProps = createStructuredSelector ({
    userInput: selectUserInput,
    existingUsers: selectExistingUsers
})

export default connect(mapStateToProps)(FormInput);