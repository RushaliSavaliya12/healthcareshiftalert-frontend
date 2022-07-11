import React, { useState, useEffect } from 'react';
import SearchInput from '../inner-components/SearchInput';
import CustomDropdown from '../inner-components/CustomDropdown';
import DocumentsTable from '../inner-components/DocumentsTable';
import TablePagination from '../inner-components/TablePagination';
import { RoutesPath } from '../../App';



const DocumentsMainSection = () => {

    const UserFacilityFilter = [
        { value: 'all', label: 'All Facilities' },
        { value: 'active', label: 'Active' },
        { value: 'deactive', label: 'Deactive' }
    ]

    return (
        <>
            <div className='document-main-wrap'>
                <div className="document-main-inner">
                    <div className='filter-row-wrapper'>
                        <div className='table-filter-row'>
                            <SearchInput />
                            <CustomDropdown optionData={UserFacilityFilter} dropClass="without-search" />
                        </div>
                    </div>
                    <div className='pagination-table document-table'>
                        <div className="table-wrapper table-responsive">
                            <DocumentsTable />
                        </div>
                        <TablePagination />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DocumentsMainSection;