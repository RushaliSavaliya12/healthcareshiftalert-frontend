import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import InputGroupForm from './InputGroupForm';
import ImageUploadInput from './ImageUploadInput';
import { Link } from "react-router-dom";
import { RoutesPath } from '../../App';


const EditUser = () => {

    return (
        <div className='edit-user-wrapper'>
            <div className='user-header'>
                <Link to={RoutesPath.manageUser} className='back-btn' id="UserbackBtn">
                    <i className='icon-Back-arrow'></i>
                </Link>
                <h6 className='poc-name-title'>Bristol Village</h6>
                <button className='btn border-btn'>
                    <i className='icon-message-solid'></i>
                    Message
                </button>
            </div>
            <div className='edit-user'>
                <Form>
                    <div className="edit-user-top">
                        <div className='user-image'>
                            <div className='image-upload'>
                                <ImageUploadInput UserImage={"assets/images/user-edit-image.png"} />
                            </div>
                        </div>
                        <div className="edit-user-form">
                            <Row className="form-row">
                                <Col md={6}>
                                    <InputGroupForm inputId="userName" inputLabel="User name" inputType="text" inputPlaceholder="Text here" inputName="userName" inputValue="camille123" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="pocFirstName" inputLabel="POC Firstname" inputType="text" inputPlaceholder="Text here" inputName="pocFirstName" inputValue="Camille" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="Email" inputLabel="Email" inputType="email" inputPlaceholder="Text here" inputName="Email" inputValue="camille@ondek.com" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="pocLastName" inputLabel="POC Lastname" inputType="text" inputPlaceholder="Text here" inputName="pocLastName" inputValue="Morena" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="Password" inputLabel="Password" inputType="password" inputPlaceholder="*****" inputName="Password" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="PocPosition" inputLabel="POC position" inputType="text" inputPlaceholder="Text here" inputName="PocPosition" inputValue="Village" />
                                </Col>
                            </Row>
                        </div>

                    </div>
                    <div className='edit-user-bottom edit-user-form'>
                        <Row className="form-row">
                            <Col md={6}>
                                <InputGroupForm inputId="FacilityName" inputLabel="Facility Name" inputType="text" inputPlaceholder="Text here" inputName="FacilityName" inputValue="Bristol Village" />
                            </Col>
                            <Col md={6}>
                                <InputGroupForm inputId="Mainline" inputLabel="Mainline" inputType="text" inputPlaceholder="Text here" inputName="Mainline" inputValue="123455678" />
                            </Col>
                            <Col md={12}>
                                <InputGroupForm inputId="Address" inputLabel="Address" inputType="text" inputPlaceholder="Text here" inputName="Address" inputValue="123456789" />
                            </Col>
                        </Row>
                    </div>
                    <div className='edit-user-footer'>
                        <div className='btn-wrap'>
                            <button className='btn border-btn'>Delete Facility</button>
                            <button className='btn btn-primary'>Save Changes</button>
                        </div>
                    </div>
                </Form>
            </div>

        </div>
    )
}

export default EditUser;