/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';


const Articles = ({ articles, handlePagination, nextUrl, prevUrl}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto"> 
                        {articles && articles.map(article=>(
                            <div key={article.id}>
                                <div className="post-preview">
                                    <Link to={`article/${article.slug}`}>
                                        <h2 className="post-title">
                                            {article.title}
                                </h2>
                                        <h3 className="post-subtitle">
                                            {`${article.content.substring(0,200)}...`}
                                 </h3>
                                    </Link>
                                    <p className="post-meta">Posted by {article.user.name}                                        
                                        &nbsp;on {new Date(article.created_at).toDateString()}
                                    </p>
                                </div>
                                <hr />
                            </div>
                        ))}                                                                                        
                       
                        {/* Pager */}
                        <div className="clearfix">
                            <a className={`btn btn-primary float-left ${prevUrl?'' : 'disabled'}`} href="#" onClick={()=>handlePagination(prevUrl)}>Previous Page </a> &nbsp; 
                            <a className={`btn btn-primary float-right ${nextUrl ? '' : 'disabled'}`} href="#" onClick={() => handlePagination(nextUrl)}> Next Page </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Articles; 