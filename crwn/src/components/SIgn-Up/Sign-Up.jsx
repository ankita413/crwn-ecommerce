import React from 'react'
   import FormInput from '../FormInput/FormInput';
   import CustomButton from '../CustomButton/CustomButton';
   import {auth, createUserProfileDocument} from '../Firebase/Firebase.util'
   import './Sign-Up.scss'
    class SignUp extends React.Component{
        constructor(){
            super();
            this.state = {
                displayName : '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
        handleSubmit = async event => {
            event.preventDefault();
            const {displayName,email,password,confirmPassword} = this.state
            if(password !== confirmPassword)
           { alert("Password and Confirm Password do not match");
            return;}
            try{
                    const {user} = await auth.createUserWithEmailAndPassword(email,password)
                   await createUserProfileDocument(user,{displayName});
                   this.setState({            
                   displayName : '',
                   email: '',
                   password: '',
                   confirmPassword: ''})
            }
            catch(error){
                console.error(error);

            }
        }
        handleChange = event => {
            const {name,value} = event.target;
            this.setState({[name] : value})
        }
        render(){
            const {displayName,email,password,confirmPassword} = this.state
            return(
                <div className="SignUp">
                    <h2 className='title'>I do not have a Account</h2>
                    <span>Sign Up with Email and Password</span>
                    <form className = "sign-up-form">
                        <FormInput type = "text"
                        name = 'displayName'
                        value = {displayName}
                        onChange = {this.handleChange}
                        label = "Your Name"
                        required
                        />
                       <FormInput type = "email"
                        name = 'email'
                        value = {email}
                        onChange = {this.handleChange}
                        label = "Email-id"
                        required
                        />
                             <FormInput
                          label="Password"
                          name = "password" 
                          type = 'password'
                        value = {password}
                        onChange = {this.handleChange}
                       
                        required
                        />
                        <FormInput 
                           label="Confirm Password"
                           name = "password" 
                           type = 'password'
                        value = {confirmPassword}
                        onChange = {this.handleChange} required
                        />
                        <CustomButton type = "submit">Sign Up</CustomButton>
                    </form>
                </div>
            )
        }
    }
   
   export default SignUp
   