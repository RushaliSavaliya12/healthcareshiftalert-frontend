import React from "react";
import LeftPanel from "../components/LeftPanel";
import HeaderMobile from "../components/HeaderMobile";
import TimesheetsTopHeaderSection from "../components/timesheets/TimesheetsTopHeaderSection";
import TimesheetsTopFilterSection from "../components/timesheets/TimesheetsTopFilterSection";
import { Row, Col } from 'react-bootstrap';
import '../assets/css/Custom.css'

const Timesheets = () => {
    return (
        <>
            <main className='app-main'>
                <HeaderMobile />
                <section className="main-section dashboard-section blue-bg-section">
                    <div className="section-wrap">
                        <Row className="dashboard-row-main">
                            <LeftPanel />
                            <Col lg="9" className="right-content-col right-content-col-with-banner grey-bg-col">
                                <TimesheetsTopHeaderSection />
                                <TimesheetsTopFilterSection />
                            </Col>
                        </Row>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default Timesheets;