import React from 'react';


const Banner = ({ backgroundImage, subTitle, title}) => {
    return (        
            <header className="masthead" style={{ backgroundImage }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{title}</h1>
                                <span className="subheading">{subTitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>           
    );
};

export default Banner;