import React, { useState, useEffect } from 'react';
import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker"



const DateofBirthInput = (props) => {

    // const [value, setValue] = useState(new Date())

    return(
        <DatePicker format="MM/DD/YYYY" placeholder="mm/dd/yyyy" className='form-control'/>
    )
}


export default DateofBirthInput;