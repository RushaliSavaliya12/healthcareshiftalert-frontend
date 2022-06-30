import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomDropdown from '../inner-components/CustomDropdown';
import FilterByDate from '../inner-components/FilterByDate';
import RecentActivitiyTable from '../inner-components/RecentActivitiyTable';
import { RoutesPath } from '../../App';


const DashboardTableSection = () => {
    const FacilityOptions = [
        { value: 'all', label: 'All' },
        { value: 'success', label: 'Success' },
        { value: 'failed', label: 'Failed' },
        { value: 'processing', label: 'Processing' },
        { value: 'pending', label: 'Pending' }
    ]
    return (
        <>
            <div className='dashboard-bottom-wrapper dashboard-table-section'>
                <div className="table-top-wrapper">
                    <Row className="table-top-row">
                        <Col className="col-md-8 table-title-col">
                            <div className="col-inner">
                                <h2 className='h5 section-title'>Recent Activity</h2>
                                <div className='activity-dropdown'>
                                    <CustomDropdown optionData={FacilityOptions} />
                                </div>
                            </div>
                        </Col>
                        <Col className="col-md-4 calender-col">
                            <div className='col-inner'>
                                <div className="calender-filter">
                                    <FilterByDate />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="table-wrapper recent-activity-table">
                    <RecentActivitiyTable />
                </div>
            </div>
        </>
    )
}

export default DashboardTableSection;