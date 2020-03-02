/* eslint-disable */
import React from 'react';
import Axios from 'axios';
import { validateAll } from 'indicative/validator';
import config from '../../../Config';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';


class Signup extends React.Component{
    constructor(){
        super();


        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: {}
        };

    }

    handleInputChange = async(event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmitChange = async(event) => {
        event.preventDefault()
        console.log(this.state)

        //validating user data        
        const data = this.state;
        const rules = {
            name: 'required|string',
            email: 'required|email',
            password: 'required|string|min:6|confirmed'            
        };


        const message = {
            required: 'This field is required.',
            'required.email': 'The email is required.',
            'password.confirmed': 'The password confirmation does not match.'
        };

             
        validateAll(data, rules, message)
        .then(() => {
            Axios.post(`${config.apiUrl}/api/register`,{                
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }).then(response => {
                console.log(response.data)
                localStorage.setItem('user', JSON.stringify(response.data))
                this.props.setAuthUser(response.data)
                this.props.history.push('/');
            }).catch(errors=>{
                console.log(errors)
                var Jsonemail = JSON.parse(errors.response.data)

                const formattedErrors = {}
                //formattedErrors['email'] = Jsonemail['email'];
                this.setState({
                    errors
                })
            })
        })  
        .catch(errors=>{
            const formattedErrors = {}
            errors.forEach(error => formattedErrors[error.field] = error.message)
            this.setState({
                errors: formattedErrors
            })        
        })      
    }

    render(){
        return (
            <SignupForm handleInputChange={this.handleInputChange} handleSubmitChange={this.handleSubmitChange} errors={this.state.errors} />
        );
    }
}

Signup.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleSubmitChange: PropTypes.func.isRequired,
    errors: PropTypes.func.isRequired
};
export default Signup;