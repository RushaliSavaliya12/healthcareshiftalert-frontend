import React from "react";
import LeftPanel from "../components/LeftPanel";
import HeaderMobile from "../components/HeaderMobile";
import SchedulingTopHeaderSection from "../components/scheduling/SchedulingTopHeaderSection";
import SchedulingMainSection from "../components/scheduling/SchedulingMainSection";
import { Row, Col } from 'react-bootstrap';

const Scheduling = () => {
    return (
        <>
            <main className='app-main'>
                <HeaderMobile />
                <section className="main-section dashboard-section blue-bg-section">
                    <div className="section-wrap">
                        <Row className="dashboard-row-main">
                            <LeftPanel />
                            <Col lg="9" className="right-content-col right-content-col-with-banner grey-bg-col">
                                <SchedulingTopHeaderSection/>
                                <SchedulingMainSection />
                            </Col>
                        </Row>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default Scheduling;