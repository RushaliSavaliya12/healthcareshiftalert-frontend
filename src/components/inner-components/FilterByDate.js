import React, { useState, useEffect } from 'react';
import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker"



const FilterByDate = (props) => {

    const [value, setValue] = useState(new Date())

    return(
        <DatePicker format="MMM DD, YYYY" value={value} minDate={new Date()}/>
    )
}


export default FilterByDate;