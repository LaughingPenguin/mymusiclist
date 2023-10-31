import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactForm = () => {
    return (
        <div class="container">
            <div class="row p-5 pt-lg-5 pb-lg-3">
                    <h1 class="display-5 fw-bold lh-1">Contact Us</h1>
                    <p class="lead">We're here to hear from you! Whether you have questions,
                    suggestions, or just want to share your thoughts about the website,
                    feel free to drop us a message and we'll get back to
                    you as soon as possible. Your feedback matters, and we can't wait to
                    hear from you!</p>
            </div>
            <div class="container col-xl-10 px-4 py-4">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">
                        <p><FontAwesomeIcon icon="fas fa-location-dot" /> 45 Wyllys Avenue, Middletown, CT 06457</p>
                        <p><FontAwesomeIcon icon="fas fa-envelope" /> info@yourmusicrater.com</p>
                        <p><FontAwesomeIcon icon="fas fa-phone" /> (123) 456-7890</p>
                        <p><FontAwesomeIcon icon="fas fa-globe" /> www.yourmusicrater.com</p>
                    </div>
                    <div class="col-md-10 mx-auto col-lg-5">
                        <div class="form-outline mb-3">
                            <input type="text" class="form-control" id="nameInput" placeholder="Name*" />
                        </div>
                        <div class="form-outline mb-3">
                            <input type="email" class="form-control" id="emailInput" placeholder="Email*" />
                        </div>
                        <div class="form-outline mb-3">
                            <textarea type="text" class="form-control" id="messageInput" placeholder="Message*" rows="4" />
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;