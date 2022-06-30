import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';

export default class DayShiftSchedule extends React.Component {
    render() {

        var DayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',];

        return (
            <div className='calender-wrapper schedule-shift-calender' id="shiftScheduleCalender">



                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridWeek"
                    titleFormat={{ month: 'long', year: 'numeric' }}
                    dayHeaderContent={
                        function (arg) {
                            // const dayName = date;
                            console.log(arg.date.getDate())
                            return (
                                <>
                                    <span className='day-name'>{DayNames[arg.date.getDay()]}</span>
                                    <span className='date'>{arg.date.getDate()}</span>
                                </>
                            )
                        }
                    }
                    dayHeaderFormat={{ day: 'numeric', weekday: 'short', }
                    }
                />
                <RenderScheduleContent />
            </div>

        )
    }
}

function RenderScheduleContent() {

    const renderscheduleData = {

        scheduleDate: "June 29, 2022",
        scheduleData: [
            {
                shiftStartTime: "8:00",
                shiftEndTime: "8:30",
                shiftUserImage: "assets/images/user-shift-image.png",
                shiftTypeText: "CNA",
                shiftUserName: "Alisa Jones"
            },
            {
                shiftStartTime: "6am",
                shiftEndTime: "6pm",
                shiftUserImage: "assets/images/user-shift-image.png",
                shiftTypeText: "LVN",
                shiftUserName: "Alisa Jones"
            },
            {
                shiftStartTime: "3:00",
                shiftEndTime: "4:30",
                shiftUserImage: "assets/images/user-shift-image.png",
                shiftTypeText: "RN/LPN",
                shiftUserName: "Alisa Jones"
            },
            {
                shiftStartTime: "8:00",
                shiftEndTime: "8:30",
                shiftUserImage: "assets/images/user-shift-image.png",
                shiftTypeText: "CNA",
                shiftUserName: "Alisa Jones"
            },
            {
                shiftStartTime: "6am",
                shiftEndTime: "6pm",
                shiftUserImage: "assets/images/user-shift-image.png",
                shiftTypeText: "LVN",
                shiftUserName: "Alisa Jones"
            },
            {
                shiftStartTime: "3:00",
                shiftEndTime: "4:30",
                shiftUserImage: "assets/images/user-shift-image.png",
                shiftTypeText: "RN/LPN",
                shiftUserName: "Alisa Jones"
            },
            
        ]
    }

    return (
        <>
            <div className='schedule-listing-wrapper'>
                <div className='schedule-list'>
                    {renderscheduleData.scheduleData.map((shift, index) => {
                        return (
                            <div className='schedule-single' key={index}>
                                <div className='time-wrapper'>
                                    <span>{shift.shiftStartTime}</span>-
                                    <span>{shift.shiftEndTime}</span>
                                </div>
                                <div className='schedule-shift-content'>
                                    <div className='inner'>
                                        <div className='image-wrap'>
                                            <img src={shift.shiftUserImage} alt="" />
                                        </div>
                                        <div className='schedule-shift-text'>
                                            <h6>{shift.shiftTypeText}</h6>
                                            <span>{shift.shiftUserName}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}