import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomDropdown from './CustomDropdown';
import Notification from './Notification';
import MessagesButton from './MessagesButton';

const FacilityOptions = [
    { value: 'bristol-village', label: 'Bristol Village' },
    { value: 'chillicothe-campus', label: 'Chillicothe Campus' },
    { value: 'first-community-village', label: 'First Community Village' },
    { value: 'toledo', label: 'Toledo' },
    { value: 'pembroke-pines', label: 'Pembroke Pines' },
    { value: 'orange', label: 'Orange' },
    { value: 'austin', label: 'Austin' },
    { value: 'test', label: 'Test' },
]

const TopFilterDropdownsCol = () => {
    return (
        <>
            <Col xl={5} lg={6} className="right-col-wrap top-dropdown-col">
                <div className='col-inner'>
                    <CustomDropdown optionData={FacilityOptions} />
                    <Notification />
                    <MessagesButton />
                </div>
            </Col>
        </>
    )
}

export default TopFilterDropdownsCol;