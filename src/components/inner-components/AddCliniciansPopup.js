import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Button, Form, Row, Col, Modal } from 'react-bootstrap';
import InputGroupForm from './InputGroupForm';
import ImageUploadInput from './ImageUploadInput';
import DateofBirthInput from './DateofBirthInput';
import CustomDropdown from './CustomDropdown';
import DatePicker from "react-multi-date-picker";
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

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (

        <div className="add-user-pop-wrap">
            <Button className="border-btn" onClick={handleShow}><i className='icon-plus'></i> Add Clinicians</Button>
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
                                        <Form.Group className="form-group" controlId="FirstName">
                                            <Form.Label className="">Firstname</Form.Label>
                                            <Form.Control type="text" placeholder="Text here" name="FirstName" {...register("FirstName", {
                                                required: true,
                                                maxLength: 50,
                                                minLength: 3,
                                            })} />
                                            <span className="error-message">{errors.FirstName?.type === 'required' && "enter Firstname"}
                                                {errors.FirstName?.type === 'maxLength' && "It accepts maximum 50 characters"}
                                                {errors.FirstName?.type === 'minLength' && "enter minimum 3 characters"}</span>

                                        </Form.Group>

                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="form-group" controlId="LastName">
                                            <Form.Label className="">Lastname</Form.Label>
                                            <Form.Control type="text" placeholder="Text here" name="LastName" {...register("LastName", {
                                                required: true,
                                                maxLength: 50,
                                                minLength: 3,
                                            })} />
                                            <span className="error-message">{errors.LastName?.type === 'required' && "enter Lastname"}
                                                {errors.LastName?.type === 'maxLength' && "It accepts maximum 50 characters"}
                                                {errors.LastName?.type === 'minLength' && "enter minimum 3 characters"}</span>

                                        </Form.Group>

                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group date-of-birth-input">
                                            <label className='form-label'>Date of birth</label>
                                            <DatePicker format="MM/DD/YYYY" placeholder="mm/dd/yyyy" className='form-control' {...register("dateBirth", {
                                                required: true,
                                            })} />
                                            <span className="error-message">{errors.dateBirth?.type === 'required' && "select date of birth"}</span>
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="form-group" controlId="ContactNumber">
                                            <Form.Label className="">Contact Number</Form.Label>
                                            <Form.Control type="number" placeholder="Text here" name="ContactNumber" {...register("ContactNumber", {
                                                maxLength: 20,
                                                minLength: 10,
                                            })} />
                                            <span className="error-message">{errors.ContactNumber?.type === 'maxLength' && "It accepts maximum 20 characters"}
                                                {errors.ContactNumber?.type === 'minLength' && "enter minimum 10 characters"}</span>

                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="form-group" controlId="Position">
                                            <Form.Label className="">Position</Form.Label>
                                            <Form.Control type="text" placeholder="Text here" name="Position" {...register("Position", {
                                                required: true,
                                                maxLength: 50,
                                                minLength: 3,
                                            })} />
                                            <span className="error-message">{errors.Position?.type === 'required' && "enter Position"}
                                                {errors.Position?.type === 'maxLength' && "It accepts maximum 50 characters"}
                                                {errors.Position?.type === 'minLength' && "enter minimum 3 characters"}</span>

                                        </Form.Group>

                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="form-group" controlId="CliniciansRole">
                                            <Form.Label className="">Role</Form.Label>
                                            <Form.Control type="text" placeholder="Text here" name="CliniciansRole" {...register("CliniciansRole", {
                                                required: true,
                                                maxLength: 50,
                                                minLength: 3,
                                            })} />
                                            <span className="error-message">{errors.CliniciansRole?.type === 'required' && "enter Role"}
                                                {errors.CliniciansRole?.type === 'maxLength' && "It accepts maximum 50 characters"}
                                                {errors.CliniciansRole?.type === 'minLength' && "enter minimum 3 characters"}</span>

                                        </Form.Group>
                                        
                                    </Col>
                                    <Col md={12}>
                                        <div className='form-group'>
                                            <label className='form-label'>Job Sites</label>
                                            <CustomDropdown optionData={JobSitesData} {...register("jobSites")}/>
                                            <span className="error-message">{errors.CliniciansRole?.type === 'required' && "Select Job Sites"}</span>
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