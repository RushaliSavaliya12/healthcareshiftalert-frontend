import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Modal } from 'react-bootstrap';
import InputGroupForm from './InputGroupForm';
import ImageUploadInput from './ImageUploadInput';
import DateofBirthInput from './DateofBirthInput';
import CustomDropdown from './CustomDropdown';
import { RoutesPath } from '../../App';



const AddCliniciansPopup = (props) => {

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

        <div className="add-user-pop-wrap">
            <Button className="border-btn" onClick={handleShow}><i className='icon-plus'></i> Add Clinicians</Button>
            <Modal show={show} onHide={handleClose} className='add-user-popup'>
                <Modal.Header closeButton>
                    <h5>{props.ModelTitle}</h5>
                </Modal.Header>
                <Modal.Body>
                    <div className='add-user-form'>
                        <Form>
                            <div className="form-inner">
                                <Row className="form-row">
                                    <Col md={6}>
                                        <div className='image-upload'>
                                            <ImageUploadInput />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <InputGroupForm inputId="userName" inputLabel="User name" inputType="text" inputPlaceholder="Text here" inputName="userName" />
                                        <InputGroupForm inputId="Email" inputLabel="Email" inputType="email" inputPlaceholder="Text here" inputName="Email" />
                                        <InputGroupForm inputId="Password" inputLabel="Password" inputType="password" inputPlaceholder="*****" inputName="Password" />
                                    </Col>
                                </Row>
                                <Row className='form-row'>
                                    <Col md={6}>
                                        <InputGroupForm inputId="FirstName" inputLabel="Firstname" inputType="text" inputPlaceholder="Text here" inputName="FirstName" />
                                    </Col>
                                    <Col md={6}>
                                        <InputGroupForm inputId="LastName" inputLabel="Lastname" inputType="text" inputPlaceholder="Text here" inputName="LastName" />
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group date-of-birth-input">
                                            <label className='form-label'>Date of birth</label>
                                            <DateofBirthInput />
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <InputGroupForm inputId="ContactNumber" inputLabel="Contact Number" inputType="number" inputPlaceholder="Text here" inputName="ContactNumber" />
                                    </Col>
                                    <Col md={6}>
                                        <InputGroupForm inputId="Position" inputLabel="Position" inputType="text" inputPlaceholder="Text here" inputName="Position" />
                                    </Col>

                                    <Col md={6}>
                                        <InputGroupForm inputId="CliniciansRole" inputLabel="Role" inputType="text" inputPlaceholder="Text here" inputName="CliniciansRole" />
                                    </Col>
                                    <Col md={12}>
                                        <div className='form-group'>
                                            <label className='form-label'>Job Sites</label>
                                            <CustomDropdown optionData={JobSitesData} />
                                        </div>
                                    </Col>
                                </Row>
                                <div className='submit-btn'>
                                    <input type="submit" value="Submit" className="btn btn-primary" />
                                </div>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>

            </Modal>
        </div>

    )

}


export default AddCliniciansPopup;