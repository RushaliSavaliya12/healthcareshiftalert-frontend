import React, { useState, useEffect } from 'react';
import { Accordion, Form } from 'react-bootstrap';
import CreateTemplatePopup from './CreateTemplatePopup';
import { RoutesPath } from '../../App';

const ShiftTemplateAccordion = () => {
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
            <div className="filter-accrodion shift-template-accordion">
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <div className="header-custom">
                            <Accordion.Header>Shift Templates</Accordion.Header>
                            <CreateTemplatePopup />
                        </div>

                        <Accordion.Body>
                            <div className="shift-templates-list">
                                <ul>
                                    <li>
                                        <button className='btn btn-primary' type='button'>Template With Note</button>
                                    </li>
                                    <li>
                                        <button className='btn btn-primary' type='button'>RN Template</button>
                                    </li>
                                    <li>
                                        <button className='btn btn-primary' type='button'>LPN Template</button>
                                    </li>
                                </ul>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </>
    )
}

export default ShiftTemplateAccordion;