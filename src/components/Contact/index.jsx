import React from 'react';
import Banner from '../Banner';

const Contact = () => {
    return (
        <div>           
            <Banner
                backgroundImage={`url(${process.env.PUBLIC_URL}assets/img/contact-bg.jpg)`}
                title="Contact Me"
                subTitle="Have questions? I have answers."
            />
            {/* Main Content */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                        {/* Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. */}
                        {/* WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! */}
                        {/* To use the contact form, your site must be on a live web host with PHP! The form will not work locally! */}
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Phone Number</label>
                                    <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Message</label>
                                    <textarea rows={5} className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message." defaultValue={""} />
                                    <p className="help-block text-danger" />
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

export default Contact;