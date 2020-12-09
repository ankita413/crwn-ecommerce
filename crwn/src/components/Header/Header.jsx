import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.scss'
import {auth} from '../Firebase/Firebase.util';
const Header = ({currentUser}) => (
<div className = "Header">
    <Link className = "logo-container" to = '/'>
        <Logo className = "logo"/>
    </Link>
    <div className = 'options'>
        <Link className = 'option' to = '/shop'>
            SHOP
        </Link>
        <Link className = 'option' to = '/Contact'>
            CONTACT
        </Link>
      { 
       currentUser ? (<div className = "option" onClick = {() => auth.signOut()}>SIGN OUT</div>)
        : 
        (<Link className = "option" to = '/SignIn'>SIGN IN</Link>)
      }
    </div>

</div>
)
export default Header;