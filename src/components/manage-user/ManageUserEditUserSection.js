import React, { useState, useEffect } from 'react';




const ManageUserEditUserSection = (props) => {

    return (
        <>
            <div className='manage-user-main-section'>
                <div className='user-tab-wrapper'>
                    <div className="user-tab-col">
                        <div className="col-inner">
                            {props.userTypeData}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ManageUserEditUserSection;