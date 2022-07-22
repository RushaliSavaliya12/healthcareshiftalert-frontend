import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Button, Form, Row, Col, Modal } from 'react-bootstrap';
import ImageUploadInput from './ImageUploadInput';



const AddFacilityPopup = (props) => {

    const [show, setShow] = useState(false);



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    // Form validation




    return (

        <div className="add-user-pop-wrap">
            <Button className="border-btn" onClick={handleShow}><i className='icon-plus'></i>{props.ModelTitle}</Button>
            <Modal show={show} onHide={handleClose} className='add-user-popup'>
                <Modal.Header closeButton>
                    <h5>{props.ModelTitle}</h5>
                </Modal.Header>
                <Modal.Body>
                    <div className='add-user-form'>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-inner">
                                <Row className="form-row">
                                    <Col md={6}>
                                        <div className='image-upload'>
                                            <ImageUploadInput />
                                        </div>
                                    </Col>
                                    <Col md={6}>

                                        <Form.Group className="form-group" controlId="userName">
                                            <Form.Label className="">User name</Form.Label>
                                            <Form.Control type="text" placeholder="Text here" name="userName" {...register("userName", {
                                                required: true,
                                                maxLength: 50,
                                                minLength: 5,
                                                pattern: {
                                                    value: /^[a-zA-Z0-9_@.-]*$/,
                                                },
                                            })} />
                                            <span className="error-message">{errors.userName?.type === 'required' && "enter Username"}
                                            {errors.userName?.type === 'maxLength' && "It accepts maximum 50 characters"}
                                            {errors.userName?.type === 'minLength' && "enter minimum 5 characters"}
                                            {errors.userName?.type === 'pattern' && "It doesn't allow special characters excepts _ . @ -"}</span>

                                        </Form.Group>
                                        <Form.Group className="form-group" controlId="Email">
                                            <Form.Label className="">Email</Form.Label>
                                            <Form.Control type="email" placeholder="Text here" name="Email" {...register("email", {
                                                required: true,
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                }
                                            })} />
                                            <span className="error-message">{errors.email?.type === 'required' && "enter Email"}
                                            {errors.email?.type === 'pattern' && "Please enter a valid email"}</span>

                                        </Form.Group>
                                        <Form.Group className="form-group" controlId="Password">
                                            <Form.Label className="">Password</Form.Label>
                                            <Form.Control type="password" placeholder="Text here" name="Password" {...register("password", {
                                                required: true,
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,50}$/i,
                                                }
                                            })} />
                                            <span className="error-message">{errors.password?.type === 'required' && "enter Password"}
                                            {errors.password?.type === 'pattern' && "The password must match the following criteria: Minimum 8 characters, Include at least 1 letter, Include at least 1 number and maximum 12 characters long."}</span>

                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='form-row'>
                                    <Col md={6}>
                                        <Form.Group className="form-group" controlId="pocFirstName">
                                            <Form.Label className="">POC Firstname</Form.Label>
                                            <Form.Control type="text" placeholder="Text here" name="pocFirstName" {...register("pocfirstName", {
                                                required: true,
                                                maxLength: 50,
                                                minLength: 3,
                                            })} />
                                            <span className="error-message">{errors.pocfirstName?.type === 'required' && "enter POC First name"}
                                            {errors.pocfirstName?.type === 'maxLength' && "It accepts maximum 50 characters"}
                                            {errors.pocfirstName?.type === 'minLength' && "enter minimum 3 characters"}</span>


                                        </Form.Group>

                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="form-group" controlId="pocLastName">
                                            <Form.Label className="">POC Lastname</Form.Label>
                                            <Form.Control type="text" placeholder="Text here" name="pocLastName" {...register("pocLastName", {
                                                required: true,
                                                maxLength: 50,
                                                minLength: 3,
                                            })} />
                                            <span className="error-message">{errors.pocLastName?.type === 'required' && "enter POC Last name"}
                                            {errors.pocLastName?.type === 'maxLength' && "It accepts maximum 50 characters"}
                                            {errors.pocLastName?.type === 'minLength' && "enter minimum 3 characters"}</span>


                                        </Form.Group>

                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="form-group" controlId="PocPosition">
                                            <Form.Label className="">POC position</Form.Label>
                                            <Form.Control type="text" placeholder="Text here" name="PocPosition" {...register("PocPosition", {
                                                required: true,
                                                maxLength: 50,
                                                minLength: 3,
                                            })} />
                                            <span className="error-message">{errors.PocPosition?.type === 'required' && "enter POC Position"}
                                            {errors.PocPosition?.type === 'maxLength' && "It accepts maximum 50 characters"}
                                           {errors.PocPosition?.type === 'minLength' && "enter minimum 3 characters"}</span>

                                        </Form.Group>

                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="form-group" controlId="Mainline">
                                            <Form.Label className="">Mainline</Form.Label>
                                            <Form.Control type="number" placeholder="Text here" name="Mainline" {...register("mainline", {
                                                maxLength: 20,
                                                minLength: 10,
                                            })} />
                                            <span className="error-message">{errors.mainline?.type === 'maxLength' && "It accepts maximum 20 characters"}
                                            {errors.mainline?.type === 'minLength' && "enter minimum 10 characters"}</span>

                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="form-group" controlId="FacilityName">
                                            <Form.Label className="">Facility Name</Form.Label>
                                            <Form.Control type="text" placeholder="Text here" name="FacilityName" {...register("FacilityName", {
                                                required: true,
                                                maxLength: 100,
                                                minLength: 3,
                                            })} />
                                            <span className="error-message">{errors.FacilityName?.type === 'required' && "enter Facility name"}
                                            {errors.FacilityName?.type === 'maxLength' && "It accepts maximum 100 characters"}
                                            {errors.FacilityName?.type === 'minLength' && "enter minimum 3 characters"}</span>

                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                    <Form.Group className="form-group" controlId="Address">
                                            <Form.Label className="">Address</Form.Label>
                                            <Form.Control type="text" placeholder="Text here" name="Address" {...register("address", {
                                                required: true,
                                                maxLength: 200,
                                                minLength: 3,
                                            })} />
                                            <span className="error-message">{errors.address?.type === 'required' && "enter Address"}
                                            {errors.address?.type === 'maxLength' && "It accepts maximum 100 characters"}
                                            {errors.address?.type === 'minLength' && "enter minimum 3 characters"}</span>

                                        </Form.Group>
                                        
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


export default AddFacilityPopup;