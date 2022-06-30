import React, { useState, useEffect } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const ResetPasswordForm = () => {

   
    const [errorMessages, setErrorMessages] = useState({});
    

    // Render error msg for Email
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // Show Error message Text
    const errors = {
        EmptyEmail: "enter username",
    };

    // Show Error message Text

   

    // On form submit
    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();

        // // recaptcha
        // window.grecaptcha.ready(function () {
        //     window.grecaptcha.execute('[reCAPTCHA_site_key]', { action: 'submit' }).then(function (token) {
        //         // Send form value as well as token to the server
        //     });
        // });
        // // recaptcha


        var ResetEmail = document.getElementById('loginEmail');


        const userData = ResetEmail.value === "";
    

        // Compare user info
        if (userData) {
            setErrorMessages({ name: "uname", message: errors.EmptyEmail });
        }else{
            setErrorMessages({ name: "uname", message: "" });
        }

        // If Blank inputs
    }

       


    return (
        <>

            <div className='login-form form-white reset-password-form'>
                <div className='image-wrap'>
                    <img src='assets/images/reset-password.gif' alt='Reset password image'/>
                </div>
                <div className='title-wrap'>
                    <h1 className='page-title'>Reset password</h1>
                    <span className='form-sub-title'>Did someone forget their password?<br />Enter email address & we’ll send you a link to reset password.</span>
                </div>

                <form action='' onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group className="col-lg-12 form-group input-email" controlId="loginEmail">
                            <Form.Label className="hide">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" name="emailAddress" />
                            {renderErrorMessage("uname")}
                        </Form.Group>
                       
                        <input type="submit" className="col form-group btn btn-primary" value="Confirm" />
                        
                    </Row>
                </form>
            </div>

        </>
    )
}

export default ResetPasswordForm;