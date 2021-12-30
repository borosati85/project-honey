import React from 'react';
import { Container, FormInputContainer, FormInputLabel } from './form-input.styles';
import { useState } from 'react';

const FormInput = ( {handleChange, label, value, key,  ...otherProps} ) => {
    const [focused, setFocus] = useState(false);
    return (
    <Container>
        <FormInputContainer onFocus={()=> setFocus(true)} onBlur={()=> setFocus(false)} onChange={handleChange} value={value} {...otherProps}/>
        {
            (label ?
            <FormInputLabel focused={focused} valueLength={value.length}>{label}</FormInputLabel>
            : null)
        }
    </Container>
    )
}

export default FormInput;