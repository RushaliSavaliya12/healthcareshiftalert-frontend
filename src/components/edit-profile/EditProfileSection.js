import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Modal } from 'react-bootstrap';
import InputGroupForm from '../inner-components/InputGroupForm';
import ImageUploadInput from '../inner-components/ImageUploadInput';
import DateofBirthInput from '../inner-components/DateofBirthInput';
import CustomDropdown from '../inner-components/CustomDropdown';



const EditProfileSection = (props) => {

    const JobSitesData = [
        { value: 'Select Facility', label: 'Select Facility', isdisable: "disable" },
        { value: 'bristol-village', label: 'Bristol Village' },
        { value: 'chillicothe-campus', label: 'Chillicothe Campus' },
        { value: 'Toledo', label: 'Toledo' },


    ]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='edit-profile-main'>
            <div className='edit-user'>
                <Form>
                    <div className="edit-user-top">
                        <div className='user-image'>
                            <div className='image-upload'>
                                <ImageUploadInput UserImage={"assets/images/my-profile-image.png"} />
                            </div>
                        </div>
                        <div className="edit-user-form">
                            <Row className="form-row">
                                <Col md={6}>
                                    <InputGroupForm inputId="userName" inputLabel="User name" inputType="text" inputPlaceholder="Text here" inputName="userName" inputValue="melani123" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="fullName" inputLabel="Full name" inputType="text" inputPlaceholder="Text here" inputName="fullName" inputValue="Mellani Jones" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="Email" inputLabel="Email" inputType="email" inputPlaceholder="Text here" inputName="Email" inputValue="mellani@ondek.com" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="phoneNumber" inputLabel="Phone" inputType="number" inputPlaceholder="Text here" inputName="phoneNumber" inputValue="1234567890" />
                                </Col>
                                <Col md={6}>
                                    <InputGroupForm inputId="favFood" inputLabel="Favorite Food" inputType="text" inputPlaceholder="Text here" inputName="favFood" inputValue="Fruit" />
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
                                <div className='form-group'>
                                    <label className='form-label'>Job Sites</label>
                                    <CustomDropdown optionData={JobSitesData} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <InputGroupForm inputId="Position" inputLabel="Position" inputType="text" inputPlaceholder="Text here" inputName="Position" inputValue="Admin" />
                            </Col>
                            <Col md={6}>
                                <InputGroupForm inputId="Address" inputLabel="Address" inputType="text" inputPlaceholder="Text here" inputName="Address" inputValue="123456789" />
                            </Col>
                            <Col md={6}>
                                <InputGroupForm inputId="Mainline" inputLabel="Mainline" inputType="text" inputPlaceholder="Text here" inputName="Mainline" inputValue="123455678" />
                            </Col>

                        </Row>
                    </div>
                    <div className='edit-user-footer'>
                        <div className='btn-wrap'>
                            <button type='button' className='btn border-btn' id='changePassword' onClick={handleShow}>Change Password</button>
                            <button className='btn btn-primary'>Save Changes</button>
                        </div>
                        <div className='change-password-popup'>
                            <Modal show={show} onHide={handleClose} className='change-password-popup'>
                                <Modal.Header closeButton>
                                    <h5>Change Password</h5>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="form-inner">
                                        <form>
                                            <InputGroupForm inputId="oldPassword" inputLabel="Enter old password" inputType="password" inputPlaceholder="*****" inputName="oldPassword" />
                                            <div className='new-password-group'>
                                                <InputGroupForm inputId="createNewPassword" inputLabel="Create new password" inputType="password" inputPlaceholder="Enter new password" inputName="createNewPassword" />
                                                <InputGroupForm inputId="reenterNewPassword" inputLabel="" inputType="password" inputPlaceholder="Re-enter new password" inputName="reenterNewPassword" />
                                            </div>
                                            <div className='submit-btn'>
                                                <input type="submit" className='btn btn-primary' value="Save changes"/>
                                            </div>
                                        </form>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </Form>
            </div>
        </div>


    )
}

export default EditProfileSection;