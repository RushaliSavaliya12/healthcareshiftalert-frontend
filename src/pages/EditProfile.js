import React, { useState, useEffect } from 'react';
import LeftPanel from "../components/LeftPanel";
import HeaderMobile from "../components/HeaderMobile";
import ManageTopHeaderSection from "../components/manage-user/ManageTopHeaderSection";
import EditProfileSection from '../components/edit-profile/EditProfileSection';
import { Row, Col } from 'react-bootstrap';

const EditProfile = () => {

    return (
        <>
            <main className='app-main'>
                <HeaderMobile />
                <section className="main-section dashboard-section blue-bg-section edit-profile-section">
                    <div className="section-wrap">
                        <Row className="dashboard-row-main">
                            <LeftPanel />
                            <Col lg="9" className="right-content-col grey-bg-col">
                                <ManageTopHeaderSection pageTitle="Edit Profile"/>
                                <EditProfileSection />
                            </Col>
                        </Row>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default EditProfile;