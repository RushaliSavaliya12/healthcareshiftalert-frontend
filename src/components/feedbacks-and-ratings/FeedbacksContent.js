import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import SearchInput from '../inner-components/SearchInput';
import DropdownWithCheckbox from '../inner-components/DropdownWithCheckbox';
import Feedbackstable from '../inner-components/Feedbackstable';
import TablePagination from '../inner-components/TablePagination';

const PositionsFilter = [
    { value: 'all', label: 'All Positions' },
    { value: 'stna', label: 'STNA' },
    { value: 'rn', label: 'RN' },
    { value: 'cna', label: 'CNA' },
    { value: 'rnlpn', label: 'RN/LPN' }
]

const FeedbacksContent = (props) => {


    return (

        <div className='facility-tab-content tab-content-wrap'>
            <div className='d-flex justify-content-between filter-row-wrapper'>
                <SearchInput />
                <div className='table-filter-row table-filter-timesheets-row'>
                    <DropdownWithCheckbox optionData={PositionsFilter} dropClass="without-search" />
                </div>
            </div>
            <div className='user-facilty-table-wrapper flex-table pagination-table'>
                <div className="table-wrapper table-responsive">
                    <Feedbackstable />
                </div>
                <TablePagination />
            </div>

        </div>
    )

}


export default FeedbacksContent;