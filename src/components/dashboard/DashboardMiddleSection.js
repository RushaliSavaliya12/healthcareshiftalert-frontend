import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import OverViewCol from '../inner-components/OverViewCol';
import DayShiftSchedule from '../inner-components/DayShiftSchedule';
import { RoutesPath } from '../../App';


const DashboardMiddleSection = () => {
    return (
        <>
            <div className='dashboard-middle-wrapper'>
                <Row>
                    <Col lg={6} className="left-col-wrap overview-col">
                        <OverViewCol />
                    </Col>
                    <Col lg={6} className="right-col-wrap calender-shift-col">
                        <DayShiftSchedule />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default DashboardMiddleSection;