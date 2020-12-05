import React from 'react'
import './CustomButton.scss'
const CustomButton = ({children, ...otherProps}) => (

<button className = "Custom-button" {...otherProps}>{children}</button>

)

export default CustomButton
