import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import { RoutesPath } from '../../App';



const TablePagination = (props) => {


    return (

        <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Next />
        </Pagination>

    )

}


export default TablePagination;