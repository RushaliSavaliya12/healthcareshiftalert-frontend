import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import SearchInput from '../inner-components/SearchInput';
import DropdownWithCheckbox from '../inner-components/DropdownWithCheckbox';
import TimesheetsTable from '../inner-components/TimesheetsTable';
import TablePagination from '../inner-components/TablePagination';

const PositionsFilter = [
    { value: 'all', label: 'All Positions' },
    { value: 'stna', label: 'STNA' },
    { value: 'rn', label: 'RN' },
    { value: 'cna', label: 'CNA' },
    { value: 'rnlpn', label: 'RN/LPN' }
]

const TimesheetsContent = (props) => {


    return (

        <div className='facility-tab-content tab-content-wrap'>
            <div className='d-flex justify-content-between filter-row-wrapper'>
                <SearchInput />
                <div className='table-filter-row'>
                    {/* <AddUserButton ModelTitle="Approve All"/> */}
                    <Button className="btn-without-icon border-btn" variant="outline-primary">Approve All</Button>
                    <DropdownWithCheckbox optionData={PositionsFilter} dropClass="without-search" />
                </div>
            </div>
            <div className='user-facilty-table-wrapper pagination-table'>
                <div className="table-wrapper table-responsive">
                    <TimesheetsTable />
                </div>
                <TablePagination />
            </div>

        </div>
    )

}


export default TimesheetsContent;