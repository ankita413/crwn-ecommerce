import React from 'react';

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
                <h2>I already have an account</h2>
                <span>Sign in with your Email and Password</span>
                <form onSubmit = {this.handleSubmit}>
                    <input 
                    name= "email"
                    type="email" 
                    onChange= {this.handleChange}
                    value = {this.state.email} 
                    required
                    />
                        <label>Email</label>
                    <input
                        name = "password" 
                        type = 'password'
                        onChange={this.handleChange}
                        value = {this.state.password}
                        required
                        />
                        <label>Password</label>
                   
                    <input value = "Submit Form" type="submit"></input>
                </form>
                </div>
                )
    }
}
export default SignIn;