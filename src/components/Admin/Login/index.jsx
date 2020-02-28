/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { validateAll } from 'indicative/validator';
import config from '../../../Config';
import '../../../services/auth'

class Login extends React.Component {
    constructor(){
        super();


        this.state = {            
            email: '',
            password: '',           
            errors: {}
        };

    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmitChange = async (event) => {
        event.preventDefault()
        console.log(this.state)

        //validating user data        
        const data = this.state;
        const rules = {            
            email: 'required|email',
            password: 'required|string|min:6'
        };


        const message = {
            required: 'This field is required.',
            'required.email': 'The email is required.'
        };

        


        validateAll(data, rules, message)
            .then(() => {
                Axios.post(`${config.apiUrl}/api/login`, {                   
                    email: this.state.email,
                    password: this.state.password
                }).then(response => {
                    console.log(response.data)
                    localStorage.setItem('user', JSON.stringify(response.data))
                    this.props.setAuthUser(response.data)
                    this.props.history.push('/');
                }).catch(errors => {
                    console.log(errors);
                    var Jsonemail = JSON.parse(errors.response.data)

                    const formattedErrors = {}
                    formattedErrors['email'] = Jsonemail['email'];
                    this.setState({
                        errors: formattedErrors
                    })
                })
            })
            .catch(errors => {
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
                    {/* Outer Row */}
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    {/* Nested Row within Card Body */}
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                </div>
                                                <form className="user" onSubmit={this.handleSubmitChange}>                                                    
                                                    <div className="form-group">
                                                        <input type="text" name="email" onChange={this.handleInputChange} className="form-control form-control-user" id="email" placeholder="Email" />
                                                        {
                                                            this.state.errors['email'] &&
                                                            <small className="text-danger">{this.state.errors['email']}</small>
                                                        }

                                                    </div>
                                                    <div className="form-group">                                                        
                                                        <input type="password" name="password" onChange={this.handleInputChange} className="form-control form-control-user" id="Password" placeholder="Password" />
                                                        {
                                                            this.state.errors['password'] &&
                                                            <small className="text-danger">{this.state.errors['password']}</small>
                                                        }                                                                                              
                                                    </div>
                                                    <button type="submit" className="btn btn-primary btn-user btn-block">
                                                        Login
                  </button>
                                                    <hr />
                                                </form>
                                                <hr />
                                                <div className="text-center">
                                                    <Link className="small" to="/forgot-password"> Forgot Password? </Link>
                                                </div>
                                                <div className="text-center">
                                                    <Link className="small" to="/signup"> Create an Account </Link>
                                                </div>
                                            </div>
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
    
};

export default Login;