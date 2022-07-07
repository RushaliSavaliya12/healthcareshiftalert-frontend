import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Notification from '../inner-components/Notification';
import MessagesButton from '../inner-components/MessagesButton';
import { RoutesPath } from '../../App';


const TimesheetsTopHeaderSection = () => {
    return (
        <>
            <div className='dashboard-top-wrapper' style={{ backgroundImage: `url("/assets/images/timesheets-banner.jpg")`  }}>
                <Row>
                    <Col xl={7} lg={6} className="left-col-wrap">
                        <h1 className='h2 page-title'>Timesheets</h1>
                    </Col>
                    <Col xl={5} lg={6} className="right-col-wrap top-dropdown-col">
                        <div className='col-inner'>
                            <Notification />
                            <MessagesButton />
                        </div>
                    </Col>
                    <Col lg={12} className="full-col-wrap text-center">
                        <h4 className='h4'>Bristol Village</h4>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default TimesheetsTopHeaderSection;