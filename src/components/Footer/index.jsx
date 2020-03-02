import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">                        
                        <p className="copyright text-muted">Copyright © Your Website 2020</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;