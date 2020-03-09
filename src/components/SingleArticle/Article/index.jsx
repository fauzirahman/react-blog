import React from 'react';


const SingleArticle = ({article}) => {
    
    return (
        <div>
            <header className="masthead" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/post-sample-image.jpg)` }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="post-heading">
                                <h1>{article.title}</h1>
                                <h2 className="subheading"></h2>
                                <span className="meta">Posted by {article.category_name} 
                                    on {article.created_at}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Post Content */}
            
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {
                                article.imageUrl                           
                            }
                            <p>{article.content}</p>                            
                        </div>
                    </div>
                </div>
            
            <hr />
        </div>
    );
};

export default SingleArticle;