import React, { useState, useEffect } from 'react';
import AddCliniciansPopup from './AddCliniciansPopup';
import SearchInput from './SearchInput';
import CustomDropdown from './CustomDropdown';
import UserCliniciansTable from './UserCliniciansTable';
import TablePagination from './TablePagination';

const UserCliniciansFilter = [
    { value: 'All', label: 'All Position' },
    { value: 'CNA', label: 'CNA' },
    { value: 'RN', label: 'RN' },
    { value: 'LPN', label: 'LPN' },
    { value: 'STNA', label: 'STNA' }
]

const CliniciansTabContent = (props) => {


    return (

        <div className='facility-tab-content tab-content-wrap'>
            <div className='filter-row-wrapper'>
                <AddCliniciansPopup ModelTitle="Add Clinicians"/>
                <div className='table-filter-row'>
                    <SearchInput />
                    <CustomDropdown optionData={UserCliniciansFilter} dropClass="without-search" />
                </div>
            </div>
            <div className='user-facilty-table-wrapper pagination-table clinicians-table-wrap'>
                <div className="table-wrapper table-responsive">
                    <UserCliniciansTable />
                </div>
                <TablePagination />
            </div>

        </div>
    )

}


export default CliniciansTabContent;