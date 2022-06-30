import React from "react";
import LeftPanel from "../components/LeftPanel";
import DashboardTopSection from "../components/dashboard/DashboardTopSection";
import DashboardMiddleSection from "../components/dashboard/DashboardMiddleSection";
import DashboardTableSection from "../components/dashboard/DashboardTableSection";
import { Row, Col } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <>
            <main className='app-main'>
                <section className="main-section dashboard-section blue-bg-section">
                    <div className="section-wrap">
                        <Row className="dashboard-row-main">
                            <LeftPanel />
                            <Col lg="9" className="right-content-col grey-bg-col">
                                <DashboardTopSection/>
                                <DashboardMiddleSection />
                                <DashboardTableSection />
                            </Col>
                        </Row>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default Dashboard;