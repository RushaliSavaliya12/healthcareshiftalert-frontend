import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { RoutesPath } from '../../App';



const InputGroupForm = (props) => {

    return (
        <Form.Group className="form-group" controlId={props.inputId}>
            <Form.Label className="">{props.inputLabel}</Form.Label>
            <Form.Control type={props.inputType} placeholder={props.inputPlaceholder} name={props.inputName} value={props.inputValue}/>
        </Form.Group>
    )

}


export default InputGroupForm;