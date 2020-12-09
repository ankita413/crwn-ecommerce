import React from 'react';
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import './SignIn.scss'
import {SignInWithGoogle} from '../Firebase/Firebase.util';
class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password : ''
        }
    }
    handleSubmit = event =>{
        console.log(event);
        event.preventDefault();
        this.setState(
        {
            email:'',
            password:''
        }
        )
    }
    handleChange = event => {
        const {value,name} = event.target;
        this.setState ({
            [name]:value

        });
        console.log([name]);
        console.log(name);
    
    }
    render () {
        return (
                <div className = "Sign-In">
                <h2 className = "title">I already have an account</h2>
                <span className ="sub-title">Sign in with your Email and Password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput 
                    name= "email"
                    type= "email" 
                    handleChange= {this.handleChange}
                    value = {this.state.email} 
                    label="Email"
                    required
                    />
                        
                    <FormInput
                        label="Password"
                        name = "password" 
                        type = 'password'
                        handleChange={this.handleChange}
                        value = {this.state.password}
                        required
                        /> 
                </form>
                <div className = "buttons">
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton isGoogleSignIn = {SignInWithGoogle} onClick = {SignInWithGoogle}>Sign In with Google</CustomButton>
                </div>
               
                </div>
                )
    }
}
export default SignIn;