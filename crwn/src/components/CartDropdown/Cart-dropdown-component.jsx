import React from 'react'
import './Cart-dropdown-styles.scss'
import CustomButton from '../CustomButton/CustomButton'

const CartDropdown = () =>
(
    <div className = "Cart-dropdown">
        <div className = "cart-items"/>  
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>

)
export default CartDropdown;