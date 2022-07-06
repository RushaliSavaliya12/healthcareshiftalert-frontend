import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Notification from '../inner-components/Notification';
import MessagesButton from '../inner-components/MessagesButton';
import { RoutesPath } from '../../App';


const NotesTopHeaderSection = (props) => {
    return (
        <>
            <div className='dashboard-top-wrapper notes-top-wrapper'>
                <Row>
                    <Col xl={7} lg={6} className="left-col-wrap">
                        <h1 className='h2 page-title'>{props.pageTitle}</h1>
                        <button className='btn border-btn add-note-btn'>
                            <i className='icon-plus'></i>Add new note
                        </button>
                    </Col>
                    <Col xl={5} lg={6} className="right-col-wrap top-dropdown-col">
                        <div className='col-inner'>
                            <Notification />
                            <MessagesButton />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default NotesTopHeaderSection;