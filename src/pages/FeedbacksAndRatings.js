import React from "react";
import LeftPanel from "../components/LeftPanel";
import HeaderMobile from "../components/HeaderMobile";
import FeedbacksTopHeaderSection from "../components/feedbacks-and-ratings/FeedbacksTopHeaderSection";
import FeedbacksTopFilterSection from "../components/feedbacks-and-ratings/FeedbacksTopFilterSection";
import { Row, Col } from 'react-bootstrap';
import '../assets/css/Custom.css'

const FeedbacksAndRatings = () => {
    return (
        <>
            <main className='app-main'>
                <HeaderMobile />
                <section className="main-section dashboard-section flex-table-section blue-bg-section">
                    <div className="section-wrap">
                        <Row className="dashboard-row-main">
                            <LeftPanel />
                            <Col lg="9" className="right-content-col right-content-col-with-banner grey-bg-col">
                                <FeedbacksTopHeaderSection />
                                <FeedbacksTopFilterSection />
                            </Col>
                        </Row>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default FeedbacksAndRatings;