import React from "react";
import LeftPanel from "../components/LeftPanel";
import HeaderMobile from "../components/HeaderMobile";
import ManageTopHeaderSection from "../components/manage-user/ManageTopHeaderSection";
import ManageUserEditUserSection from "../components/manage-user/ManageUserEditUserSection";
import EditClinicians from "../components/inner-components/EditClinicians";
import { Row, Col } from 'react-bootstrap';

const ManageCliniciansEdit = () => {
    return (
        <>
            <main className='app-main'>
                <HeaderMobile />
                <section className="main-section dashboard-section blue-bg-section user-edit-section">
                    <div className="section-wrap">
                        <Row className="dashboard-row-main">
                            <LeftPanel />
                            <Col lg="9" className="right-content-col grey-bg-col">
                                <ManageTopHeaderSection pageTitle="Manage Clinicians"/>
                                <ManageUserEditUserSection userTypeData={<EditClinicians />}/>
                            </Col>
                        </Row>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default ManageCliniciansEdit;