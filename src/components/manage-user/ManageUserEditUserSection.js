import React, { useState, useEffect } from 'react';
import ManageUserTab from '../inner-components/ManageUserTab';
import EditUser from '../inner-components/EditUser';




const ManageUserEditUserSection = () => {

    return (
        <>
            <div className='manage-user-main-section'>
                <div className='user-tab-wrapper'>
                    <div className="user-tab-col">
                        <div className="col-inner">
                            <EditUser />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ManageUserEditUserSection;