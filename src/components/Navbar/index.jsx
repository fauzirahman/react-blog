import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({authUser}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">            
            <div className="container">                
                <h3>{authUser && authUser.user.name} </h3>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    MyBlog
                <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Home </Link>                            
                        </li>                       
                        <li className="nav-item">                            
                            <Link className="nav-link" to="/about"> About </Link>
                        </li>                                            
                        {
                            authUser &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/create-article">Create a new Article</Link>
                            </li>
                        }
                        {
                            !authUser &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        }
                        {
                            !authUser &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Sign up</Link>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;