import React from 'react';
import './sign-in.style.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';
import {SignInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
        
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'',password:''});
    }
    handleChange = event => {
        const {value, name } = event.target;
        this.setState({ [name]:value })
    }

    render(){
        
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="Email"
                    required />
                    <FormInput 
                    name="password" 
                    type="password" 
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    label="Password"
                    required />
                    <div className="buttons">
                    <CustomButton type="submit" children="Sign in" />
                    <CustomButton isGoogleSignIn onClick={SignInWithGoogle} children="Sign in With Google" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;