import React, { useState, useEffect } from 'react';
import SwitchToggle from './SwitchToggle';
import CliniciansTableMenuDropdown from './CliniciansTableMenuDropdown';


const UserCliniciansTable = () => {



    const UserCliniciansData = [
        {
        
            UserImageSrc:"assets/images/user-shift-image.png",
            FirstName:"Camille",
            LastName:"Moreno",
            Position:"CNA",
            Email:"cedrix@ondek.com",
            ContactNo:"09222222222",
            Status:"Active",
            statusTagClassName:"success",
            applyShiftchecked: "Of",
        },
        {
        
            UserImageSrc:"assets/images/user-shift-image.png",
            FirstName:"Arthur",
            LastName:"Hawkins",
            Position:"CNA",
            Email:"cedrix@ondek.com",
            ContactNo:"09222222222",
            Status:"Active",
            statusTagClassName:"success",
            applyShiftchecked: "On",
        },
        {
        
            UserImageSrc:"assets/images/user-shift-image.png",
            FirstName:"Dianne",
            LastName:"Edwards",
            Position:"CNA",
            Email:"cedrix@ondek.com",
            ContactNo:"09222222222",
            Status:"Deactive",
            statusTagClassName:"failed",
            applyShiftchecked: "On",
        },
        {
        
            UserImageSrc:"assets/images/user-shift-image.png",
            FirstName:"Shane",
            LastName:"Hawkins",
            Position:"CNA",
            Email:"cedrix@ondek.com",
            ContactNo:"09222222222",
            Status:"Active",
            statusTagClassName:"success",
            applyShiftchecked: "On",
        },
        {
        
            UserImageSrc:"assets/images/user-shift-image.png",
            FirstName:"Eduardo",
            LastName:"Richards",
            Position:"CNA",
            Email:"cedrix@ondek.com",
            ContactNo:"09222222222",
            Status:"Active",
            statusTagClassName:"success",
            applyShiftchecked: "On",
        },
        {
        
            UserImageSrc:"assets/images/user-shift-image.png",
            FirstName:"Mitchell",
            LastName:"Mitchell",
            Position:"CNA",
            Email:"cedrix@ondek.com",
            ContactNo:"09222222222",
            Status:"Active",
            statusTagClassName:"success",
            applyShiftchecked: "On",
        },
    ]
    return (
        <>
        <table width="100%">
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Status</th>
                    <th>Applying Shifts</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <>
                    {UserCliniciansData.map((val, index) =>
                        <tr key={index}>
                            <td>
                                <div className='clinicians-image-thumbnail'>
                                    <img src={val.UserImageSrc} alt=""/>
                                </div>
                            </td>
                            <td>{val.FirstName}</td>
                            <td>{val.LastName}</td>
                            <td>{val.Position}</td>
                            <td className='email-td'>{val.Email}</td>
                            <td className='mobile-td'>{val.ContactNo}</td>
                            
                            <td>
                                <span className={`status-tag ${val.statusTagClassName}`}>{val.Status}</span>
                            </td>
                            <td>
                                <SwitchToggle dataSwitch={val.applyShiftchecked} switchToggleID="shiftApproveSwitch"/>
                            </td>
                            <td>
                                <CliniciansTableMenuDropdown />
                            </td>
                        </tr>

                    )}
                </>
            </tbody>
        </table>
        
        </>
    )
}

export default UserCliniciansTable;