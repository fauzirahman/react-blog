import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../Banner';

const CreateArticle = ({ handleInputChange, categories, handleSubmit, errors }) => {    
    return (
        <div>
                <Banner
                    backgroundImage={`url(${process.env.PUBLIC_URL}assets/img/contact-bg.jpg)`}
                    title="Article"
                    subTitle="Write Article"
                />
                {/* Main Content */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                            {/* Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. */}
                            {/* WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! */}
                            {/* To use the contact form, your site must be on a live web host with PHP! The form will not work locally! */}
                        <form name="sentMessage" id="contactForm" noValidate onSubmit={handleSubmit}>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Title</label>
                                        <input type="text" onChange={handleInputChange} className="form-control" placeholder="title" id="title" name="title" required data-validation-required-message="Please enter your title." />
                                        {
                                            errors['title'] &&
                                            <small className="text-danger">{errors['title']}</small>
                                        }
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Image</label>
                                        <input type="file" onChange={handleInputChange} className="form-control" name="image" id="images" />
                                            {
                                                errors['image'] &&
                                                <small className="text-danger">{errors['image']}</small>
                                            }
                                    </div>
                                </div>                                
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Category</label>
                                        <select name="category" onChange={handleInputChange} className="form-control" name="category" id="category">
                                            <option value>Select category</option>
                                            {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}                                            
                                        </select>
                                        {
                                            errors['category'] &&
                                            <small className="text-danger">{errors['category']}</small>
                                        }
                                    </div>
                                </div>                                
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Content</label>
                                        <textarea rows={5} name="content" onChange={handleInputChange} className="form-control" placeholder="content" id="message" required data-validation-required-message="Please enter a message." defaultValue={""} />
                                        {
                                            errors['content'] &&
                                            <small className="text-danger">{errors['content']}</small>
                                        }
                                    </div>
                                </div>
                                <br />
                                <div id="success" />
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
    );
};

CreateArticle.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.objectOf(PropTypes.string).isRequired
};

export default CreateArticle;