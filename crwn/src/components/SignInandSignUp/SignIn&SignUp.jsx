import React from 'react'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SIgn-Up/Sign-Up'
import './SignIn&SignUp.scss'
const SignInAndSignUp = () =>(
    <div className = "Sign-In-And-Sign-Up">
      <SignIn className= "SignIn"/>
      <SignUp/>
    </div>
)

export default SignInAndSignUp;
