import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import InputGroupForm from './InputGroupForm';
import ColorPickerDrodown from './ColorPickerDrodown';
import TimeCustomPicker from './TimeCustomPicker';
import AllCustomIcon from '../../JsonDataFile/AllCustomIcon';
import { RoutesPath } from '../../App';

const CreateTemplatePopup = (props) => {

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="popup-wrapper">
                <Button className="border-btn" onClick={handleShow}>Create new</Button>
                <Modal show={show} onHide={handleClose} className='add-shift-popup custom-popup'>
                    <Modal.Header closeButton>
                        <h5>Create template</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='form-wrapper'>
                            <Form>
                                <div className='form-inner'>
                                    <Row className="form-row">
                                        <Col md={12}>
                                            <InputGroupForm inputId="templateName" inputLabel="Template name" inputType="text" inputPlaceholder="Text here" inputName="templateName" />
                                        </Col>
                                        <Col md={12}>
                                            <InputGroupForm inputId="Position" inputLabel="Position" inputType="text" inputPlaceholder="Text here" inputName="Position" />
                                        </Col>
                                        <Col md={12}>
                                            <div className='shift-input-wrap'>

                                                <InputGroupForm inputId="Shift" inputLabel="Shift" inputType="text" inputPlaceholder="Text here" inputName="Shift" />
                                                <div className="color-dropdown">
                                                    <label className="form-label">Color</label>
                                                    <ColorPickerDrodown />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className='form-group time-picker'>
                                                <label className='form-label'>Start</label>
                                                <TimeCustomPicker />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className='form-group time-picker'>
                                                <label className='form-label'>End</label>
                                                <TimeCustomPicker />
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className="form-group checkbox-single">
                                                <div className='custom-checkbox-wrapper'>
                                                    <Form.Control type="checkbox" />
                                                    <span>Repeat daily</span>
                                                    <span className="checkmark"></span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className="form-group textarea-group">
                                                <label className='form-label'>Note</label>
                                                <textarea placeholder='Text here'></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className='btn-wrap'>
                                        <button className='btn btn-primary'>Create template</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>

        </>
    )
}

export default CreateTemplatePopup;