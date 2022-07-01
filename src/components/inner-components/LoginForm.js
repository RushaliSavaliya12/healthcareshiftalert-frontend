import React, { useState, useEffect } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
import {RoutesPath} from '../../App';


const LoginForm = () => {

    // Remember me functionalty Init
    var rememberCheck;
    var emailInput;
    var emailPassword;

    useEffect(() => {

        rememberCheck = document.getElementById("rememberCheckbox");
        emailInput = document.getElementById("loginEmail");
        emailPassword = document.getElementById("loginPassword");


        setTimeout(function () {
            if (localStorage.checkbox && localStorage.checkbox !== "") {
                rememberCheck.setAttribute("checked", "checked");
                emailInput.value = localStorage.username;
                emailPassword.value = localStorage.password;
            } else {
                rememberCheck.removeAttribute("checked");
                emailInput.value = "";
                emailPassword.value = "";
            }
        }, 400);
        // Remember me functionalty Init
    });

    const [errorMessages, setErrorMessages] = useState({});
    const [errorMessagesPassword, setErrorMessagesPassword] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);


    // Render error msg for Email
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // Render error msg for passWord
    const renderErrorMessagePassword = (name) =>
        name === errorMessagesPassword.name && (
            <div className="error">{errorMessagesPassword.message}</div>
        );

    // Login Email Id and password
    const database = [
        {
            emailId: "healthcare@gmail.com",
            password: "healthcare@2022"
        }
    ];
    // Login Email Id and password

    // Show Error message Text
    const errors = {
        uname: "Incorrect Username",
        pass: "Incorrect password",
        EmptyEmail: "enter username",
        Emptypass: "enter password",
    };

    // Show Error message Text

    const navigate = useNavigate();

    // On form submit
    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();

        // recaptcha
        // window.grecaptcha.ready(function () {
        //     window.grecaptcha.execute('6LfKBaIgAAAAAHs1rgq97ZvPHFf1Um4Mo8FDOrBM', { action: 'submit' }).then(function (token) {
                
        //     });
        // });
        // recaptcha


        var { emailAddress, pass } = document.forms[0];



        // Find user login info


        var LoginEmailaddress;
        var LoginPassWord;
        for (const user of database) {
            LoginEmailaddress = user.emailId;
            LoginPassWord = user.password;
        };

        const userData = LoginEmailaddress === emailAddress.value;

        // Compare user info
        if (userData) {
            setErrorMessages({ name: "uname", message: "" });
            setErrorMessagesPassword({ name: "pass", message: "" });
            if (LoginPassWord !== pass.value && pass.value !== "") {
                setErrorMessagesPassword({ name: "pass", message: errors.pass });
            } else if (pass.value === "") {
                setErrorMessagesPassword({ name: "pass", message: errors.Emptypass });
            } else {

                // navigate dashboard page
                    navigate(RoutesPath.dashboard);
                // navigate dashboard page
            }
        } else if (pass.value === "" && emailAddress.value === "") {

            setErrorMessages({ name: "uname", message: errors.EmptyEmail });
            setErrorMessagesPassword({ name: "pass", message: errors.Emptypass });

        } else if (emailAddress.value === "") {
            setErrorMessages({ name: "uname", message: errors.EmptyEmail });
        }
        else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }

        // If Blank inputs

        // Remember me functionalty on Submit

        if (rememberCheck.checked && emailInput.value !== "") {
            localStorage.username = emailInput.value;
            localStorage.password = emailPassword.value;
            localStorage.checkbox = rememberCheck.value;
        } else {
            localStorage.username = "";
            localStorage.password = "";
            localStorage.checkbox = "";
        }

        // Remember me functionalty Submit



    };
    // On form submit


    return (
        <>

            <div className='login-form form-white'>
                <h1 className='page-title'>Log in</h1>
                <form action='' onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group className="col-lg-12 form-group input-email" controlId="loginEmail">
                            <Form.Label className="hide">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" name="emailAddress" />
                            {renderErrorMessage("uname")}
                        </Form.Group>

                        <Form.Group className="col-lg-12 form-group input-password" controlId="loginPassword">
                            <Form.Label className="hide">Password</Form.Label>
                            <Form.Control type="password" placeholder="Your password" name="pass" />
                            {renderErrorMessagePassword("pass")}
                        </Form.Group>
                        <Form.Group className="col-6 form-group input-remember-me" controlId="rememberCheckbox">
                            <div className='custom-checkbox-wrapper'>
                                <Form.Control type="checkbox" />
                                Remember me
                                <span class="checkmark"></span>
                            </div>

                        </Form.Group>
                        <Form.Group className="col-6 form-group input-fotgot-password" controlId="forgotPassword">
                            <Link to={RoutesPath.resetPassword}>Forgot Password?</Link>
                        </Form.Group>
                        <input type="submit" className="col form-group btn btn-primary" value="Log in" />
                        <Form.Group className="col-lg-12 form-group login-with-button" controlId="loginWith">

                            <span>- or continue with - </span>
                            <div className='login-with-btn-wrap'>
                                <Button className="col" variant="secondary" type="button">
                                    <img src="assets/images/google-icon.svg" />
                                    <span>Google</span>
                                </Button>
                                <Button className="col" variant="secondary" type="button">
                                    <img src="assets/images/facebook-icon.svg" />
                                    <span>Facebook</span>
                                </Button>
                            </div>
                        </Form.Group>
                    </Row>
                </form>
            </div>

        </>
    )
}

export default LoginForm;