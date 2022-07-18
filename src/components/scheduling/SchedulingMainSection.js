import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import VillageCommunityDropdown from '../inner-components/VillageCommunityDropdown';
import ShiftRequestpopup from '../inner-components/ShiftRequestpopup';
import SchedulingFilterAccordion from '../inner-components/SchedulingFilterAccordion';
import ShiftTemplateAccordion from '../inner-components/ShiftTemplateAccordion';
import SchedulingCalenderSection from './SchedulingCalenderSection';
import { RoutesPath } from '../../App';


const SchedulingMainSection = () => {
    return (
        <>
            <div className='scheduling-main-section-wrap'>
                <Row className="scheduling-main-row">
                    <Col lg={9} className="schedule-calender-col">
                        <div className='col-inner'>
                            <SchedulingCalenderSection />
                        </div>
                    </Col>
                    <Col lg={3} className="schedule-right-col">
                        <div className='col-inner'>
                            <VillageCommunityDropdown />
                            <ShiftRequestpopup />
                            <SchedulingFilterAccordion />
                            <ShiftTemplateAccordion />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default SchedulingMainSection;