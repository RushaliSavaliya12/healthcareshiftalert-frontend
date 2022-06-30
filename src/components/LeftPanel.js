import React from 'react';
import { Col, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {RoutesPath} from '../App';

const LeftPanel = () => {
    const leftPanelMenuData = [
        {
            LinkUrl: RoutesPath.dashboard,
            imageWhite: "assets/images/ico/Dashboard-icon-white.svg",
            imageBlue: "assets/images/ico/dashboard-icon-blue.svg",
            menuText: "Dashboard"
        },
        {
            LinkUrl: "/scheduling",
            imageWhite: "assets/images/ico/Calendar-icon-white.svg",
            imageBlue: "assets/images/ico/Calendar-icon-blue.svg",
            menuText: "Scheduling"
        },
        {
            LinkUrl: "/timesheets",
            imageWhite: "assets/images/ico/Timesheets-icon-white.svg",
            imageBlue: "assets/images/ico/Timesheets-icon-blue.svg",
            menuText: "Timesheets"
        },
        {
            LinkUrl: "/feedback-ratings",
            imageWhite: "assets/images/ico/Star-icon-white.svg",
            imageBlue: "assets/images/ico/Star-icon-blue.svg",
            menuText: "FeedBack & Ratings"
        },
        {
            LinkUrl: "/manage-users",
            imageWhite: "assets/images/ico/Profile-user-icon-white.svg",
            imageBlue: "assets/images/ico/Profile-user-icon-blue.svg",
            menuText: "Manage users"
        }, {
            LinkUrl: "/statistics",
            imageWhite: "assets/images/ico/Statistic-icon-white.svg",
            imageBlue: "assets/images/ico/Statistics-icon-blue.svg",
            menuText: "Statistics"
        },
        {
            LinkUrl: "/documents",
            imageWhite: "assets/images/ico/Document-icon-white.svg",
            imageBlue: "assets/images/ico/Documents-icon-blue.svg",
            menuText: "Documents"
        },
        {
            LinkUrl: "/add-paycard",
            imageWhite: "assets/images/ico/Card-icon-white.svg",
            imageBlue: "assets/images/ico/Card-icon-blue.svg",
            menuText: "Add Paycard"
        },
        {
            LinkUrl: "/notes",
            imageWhite: "assets/images/ico/Note-icon-white.svg",
            imageBlue: "assets/images/ico/Note-icon-blue.svg",
            menuText: "Notes"
        },
        {
            LinkUrl: "/workforce-calculator",
            imageWhite: "assets/images/ico/Caculator-icon-white.svg",
            imageBlue: "assets/images/ico/Caculator-icon-blue.svg",
            menuText: "Workforce Calculator"
        }
    ]
    return (
        <>
            <Col lg={3} className="left-panel-col left-panel-main">
                <div className='left-panel-wrap'>
                    <Navbar.Brand href={RoutesPath.dashboard}>
                        <figure>
                            <img src='assets/images/healthcare-logo.svg' alt="App Logo" />
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
                                <img src="assets/images/ico/Logout-icon.svg"/>
                            </button>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default LeftPanel;