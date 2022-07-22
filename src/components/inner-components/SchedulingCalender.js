import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';


const SchedulingCalender = (props) => {
    var DayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',];
    return (

        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left:'prev,today,next',
                center:'title',
                right:'dayGridMonth,dayGridWeek,dayGridDay'
            }}
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
            dayHeaderFormat={{ day: 'numeric', weekday: 'short', }}
        />

    )

}


export default SchedulingCalender;