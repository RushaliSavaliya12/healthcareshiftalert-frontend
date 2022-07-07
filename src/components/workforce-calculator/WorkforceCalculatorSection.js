import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import MessageNotice from '../inner-components/MessageNotice';
import { RoutesPath } from '../../App';


const WorkforceCalculatorSection = (props) => {

    const WorkforceCalculatorData = [
        {
            costLabel: "Hourly pay rate",
        },
        {
            costLabel: "Burden",
        },
        {
            costLabel: "Employee Benefits",
        },
        {
            costLabel: "HR Resources",
        }
    ]

    return (
        <>
            <div className="workforce-calc-wrapper">
                <MessageNotice noticeText="Enter the known costs below. Any inputs that are not entered will be calculated based on national averages. *" />
                <div className='workforce-calculator'>
                    <div className="workforce-calc-single">
                        <div className="workforce-calc-inner">
                            <Row className="calc-top-row justify-content-end">
                                <Col md={6} className="cost-col">
                                    <span>Direct Cost</span>
                                </Col>
                                <Col md={6} className="cost-col">
                                    <span>EmployBridge Cost</span>
                                </Col>
                            </Row>
                            {WorkforceCalculatorData.map((val, index) =>
                                <Row className="calc-main-row" key={index}>
                                    <div className='cost-label'>
                                        <span>{val.costLabel}</span>
                                    </div>
                                    <Col md={6} className="cost-col">
                                        <input type="number" name='number' />
                                    </Col>
                                    <Col md={6}>
                                        <input type="number" name='number' />
                                    </Col>
                                </Row>
                            )}
                            <div className='calculate-btn text-center'>
                                <button type='button' className='btn btn-primary'>Calculate Results</button>
                            </div>

                        </div>
                    </div>
                    <div className="workforce-calc-single">
                        <div className="workforce-calc-inner">
                            <Row className="calc-top-row justify-content-end">
                                <Col md={6} className="cost-col">
                                    <span>Direct Cost</span>
                                </Col>
                                <Col md={6} className="cost-col">
                                    <span>EmployBridge Cost</span>
                                </Col>
                            </Row>

                            <Row className="calc-main-row">
                                <div className='cost-label'>
                                    <span>Total cost per hour</span>
                                </div>
                                <Col md={6} className="cost-col">
                                    <input type="number" name='number' />
                                </Col>
                                <Col md={6}>
                                    <input type="number" name='number' />
                                </Col>
                            </Row>
                            <Row className="calc-main-row">
                                <div className='cost-label'>
                                    <span>Savings (Per hour)</span>
                                </div>
                                <Col md={12} className="cost-col">
                                    <input type="number" name='number' />
                                </Col>

                            </Row>
                            <Row className="calc-main-row">
                                <div className='cost-label'>
                                    <span>Cost savings % (Per hour)</span>
                                </div>
                                <Col md={12} className="cost-col">
                                    <input type="number" name='number' />
                                </Col>
                                <span>To calculate the annual savings impact of a variable workforce, enter the number of employees to be converted below.</span>
                            </Row>
                            <Row className="calc-main-row">
                                <div className='cost-label'>
                                    <span>Total potential annual savings</span>
                                </div>
                                <Col md={12} className="cost-col">
                                    <input type="number" name='number' />
                                </Col>

                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkforceCalculatorSection;