import React, { useState, useEffect } from 'react';
// import { Tabs, Tab, Row, } from 'react-bootstrap';
import AddUserButton from './AddUserPopup';
import SearchInput from './SearchInput';
import CustomDropdown from './CustomDropdown';
import UserFacilitiesTable from './UserFacilitiesTable';
import TablePagination from './TablePagination';

const UserFacilityFilter = [
    { value: 'all', label: 'All Facilities' },
    { value: 'active', label: 'Active' },
    { value: 'deactive', label: 'Deactive' }
]

const FacilityTabContent = (props) => {


    return (

        <div className='facility-tab-content tab-content-wrap'>
            <div className='filter-row-wrapper'>
                <AddUserButton ModelTitle="Add Facility"/>
                <div className='table-filter-row'>
                    <SearchInput />
                    <CustomDropdown optionData={UserFacilityFilter} dropClass="without-search" />
                </div>
            </div>
            <div className='user-facilty-table-wrapper pagination-table'>
                <div className="table-wrapper table-responsive">
                    <UserFacilitiesTable />
                </div>
                <TablePagination />
            </div>

        </div>
    )

}


export default FacilityTabContent;