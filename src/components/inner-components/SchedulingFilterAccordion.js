import React, { useState, useEffect } from 'react';
import { Accordion, Form } from 'react-bootstrap';
import { RoutesPath } from '../../App';

const SchedulingFilterAccordion = () => {
    const SchedulingFilterData = [
        {
            itemlabel: "CNA",
        },
        {
            itemlabel: "RN",
        },
        {
            itemlabel: "LPN",
        },
        {
            itemlabel: "STNA",
        },
        {
            itemlabel: "RN/LPN",
        },
        {
            itemlabel: "STNA/CNA",
        },
    ]

    return (
        <>
            <div className="filter-accrodion village-accordion">
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Filters</Accordion.Header>
                        <Accordion.Body>
                            <div className="checkbox-filter cus-col-2">
                                {SchedulingFilterData.map((val, index) =>
                                    <div className="form-group checkbox-single" key={index}>
                                        <div className='custom-checkbox-wrapper'>
                                            <Form.Control type="checkbox" />
                                            <span>{val.itemlabel}</span>
                                            <span className="checkmark"></span>
                                        </div>
                                    </div>
                                )}


                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </>
    )
}

export default SchedulingFilterAccordion;