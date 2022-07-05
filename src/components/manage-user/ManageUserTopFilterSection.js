import React, { useState, useEffect } from 'react';
import ManageUserTab from '../inner-components/ManageUserTab';
import EditUser from '../inner-components/EditUser';
import { RoutesPath } from '../../App';



const ManageUserTopFilterSection = () => {

    return (
        <>
            <div className='manage-user-main-section'>
                <div className='user-tab-wrapper'>
                    <div className="user-tab-col">
                        <div className="col-inner">
                            <ManageUserTab />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ManageUserTopFilterSection;