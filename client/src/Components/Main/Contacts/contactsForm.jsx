import React from 'react';
import { Link } from 'react-router-dom';

function ContactsForm() {
    return (
        <div className="contacts_form">
            <div className="form">
                <h2>Call Me Back</h2>

                <span className="name_on_form">Name <span className="star_nameForm">*</span></span>
                <input type="text" />

                <span className="name_on_form">Telephone <span className="star_nameForm">*</span></span>
                <input type="text" />

                <span className="name_on_form">Order Number</span>
                <input type="text" />

                <span className="name_on_form">Comment <span className="star_nameForm">*</span></span>
                <input className="comment" type="text" />
                <br />
                <br />
                <Link className="btn_request" to="#">REQUEST CALLBACK</Link>

            </div>
            <div className="contactsAndFollowUs">
                <h3>Follow us</h3>
                <div className="links_follow_us">
                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                    <Link to="#"><i className="fab fa-reddit"></i></Link>
                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                    <Link to="#"><i className="fab fa-youtube-square"></i></Link>
                </div>
            </div>
        </div>
    )
};
export default ContactsForm;
