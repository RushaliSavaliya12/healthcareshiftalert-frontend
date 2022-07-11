import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AllCustomIcon from '../../JsonDataFile/AllCustomIcon';
import CredentialTable from '../inner-components/CredentialTable';
import { RoutesPath } from '../../App';
import { Row, Col } from 'react-bootstrap';


const DocumentsDetailSection = (props) => {

    const CliniciansData = [
        {
            svgIcon: AllCustomIcon.iconCalender,
            dataText: "DOB: 12/04/1990",
        },
        {
            svgIcon: AllCustomIcon.iconMap,
            dataText: "San Fransico, USA",
        },
        {
            svgIcon: AllCustomIcon.iconCall,
            dataText: "1234567890",
        },
        {
            svgIcon: AllCustomIcon.iconEnvelop,
            dataText: "camille@ondek.com",
        }
    ]

    return (
        <div className='document-detail-wrapper'>
            <div className='edit-user-wrapper'>
                <div className='user-header'>
                    <Link to={RoutesPath.documents} className='back-btn' id="UserbackBtn">
                        <i className='icon-Back-arrow'></i>
                    </Link>
                    <h6 className='poc-name-title'>Camille Moreno</h6>
                </div>
                <div className='edit-user'>
                    <div className="edit-user-top">
                        <div className='user-image'>
                            <img src='assets/images/edit-clinicians-profile.png' />
                        </div>
                        <div className="edit-user-form document-details-wrap">
                            <div className='user-header'>
                                <h6 className='h5'>Camille Moreno</h6>
                                <button className='btn border-btn'>
                                    <i className='icon-message-solid'></i>
                                    Message
                                </button>
                                <div className="sub-header">
                                    <span className='sub-text'>RN Nurse, Bristol Village</span>
                                    <div className='rate-feedback-text'>
                                        <div className="rate-text">
                                            {AllCustomIcon.iconStarSolid}
                                            <span className='rating-text'>4.8</span>
                                        </div>
                                        <span className='feedback-count-text'>(29 feedbacks)</span>
                                    </div>
                                </div>
                            </div>
                            <div className='document-detail-row'>
                                <Row>
                                    {CliniciansData.map((val, index) =>
                                        <Col md={6} className="detail-col">
                                            <div className='col-inner'>
                                                <div className="detail-text">
                                                    {val.svgIcon}
                                                    <span>{val.dataText}</span>
                                                </div>
                                            </div>
                                        </Col>
                                    )}

                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className='credential-wrapper'>
                        <h6 className='table-title'>Credentials</h6>
                        <div className="credential-table-wrapper">
                            <div className="table-wrapper table-responsive">
                                <CredentialTable />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DocumentsDetailSection;