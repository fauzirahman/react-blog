/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { validateAll } from 'indicative/validator';
import config from '../../../Config';
import '../../../services/auth'


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

    handleInputChange = (event) => {
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
                formattedErrors['email'] = Jsonemail['email'];
                this.setState({
                    errors: formattedErrors
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
            <div>
                <div className="container">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* Nested Row within Card Body */}
                            <div className="row">
                                <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                                <div className="col-lg-7">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                        </div>
                                        <form className="user" onSubmit={this.handleSubmitChange}>
                                            <div className="form-group">                                                
                                                <input type="text" name="name" onChange={this.handleInputChange} className="form-control form-control-user" id="username" placeholder="User Name" />                                                                                                
                                                {
                                                    this.state.errors['name'] &&
                                                    <small className="text-danger">{this.state.errors['name']}</small>
                                                }                                                
                                            </div>                                            
                                            <div className="form-group">                                                
                                                <input type="text" name="email" onChange={this.handleInputChange} className="form-control form-control-user" id="email" placeholder="Email" />                                                                                                
                                                {
                                                    this.state.errors['email'] &&
                                                    <small className="text-danger">{this.state.errors['email']}</small>
                                                }
                                                
                                            </div>                                            
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="password" name="password" onChange={this.handleInputChange} className="form-control form-control-user" id="Password" placeholder="Password" />
                                                    {
                                                        this.state.errors['password'] &&
                                                        <small className="text-danger">{this.state.errors['password']}</small>
                                                    }
                                                    
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="password" name="password_confirmation" onChange={this.handleInputChange} className="form-control form-control-user" id="RepeatPassword" placeholder="Repeat Password" />
                                                    <small className="text-danger">{this.state.errors['password_confirmation']}</small>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-user btn-block">
                                                Register Account
              </button>
                                            <hr />                                           
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <Link className="small" to="/forgot-password"> Forgot Password? </Link>
                                        </div>
                                        <div className="text-center">
                                            <Link className="small" to="/login">Already have an account? Login!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Signup;