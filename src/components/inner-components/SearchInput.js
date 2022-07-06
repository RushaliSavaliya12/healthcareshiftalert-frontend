import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { RoutesPath } from '../../App';



const SearchInput = (props) => {


    return (
        <div className="search-input-wrap table-search-filter">
            <div className="search-icon">
                <i className='icon-search'></i>
            </div>
            <Form.Control type="search" placeholder="Search" name="Search" id={props.searchid}/>
        </div>
    )

}


export default SearchInput;