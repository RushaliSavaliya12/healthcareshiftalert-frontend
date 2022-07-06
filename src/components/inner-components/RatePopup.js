import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Modal } from 'react-bootstrap';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css';

const RatePopup = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className="add-user-pop-wrap note-pop-wrap">
            <Button className="border-btn small-btn" onClick={handleShow}>Rate</Button>
            <Modal show={show} onHide={handleClose} className='add-user-popup note-popup rate-popup'>
                <Modal.Header closeButton>
                    <h5>{props.ModelTitle}</h5>
                </Modal.Header>
                <Modal.Body>
                    <div className='add-user-form note-popup-form'>
                        <Form>
                            <div className="form-inner">
                                <Row className="form-row align-items-center nurse-info">
                                    <Col sm={3} className='mr-3'>
                                        <img src="/assets/images/Nurse.png" alt="Camille Moreno" />
                                    </Col>
                                    <Col  sm={7}>
                                        <h5 className='mb-0'>Camille Moreno</h5>
                                        <Rater rating={0} total={5} />
                                    </Col>
                                </Row>
                                <Row className="form-row">
                                    <Col md={12}>
                                        <Form.Label className="">Nurse performance feedback good or bad :</Form.Label>
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


export default RatePopup;