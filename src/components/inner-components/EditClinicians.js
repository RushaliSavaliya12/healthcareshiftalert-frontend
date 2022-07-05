import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import InputGroupForm from './InputGroupForm';
import ImageUploadInput from './ImageUploadInput';
import DateofBirthInput from './DateofBirthInput';
import { Link } from "react-router-dom";
import CustomDropdown from './CustomDropdown';
import CredentialTable from './CredentialTable';
import { RoutesPath } from '../../App';


const EditClinicians = () => {

    const JobSitesData = [
        { value: 'Select Facility', label: 'Select Facility', isdisable: "disable" },
        { value: 'bristol-village', label: 'Bristol Village' },
        { value: 'chillicothe-campus', label: 'Chillicothe Campus' },
        { value: 'Toledo', label: 'Toledo' },
    ]

    return (
        <div className='edit-user-wrapper'>
            <div className='user-header'>
                <Link to={RoutesPath.manageUser} className='back-btn' id="UserbackBtn">
                    <i className='icon-Back-arrow'></i>
                </Link>
                <h6 className='poc-name-title'>Camille Moreno</h6>
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
                                <ImageUploadInput UserImage={"assets/images/edit-clinicians-profile.png"} />
                            </div>
                        </div>
                        <div className="edit-user-form">
                            <Row className="form-row">
                                <Col md={6}>
                                    <InputGroupForm inputId="userName" inputLabel="User name" inputType="text" inputPlaceholder="Text here" inputName="userName" inputValue="camille123" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="FirstName" inputLabel="Firstname" inputType="text" inputPlaceholder="Text here" inputName="FirstName" inputValue="Camille" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="Email" inputLabel="Email" inputType="email" inputPlaceholder="Text here" inputName="Email" inputValue="camille@ondek.com" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="LastName" inputLabel="Lastname" inputType="text" inputPlaceholder="Text here" inputName="LastName" inputValue="Morena" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="Password" inputLabel="Password" inputType="password" inputPlaceholder="*****" inputName="Password" />
                                </Col>
                                <Col md={6}>
                                    <div className="form-group date-of-birth-input">
                                        <label className='form-label'>Date of birth</label>
                                        <DateofBirthInput />
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </div>
                    <div className='edit-user-bottom edit-user-form'>
                        <Row className="form-row">
                            <Col md={6}>
                                <InputGroupForm inputId="Position" inputLabel="Position" inputType="text" inputPlaceholder="Text here" inputName="Position" inputValue="RN" />
                            </Col>
                            <Col md={6}>
                                <InputGroupForm inputId="EmployeeId" inputLabel="Employee ID" inputType="text" inputPlaceholder="Text here" inputName="EmployeeId" inputValue="Nurse" />
                            </Col>
                            <Col md={6}>
                                <div className='form-group'>
                                    <label className='form-label'>Job Sites</label>
                                    <CustomDropdown optionData={JobSitesData} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <InputGroupForm inputId="ContactNumber" inputLabel="Contact Number" inputType="number" inputPlaceholder="Text here" inputName="ContactNumber" inputValue="123456789" />
                            </Col>
                        </Row>
                    </div>
                    <div className="edit-user-form credential-wrapper">
                        <h6 className='table-title'>Credentials</h6>
                        <div className="credential-table-wrapper">
                            <div className="table-wrapper table-responsive">
                                <CredentialTable />
                            </div>
                        </div>


                    </div>
                    <div className='edit-user-footer'>
                        <div className='btn-wrap'>
                            <button className='btn border-btn'>Delete Clinicians</button>
                            <button className='btn btn-primary'>Save Changes</button>
                        </div>
                    </div>
                </Form>
            </div>

        </div>
    )
}

export default EditClinicians;