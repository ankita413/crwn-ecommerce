import React from 'react'
import './FormInput.scss'
//handleChange is needed bcoz we want to bubble up any change the input has
const FormInput = ({handleChange,label, ...otherProps}) => (
    console.log(otherProps),
    console.log(otherProps.value),
    console.log(otherProps.value.length),
        <div className='group'>
            <input className = "form-input" onChange= {handleChange} {...otherProps}/>
            {
                label ? (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
                </label>) : null
            }
            
        </div>
    
)

export default FormInput
