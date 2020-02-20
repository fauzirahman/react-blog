import React from 'react';
import Article from '../Article';
import Banner from '../Banner';

const Welcome = () => {
    return (
        <div>            
            <Banner 
                backgroundImage={`url(${process.env.PUBLIC_URL}assets/img/home-bg.jpg)`}
                title = "Clean Blog"
                subTitle = "A Blog Theme by Start Bootstrap"
            />
            <Article />
        </div>        
    );
};

export default Welcome;