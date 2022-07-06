import React, { useState, useEffect } from 'react';
import { Row, Col, Tab, Nav, Accordion, Card, CustomToggle, } from 'react-bootstrap';
import SearchInput from '../inner-components/SearchInput';

const NotesMainSection = (props) => {
    const [key, setKey] = useState('home');

    const notesData =
        [
            {
                id: 1,
                notesTitle: "Lorem ipsum",
                notesDate: "May 19th",
                notesFullDate: "19 May 2022",
                FullNoteTime: "11:48 am",
                FullNoteDatap1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim.",
                FullNoteDatap2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
                FullNoteDatap3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
            },
            {
                id: 2,
                notesTitle: "Lorem ipsum",
                notesDate: "May 19th",
                notesFullDate: "19 May 2022",
                FullNoteTime: "11:48 am",
                FullNoteDatap1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim.",
                FullNoteDatap2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
                FullNoteDatap3: "",
            },
            {
                id: 3,
                notesTitle: "Lorem ipsum",
                notesDate: "May 19th",
                notesFullDate: "19 May 2022",
                FullNoteTime: "11:48 am",
                FullNoteDatap1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim.",
                FullNoteDatap2: "",
                FullNoteDatap3: "",
            },
            {
                id: 4,
                notesTitle: "Lorem ipsum",
                notesDate: "May 19th",
                notesFullDate: "19 May 2022",
                FullNoteTime: "11:48 am",
                FullNoteDatap1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim.",
                FullNoteDatap2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
                FullNoteDatap3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
            },
            {
                id: 5,
                notesTitle: "Lorem ipsum",
                notesDate: "May 19th",
                notesFullDate: "19 May 2022",
                FullNoteTime: "11:48 am",
                FullNoteDatap1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim.",
                FullNoteDatap2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
                FullNoteDatap3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
            },
            {
                id: 6,
                notesTitle: "Lorem ipsum",
                notesDate: "May 19th",
                notesFullDate: "19 May 2022",
                FullNoteTime: "11:48 am",
                FullNoteDatap1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim.",
                FullNoteDatap2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
                FullNoteDatap3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
            },
            {
                id: 7,
                notesTitle: "Lorem ipsum",
                notesDate: "May 19th",
                notesFullDate: "19 May 2022",
                FullNoteTime: "11:48 am",
                FullNoteDatap1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim.",
                FullNoteDatap2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
                FullNoteDatap3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
            },
            {
                id: 8,
                notesTitle: "Lorem ipsum",
                notesDate: "May 19th",
                notesFullDate: "19 May 2022",
                FullNoteTime: "11:48 am",
                FullNoteDatap1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim.",
                FullNoteDatap2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
                FullNoteDatap3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
            },
            {
                id: 9,
                notesTitle: "Lorem ipsum",
                notesDate: "May 19th",
                notesFullDate: "19 May 2022",
                FullNoteTime: "11:48 am",
                FullNoteDatap1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim.",
                FullNoteDatap2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
                FullNoteDatap3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
            },
            {
                id: 10,
                notesTitle: "Lorem ipsum",
                notesDate: "May 19th",
                notesFullDate: "19 May 2022",
                FullNoteTime: "11:48 am",
                FullNoteDatap1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim.",
                FullNoteDatap2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
                FullNoteDatap3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla bibendum sapien vel dolor in vulputate consequat. Tincidunt eget pellentesque metus sed enim. ",
            },

        ]


    return (
        <>
            <div className="notes-main-wrapper">
                <div className="notes-tab-wrapper">

                    <div className='notes-tab'>

                        <Tab.Container id="notesTab" defaultActiveKey="1">
                            <Row>
                                <Col md={4} className="notes-tab-btn-col">
                                    <div className='col-inner'>
                                        <div className="notes-top-header">
                                            <div className="top-header-inner">
                                                <SearchInput />
                                                <button className='btn-square btn delete-btn'>
                                                    <i className='icon-trash'></i>
                                                </button>
                                            </div>

                                        </div>
                                        <Nav variant="pills" className="flex-column">
                                            {notesData.map((val, index) =>
                                                <Nav.Item key={val.id}>
                                                    <Nav.Link eventKey={val.id}>
                                                        <div className="notes-tab-header">
                                                            <h6>{val.notesTitle}</h6>
                                                            <span className='note-sub-text'>
                                                                <span>{val.FullNoteDatap1}</span>
                                                                <span className='date'>{val.notesDate}</span>
                                                            </span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            )}
                                        </Nav>
                                    </div>
                                </Col>
                                <Col md={8} className="notes-tab-content-col">
                                    <Tab.Content>
                                        <Accordion defaultActiveKey="1">
                                            {notesData.map((val, index) =>
                                                <Tab.Pane eventKey={val.id} key={val.id}>
                                                    <Accordion.Item eventKey={val.id}>

                                                        <Accordion.Header>
                                                            <div className="notes-tab-header">
                                                                <h6>{val.notesTitle}</h6>
                                                                <span className='note-sub-text'>
                                                                    <span>{val.FullNoteDatap1}</span>
                                                                    <span className='date'>{val.notesDate}</span>
                                                                </span>
                                                            </div>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className='notes-tab-content'>
                                                                <button className='btn btn-primary edit-note-btn'><i className='icon-edit'></i>Edit</button>
                                                                <div className='view-note'>
                                                                    <span className='date-text'>Created {val.notesFullDate} at {val.FullNoteTime}</span>
                                                                    <h4 className='h2'>{val.notesTitle}</h4>
                                                                    <div className='notes-tab-text'>
                                                                        <p>{val.FullNoteDatap1}</p>
                                                                        <p>{val.FullNoteDatap2}</p>
                                                                        <p>{val.FullNoteDatap3}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='edit-note d-none'>
                                                                    <form>
                                                                        <div className='form-inner'>
                                                                            <div className='form-group'>
                                                                                <label className='form-label'>Title</label>
                                                                                <textarea>{val.notesTitle}</textarea>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>

                                                            </div>
                                                        </Accordion.Body>

                                                    </Accordion.Item>
                                                </Tab.Pane>
                                            )}
                                        </Accordion>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesMainSection;