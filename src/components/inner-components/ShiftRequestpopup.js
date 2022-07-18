import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AllCustomIcon from '../../JsonDataFile/AllCustomIcon';
import { RoutesPath } from '../../App';

const ShiftRequestpopup = (props) => {

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const requestData = [
        {
            requestTitle: "RN",
            requestDate: "May 8, 2022",
            requestTime: "6:00 AM - 2:00 PM",
            requestClinicians: "Covid Unit",
            color: "color-orange"
        },
        {
            requestTitle: "RN",
            requestDate: "May 8, 2022",
            requestTime: "6:00 AM - 2:00 PM",
            requestClinicians: "Covid Unit",
            color: "color-green"
        },
        {
            requestTitle: "RN",
            requestDate: "May 8, 2022",
            requestTime: "6:00 AM - 2:00 PM",
            requestClinicians: "Covid Unit",
            color: "color-green"
        },
    ]

    return (
        <>
            <div className="popup-wrapper">
                <Button className="border-btn" onClick={handleShow}>Shifts Request <span className='request-count'>2</span></Button>
                <Modal show={show} onHide={handleClose} className='shift-request-popup custom-popup'>
                    <Modal.Header closeButton>
                        <h5>Shifts Request</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='shift-request-list'>
                            {requestData.map((val, index) =>
                                <div className={`shift-request-single ${val.color}`} key={index}>
                                    <div className='request-inner'>
                                        <div className='title-wrap'>
                                            <h6>RN</h6>
                                            <span className="request-status">Pending</span>
                                        </div>
                                        <div className='shift-request-content'>
                                            <ul>
                                                <li>
                                                    <div className='label'>
                                                        {AllCustomIcon.iconClock}
                                                        <span>Time:</span>
                                                    </div>
                                                    <div className='data-wrap'>
                                                        <span>{val.requestDate}</span>
                                                        <span>{val.requestTime}</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='label'>
                                                        {AllCustomIcon.iconUser}
                                                        <span>Clinician:</span>
                                                    </div>
                                                    <div className='data-wrap'>
                                                        <span>{val.requestClinicians}</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='btn-wrap'>
                                            <button className='btn btn-red btn-small'>Decline</button>
                                            <button className='btn btn-primary btn-small'>Approve</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </Modal.Body>

                </Modal>
            </div>

        </>
    )
}

export default ShiftRequestpopup;