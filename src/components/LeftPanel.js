import React from 'react';
import { Col, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { RoutesPath } from '../App';

const LeftPanel = () => {
    const leftPanelMenuData = [
        {
            LinkUrl: RoutesPath.dashboard,
            imageWhite: "assets/images/ico/panel-icon/dashboard.svg",
            imageBlue: "assets/images/ico/panel-icon/dashboard-filled.svg",
            menuText: "Dashboard"
        },
        {
            LinkUrl: "/scheduling",
            imageWhite: "assets/images/ico/panel-icon/calendar.svg",
            imageBlue: "assets/images/ico/panel-icon/calendar-filled.svg",
            menuText: "Scheduling"
        },
        {
            LinkUrl: "/timesheets",
            imageWhite: "assets/images/ico/panel-icon/timesheets.svg",
            imageBlue: "assets/images/ico/panel-icon/timesheets-filled.svg",
            menuText: "Timesheets"
        },
        {
            LinkUrl: "/feedback-ratings",
            imageWhite: "assets/images/ico/panel-icon/star.svg",
            imageBlue: "assets/images/ico/panel-icon/star-filled.svg",
            menuText: "FeedBack & Ratings"
        },
        {
            LinkUrl: RoutesPath.manageUser,
            imageWhite: "assets/images/ico/panel-icon/user.svg",
            imageBlue: "assets/images/ico/panel-icon/user-filled.svg",
            menuText: "Manage users"
        }, {
            LinkUrl: "/statistics",
            imageWhite: "assets/images/ico/panel-icon/graph.svg",
            imageBlue: "assets/images/ico/panel-icon/graph-filled.svg",
            menuText: "Statistics"
        },
        {
            LinkUrl: RoutesPath.documents,
            imageWhite: "assets/images/ico/panel-icon/document.svg",
            imageBlue: "assets/images/ico/panel-icon/document-filled.svg",
            menuText: "Documents"
        },
        {
            LinkUrl: "/add-paycard",
            imageWhite: "assets/images/ico/panel-icon/paycard.svg",
            imageBlue: "assets/images/ico/panel-icon/paycard-filled.svg",
            menuText: "Add Paycard"
        },
        {
            LinkUrl: RoutesPath.notes,
            imageWhite: "assets/images/ico/panel-icon/notes.svg",
            imageBlue: "assets/images/ico/panel-icon/notes-filled.svg",
            menuText: "Notes"
        },
        {
            LinkUrl: RoutesPath.workforceCalculator,
            imageWhite: "assets/images/ico/panel-icon/calculator.svg",
            imageBlue: "assets/images/ico/panel-icon/calculator.svg",
            menuText: "Workforce Calculator"
        }
    ]
    return (
        <>
            <Col lg={3} className="left-panel-col left-panel-main" id="mobileMenu">
                <div className='left-panel-wrap'>
                    <Navbar.Brand href={RoutesPath.dashboard}>
                        <figure>
                            <img src='assets/images/ShiftAlerts_Logo_white.svg' alt="App Logo" />
                        </figure>
                    </Navbar.Brand>
                    <Navbar.Collapse id="dashboard-nav">
                        <Nav>
                            {leftPanelMenuData.map((val, index) =>
                                <LinkContainer to={val.LinkUrl} key={index}>
                                    <Nav.Link>
                                        <span className='icon-wrap'>
                                            <img src={val.imageWhite} alt='menu Icon' className="default-icon" />
                                            <img src={val.imageBlue} alt='menu Icon' className="active-icon" />
                                        </span>
                                        <span className="text-wrap">{val.menuText}</span>
                                    </Nav.Link>
                                </LinkContainer>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                    <div className='profile-wrapper'>
                        <div className='profile-image-wrapper'>
                            <img src='assets/images/user-image.png' alt="profile-image" />
                        </div>
                        <div className="profile-name">
                            <h6>Hi, Mellani</h6>
                            <span>Admin</span>
                        </div>
                        <div className="logout-btn">
                            <button id='logout-btn' className="btn-white">
                                <i className="icon-logout"></i>
                            </button>
                        </div>
                        <button className='close-panel-btn close-btn' id="MenucloseBtn"></button>
                    </div>
                    <div className="logout-btn mobile-logout-btn">
                        <button id='logout-btn' className="btn-white">
                            <i className="icon-logout"></i>
                            <span className='logout-text'>Log out</span>
                        </button>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default LeftPanel;