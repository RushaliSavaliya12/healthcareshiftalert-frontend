import React, { useState, useEffect } from 'react';
import DatePicker from "react-multi-date-picker";
import TimePicker from 'react-multi-date-picker/plugins/time_picker';



const TimeCustomPicker = (props) => {


    return (
        <DatePicker
            disableDayPicker
            format="hh:mm A"
            plugins={[
                <TimePicker hideSeconds/>
            ]}
        />
    )
}


export default TimeCustomPicker;