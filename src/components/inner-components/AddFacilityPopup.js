import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Modal } from 'react-bootstrap';
import InputGroupForm from './InputGroupForm';
import ImageUploadInput from './ImageUploadInput';
import { RoutesPath } from '../../App';



const AddFacilityPopup = (props) => {

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
                                        <InputGroupForm inputId="userName" inputLabel="User name" inputType="text" inputPlaceholder="Text here" inputName="userName"/>
                                        <InputGroupForm inputId="Email" inputLabel="Email" inputType="email" inputPlaceholder="Text here" inputName="Email"/>
                                        <InputGroupForm inputId="Password" inputLabel="Password" inputType="password" inputPlaceholder="*****" inputName="Password"/>
                                    </Col>
                                </Row>
                                <Row className='form-row'>
                                    <Col md={6}>
                                        <InputGroupForm inputId="pocFirstName" inputLabel="POC Firstname" inputType="text" inputPlaceholder="Text here" inputName="pocFirstName"/>
                                    </Col>
                                    <Col md={6}>
                                        <InputGroupForm inputId="pocLastName" inputLabel="POC Lastname" inputType="text" inputPlaceholder="Text here" inputName="pocLastName"/>
                                    </Col>
                                    <Col md={6}>
                                        <InputGroupForm inputId="PocPosition" inputLabel="POC position" inputType="text" inputPlaceholder="Text here" inputName="PocPosition"/>
                                    </Col>
                                    <Col md={6}>
                                        <InputGroupForm inputId="Mainline" inputLabel="Mainline" inputType="text" inputPlaceholder="Text here" inputName="Mainline"/>
                                    </Col>
                                    <Col md={12}>
                                        <InputGroupForm inputId="FacilityName" inputLabel="Facility Name" inputType="text" inputPlaceholder="Text here" inputName="FacilityName"/>
                                    </Col>
                                    <Col md={12}>
                                        <InputGroupForm inputId="Address" inputLabel="Address" inputType="text" inputPlaceholder="Text here" inputName="Address"/>
                                    </Col>
                                </Row>
                                <div className='submit-btn'>
                                    <input type="submit" value="Submit" className="btn btn-primary"/>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            
            </Modal>
        </div>

    )

}


export default AddFacilityPopup;