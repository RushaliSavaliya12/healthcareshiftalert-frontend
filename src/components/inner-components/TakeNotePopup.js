import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Modal } from 'react-bootstrap';
import InputGroupForm from './InputGroupForm';
import ImageUploadInput from './ImageUploadInput';
import { RoutesPath } from '../../App';



const TakeNotePopup = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className="add-user-pop-wrap note-pop-wrap">
            <Button className="border-btn small-btn outline-success" onClick={handleShow}>Take Note</Button>
            <Modal show={show} onHide={handleClose} className='add-user-popup note-popup'>
                <Modal.Header closeButton>
                    <h5>{props.ModelTitle}</h5>
                </Modal.Header>
                <Modal.Body>
                    <div className='add-user-form note-popup-form'>
                        <Form>
                            <div className="form-inner">
                                <Row className="form-row">
                                    <Col md={12}>
                                        <Form.Label className="">Take note:</Form.Label>
                                        <Form.Control as="textarea" placeholder="Text here" id="Note" />
                                    </Col>
                                </Row>
                                <div className='submit-btn'>
                                    <input type="submit" value="Confirm" className="btn btn-primary w-100"/>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            
            </Modal>
        </div>

    )

}


export default TakeNotePopup;