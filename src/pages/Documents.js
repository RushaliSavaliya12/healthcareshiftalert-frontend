import React, { useState, useEffect } from 'react';
import LeftPanel from "../components/LeftPanel";
import HeaderMobile from "../components/HeaderMobile";
import ManageTopHeaderSection from "../components/manage-user/ManageTopHeaderSection";
import DocumentsMainSection from '../components/documents/DocumentsMainSection';
import { Row, Col } from 'react-bootstrap';

const Documents = () => {

    return (
        <>
            <main className='app-main'>
                <HeaderMobile />
                <section className="main-section dashboard-section blue-bg-section document-section">
                    <div className="section-wrap">
                        <Row className="dashboard-row-main">
                            <LeftPanel />
                            <Col lg="9" className="right-content-col grey-bg-col">
                                <ManageTopHeaderSection pageTitle="Documents"/>
                                <DocumentsMainSection />
                            </Col>
                        </Row>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default Documents;