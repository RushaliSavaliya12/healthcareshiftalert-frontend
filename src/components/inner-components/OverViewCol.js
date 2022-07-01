import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';





const OverViewCol = () => {

    const OverViewColShiftData = [
        {
            overviewShiftText: "Total Shift",
            overviewShiftCount: "42",
            overviewShiftIcon: "assets/images/ico/overview-icon/total-shift-icon.svg"
        },
        {
            overviewShiftText: "No Shows",
            overviewShiftCount: "0",
            overviewShiftIcon: "assets/images/ico/overview-icon/no-shows-icon.svg"
        },
        {
            overviewShiftText: "Cancellation",
            overviewShiftCount: "1",
            overviewShiftIcon: "assets/images/ico/overview-icon/cancellation-icon.svg"
        },
        {
            overviewShiftText: "Shift Request",
            overviewShiftCount: "3",
            overviewShiftIcon: "assets/images/ico/overview-icon/shift-request-icon.svg"
        },
        {
            overviewShiftText: "Upcoming Shift",
            overviewShiftCount: "5",
            overviewShiftIcon: "assets/images/ico/overview-icon/upcoming-shift-icon.svg"
        },
        {
            overviewShiftText: "Pending Logs",
            overviewShiftCount: "2",
            overviewShiftIcon: "assets/images/ico/overview-icon/pending-log-icon.svg"
        }
    ]

    return (
        <div className='overview-wrap'>
            <h2 className='section-title h5'>Overview</h2>
            <div className='overview-shift-list row'>
                {OverViewColShiftData.map((val, index) =>
                    <Col sm={6} className='overview-shift-single' key={index}>
                        <div className='shift-col-inner'>
                            <div className="icon-wrap">
                                <img src={val.overviewShiftIcon} alt=""/>
                            </div>  
                            <div className='shift-data'>
                                <span className='text-wrap'>{val.overviewShiftText}</span>
                                <span className='count-wrap'>{val.overviewShiftCount}</span>
                            </div>
                        </div>
                    </Col>

                )}
            </div>
        </div>

    )

}


export default OverViewCol;