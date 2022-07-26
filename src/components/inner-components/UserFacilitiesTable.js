import React, { useState, useEffect } from 'react';
import FacilityTableMenuDropdown from './FacilityTableMenuDropdown';
import SwitchToggle from './SwitchToggle';

const UserFacilitiesTable = () => {



    const UserFacilitiesData = [
        {
            FacilityName: "Bristol Village",
            FacilityAddress: "Bristol Village",
            POCFirstName: "Bristol",
            POCLastName: "Village",
            Mainline: "8787823223",
            FacilityEmail: "bristol@ondek.com",
            FacilityStatus: "Active",
            FaclityStatusButtonClassName: "success",
            TimeSheetApprovChecked: "On",
            SchedulingChecked: "Off",

        },
        {
            FacilityName: "Chillicothe Campus",
            FacilityAddress: "Chillicothe Campus",
            POCFirstName: "Chillicothe",
            POCLastName: "Campus",
            Mainline: "639 777777",
            FacilityEmail: "chillicother@ondek.com",
            FacilityStatus: "Active",
            FaclityStatusButtonClassName: "success",
            TimeSheetApprovChecked: "On",
            SchedulingChecked: "On"

        },
        {
            FacilityName: "First Community Village",
            FacilityAddress: "First Community Village",
            POCFirstName: "First Community",
            POCLastName: "Village",
            Mainline: "639 888888",
            FacilityEmail: "firstcommunity@ondek.com",
            FacilityStatus: "Deactive",
            FaclityStatusButtonClassName: "failed",
            TimeSheetApprovChecked: "On",
            SchedulingChecked: "Off"

        },
        {
            FacilityName: "Toledo",
            FacilityAddress: "Bristol Village",
            POCFirstName: "Bristol",
            POCLastName: "Village",
            Mainline: "8787823223",
            FacilityEmail: "bristol@ondek.com",
            FacilityStatus: "Active",
            FaclityStatusButtonClassName: "success",
            TimeSheetApprovChecked: "On",
            SchedulingChecked: "Off"

        },
        {
            FacilityName: "Pembroke Pines",
            FacilityAddress: "Bristol Village",
            POCFirstName: "Bristol",
            POCLastName: "Village",
            Mainline: "8787823223",
            FacilityEmail: "bristol@ondek.com",
            FacilityStatus: "Active",
            FaclityStatusButtonClassName: "success",
            TimeSheetApprovChecked: "On",
            SchedulingChecked: "On"

        },
        {
            FacilityName: "Orange",
            FacilityAddress: "Bristol Village",
            POCFirstName: "Bristol",
            POCLastName: "Village",
            Mainline: "8787823223",
            FacilityEmail: "bristol@ondek.com",
            FacilityStatus: "Active",
            FaclityStatusButtonClassName: "success",
            TimeSheetApprovChecked: "On",
            SchedulingChecked: "On"

        },
    ]
    return (
        <>
            <table width="100%">
                <thead>
                    <tr>
                        <th>Facility Name</th>
                        <th>Address</th>
                        <th>POC Firstname</th>
                        <th>POC Lastname</th>
                        <th>Mainline</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Timesheet approval </th>
                        <th>Scheduling</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {UserFacilitiesData.map((val, index) =>
                            <tr key={index}>
                                <td>{val.FacilityName}</td>
                                <td>{val.FacilityAddress}</td>
                                <td>{val.POCFirstName}</td>
                                <td>{val.POCLastName}</td>
                                <td className='mobile-td'>{val.Mainline}</td>
                                <td className='email-td'>{val.FacilityEmail}</td>
                                <td>
                                    <span className={`status-tag ${val.FaclityStatusButtonClassName}`}>{val.FacilityStatus}</span>
                                </td>
                                <td>
                                    <SwitchToggle dataSwitch={val.TimeSheetApprovChecked} switchToggleID="timesheetApproveCheckbox" />

                                </td>
                                <td>
                                    <SwitchToggle dataSwitch={val.SchedulingChecked} switchToggleID="schedulingCheckbox" />

                                </td>
                                <td>
                                    <FacilityTableMenuDropdown />
                                </td>
                            </tr>

                        )}
                    </>
                </tbody>
            </table>

        </>
    )
}

export default UserFacilitiesTable;