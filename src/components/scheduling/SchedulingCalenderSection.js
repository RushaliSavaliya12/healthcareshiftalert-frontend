import React, { useState, useEffect } from 'react';
import SchedulingCalender from '../inner-components/SchedulingCalender';
import { RoutesPath } from '../../App';


const SchedulingCalenderSection = () => {
    return (
        <>
            <div className='calender-wrapper'>
                <SchedulingCalender />
            </div>
        </>
    )
}

export default SchedulingCalenderSection;