import React, { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import { RoutesPath } from '../../App';

const VillageCommunityDropdown = () => {
    const VillageCommunityDropdownData = [
        {
            itemTitle:"Nurses Assigned in Facility",
            itemCount:"1 item"
        },
        {
            itemTitle:"Non-Allocated Schedules",
            itemCount:"6 items"
        },
        {
            itemTitle:"Allocated Schedules",
            itemCount:"5 items"
        }
    ]
    
    return (
        <>
            <div className="filter-accrodion village-accordion">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>First Community Village</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                {VillageCommunityDropdownData.map((val, index) =>
                                   <li key={index}>
                                    <h6>{val.itemTitle}</h6>
                                    <span>{val.itemCount} item</span>
                                   </li>
                                )}
                            </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </>
    )
}

export default VillageCommunityDropdown;