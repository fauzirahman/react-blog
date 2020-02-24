import React from 'react';
import Article from '../Article';
import Banner from '../Banner';

const Welcome = () => {
    return (
        <div>            
            <Banner 
                backgroundImage={`url(${process.env.PUBLIC_URL}assets/img/home-bg.jpg)`}
                title = "New React Blog"
                subTitle = "Welcome to App"
            />
            <Article />
        </div>        
    );
};

export default Welcome;