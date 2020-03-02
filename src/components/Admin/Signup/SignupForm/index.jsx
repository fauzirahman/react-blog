import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SignupForm = ({ handleInputChange, handleSubmitChange, errors }) => {
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
                                    <form className="user" onSubmit={handleSubmitChange}>
                                        <div className="form-group">
                                            <input type="text" name="name" onChange={handleInputChange} className="form-control form-control-user" id="username" placeholder="User Name" />
                                            {
                                                errors['name'] &&
                                                <small className="text-danger">{errors['name']}</small>
                                            }
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="email" onChange={handleInputChange} className="form-control form-control-user" id="email" placeholder="Email" />
                                            {
                                                errors['email'] &&
                                                <small className="text-danger">{errors['email']}</small>
                                            }

                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" name="password" onChange={handleInputChange} className="form-control form-control-user" id="Password" placeholder="Password" />
                                                {
                                                    errors['password'] &&
                                                    <small className="text-danger">{errors['password']}</small>
                                                }

                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" name="password_confirmation" onChange={handleInputChange} className="form-control form-control-user" id="RepeatPassword" placeholder="Repeat Password" />
                                                <small className="text-danger">{errors['password_confirmation']}</small>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-user btn-block">
                                            Register Account
              </button>
                                        <hr />
                                    </form>
                                    <hr />
                                    
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
};

SignupForm.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleSubmitChange: PropTypes.func.isRequired,
    errors: PropTypes.objectOf(PropTypes.string).isRequired
};

export default SignupForm;