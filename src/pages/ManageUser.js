import React, { useState, useEffect } from 'react';
import LeftPanel from "../components/LeftPanel";
import HeaderMobile from "../components/HeaderMobile";
import ManageTopHeaderSection from "../components/manage-user/ManageTopHeaderSection";
import ManageUserTopFilterSection from "../components/manage-user/ManageUserTopFilterSection";
import TabRelatedTitleChange from '../components/inner-components/TabRelatedTitleChange';
import { Row, Col } from 'react-bootstrap';

const ManageUser = () => {

    useEffect(() => {
        TabRelatedTitleChange();
    });

    return (
        <>
            <main className='app-main'>
                <HeaderMobile />
                <section className="main-section dashboard-section blue-bg-section manage-user-section">
                    <div className="section-wrap">
                        <Row className="dashboard-row-main">
                            <LeftPanel />
                            <Col lg="9" className="right-content-col grey-bg-col">
                                <ManageTopHeaderSection pageTitle="Manage Facilities"/>
                                <ManageUserTopFilterSection />
                            </Col>
                        </Row>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default ManageUser;