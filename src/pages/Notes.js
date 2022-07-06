import React from "react";
import LeftPanel from "../components/LeftPanel";
import HeaderMobile from "../components/HeaderMobile";
import NotesTopHeaderSection from "../components/notes/NotesTopHeaderSection";
import NotesMainSection from "../components/notes/NotesMainSection";

import { Row, Col } from 'react-bootstrap';

const Notes = () => {
    return (
        <>
            <main className='app-main'>
                <HeaderMobile />
                <section className="main-section dashboard-section blue-bg-section manage-user-section">
                    <div className="section-wrap">
                        <Row className="dashboard-row-main">
                            <LeftPanel />
                            <Col lg="9" className="right-content-col grey-bg-col">
                                <NotesTopHeaderSection pageTitle="Notes"/>
                                <NotesMainSection />
                            </Col>
                        </Row>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default Notes;