import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import InputGroupForm from './InputGroupForm';
import ImageUploadInput from './ImageUploadInput';
import DateofBirthInput from './DateofBirthInput';
import CustomDropdown from './CustomDropdown';
import SwitchToggle from './SwitchToggle';


const RoleDropdownData = [
    { value: 'admin', label: 'Admin' },
    { value: 'HMC-admin', label: 'HMC admin' },
    { value: 'Super-admin', label: 'Super Admin' }
]

const AdminTabContent = (props) => {


    return (

        <div className='admin-tab-content tab-content-wrap'>
            <button className='btn border-btn message-text-btn tab-top-btn'>
                <i className='icon-message-solid'></i>
                Message
            </button>

            <div className='edit-user-wrapper'>
                <div className='user-header mobile-user-header'>
                    <h6 className='h5'>Camille Moreno</h6>
                    <button className='btn border-btn message-text-btn'>
                        <i className='icon-message-solid'></i>
                        Message
                    </button>
                </div>
                <div className='edit-user'>
                    <Form>
                        <div className="edit-user-top">
                            <div className='user-image'>
                                <div className='image-upload'>
                                    <ImageUploadInput UserImage={"assets/images/super-admin-profile.png"} />
                                </div>
                            </div>
                            <div className="edit-user-form">
                                <div className='user-header'>
                                    <h6 className='h5'>Camille Moreno</h6>
                                    <button className='btn border-btn message-text-btn'>
                                        <i className='icon-message-solid'></i>
                                        Message
                                    </button>
                                </div>
                                <Row className="form-row">
                                    <Col md={6}>
                                        <InputGroupForm inputId="FullName" inputLabel="Full name" inputType="text" inputPlaceholder="Text here" inputName="FullName" inputValue="Mark Jines" />
                                    </Col>
                                    <Col md={6}>
                                        <InputGroupForm inputId="UserName" inputLabel="User name" inputType="text" inputPlaceholder="Text here" inputName="UserName" inputValue="mellani123" />
                                    </Col>
                                    <Col md={6}>
                                        <InputGroupForm inputId="Email" inputLabel="Email" inputType="email" inputPlaceholder="Text here" inputName="Email" inputValue="mellani@ondek.com" />
                                    </Col>
                                    <Col md={6}>
                                        <InputGroupForm inputId="Password" inputLabel="Password" inputType="password" inputPlaceholder="*****" inputName="Password" />
                                    </Col>

                                </Row>
                            </div>

                        </div>
                        <div className='edit-user-bottom edit-user-form'>
                            <Row className="form-row">
                                <Col md={6}>
                                    <div className='form-group'>
                                        <label className='form-label'>Role</label>
                                        <CustomDropdown optionData={RoleDropdownData} />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="form-group date-of-birth-input">
                                        <label className='form-label'>Date of birth</label>
                                        <DateofBirthInput />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="PhoneNumber" inputLabel="Phone" inputType="number" inputPlaceholder="Text here" inputName="PhoneNumber" inputValue="123456789" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="Address" inputLabel="Address" inputType="text" inputPlaceholder="Text here" inputName="Address" inputValue="Bristol village" />
                                </Col>
                                <Col md={6}>
                                    <div className="scheduling-btn">
                                        <h6>Scheduling Access</h6>
                                        <SwitchToggle dataSwitch="On" />
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className='edit-user-footer'>
                            <div className='btn-wrap'>
                                <button className='btn border-btn'>Disable account</button>
                                <button className='btn btn-primary'>Save changes</button>
                            </div>
                        </div>
                    </Form>
                </div>

            </div>

        </div>
    )

}


export default AdminTabContent;