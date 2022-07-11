import React, { useState, useEffect } from 'react';
import LeftPanel from "../components/LeftPanel";
import HeaderMobile from "../components/HeaderMobile";
import ManageTopHeaderSection from "../components/manage-user/ManageTopHeaderSection";
import DocumentsDetailSection from '../components/documents/DocumentsDetailSection';
import { Row, Col } from 'react-bootstrap';

const DocumentDetails = () => {

    return (
        <>
            <main className='app-main'>
                <HeaderMobile />
                <section className="main-section dashboard-section blue-bg-section document-detail-section">
                    <div className="section-wrap">
                        <Row className="dashboard-row-main">
                            <LeftPanel />
                            <Col lg="9" className="right-content-col grey-bg-col">
                                <ManageTopHeaderSection pageTitle="Documents"/>
                                <DocumentsDetailSection />
                            </Col>
                        </Row>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default DocumentDetails;