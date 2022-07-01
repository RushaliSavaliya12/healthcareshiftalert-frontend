import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import TopQuotes from '../inner-components/TopQuotes';
import TopFilterDropdownsCol from '../inner-components/TopFilterDropdownsCol';
import { RoutesPath } from '../../App';


const DashboardTopSection = () => {
    return (
        <>
            <div className='dashboard-top-wrapper'>
                <Row>
                    <Col xl={7} lg={6} className="left-col-wrap">
                        <TopQuotes />
                    </Col>

                    <TopFilterDropdownsCol />

                </Row>
            </div>
        </>
    )
}

export default DashboardTopSection;