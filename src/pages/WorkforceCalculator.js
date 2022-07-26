import React from "react";
import LeftPanel from "../components/LeftPanel";
import HeaderMobile from "../components/HeaderMobile";
import WorkforceTopHeaderSection from "../components/manage-user/ManageTopHeaderSection";
import WorkforceCalculatorSection from "../components/workforce-calculator/WorkforceCalculatorSection";
import { Row, Col } from 'react-bootstrap';

const WorkforceCalculator = () => {
    return (
        <>
            <main className='app-main'>
                <HeaderMobile />
                <section className="main-section dashboard-section blue-bg-section manage-user-section">
                    <div className="section-wrap">
                        <Row className="dashboard-row-main">
                            <LeftPanel />
                            <Col lg="9" className="right-content-col grey-bg-col">
                                <WorkforceTopHeaderSection pageTitle="Workforce calculator"/>
                                <WorkforceCalculatorSection />
                            </Col>
                        </Row>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default WorkforceCalculator;