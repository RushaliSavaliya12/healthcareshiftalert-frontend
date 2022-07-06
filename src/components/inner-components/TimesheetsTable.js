import React, { useState, useEffect } from 'react';
import TakeNotePopup from './TakeNotePopup';
import RatePopup from './RatePopup';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css';

const TimesheetsTable = () => {


    useEffect(() => {
        ToggleActiveOnInit();
    });


    // SwithToggle on Init
    const ToggleActiveOnInit = () => {
        var switchToggle = document.querySelectorAll('.switch');

        [].forEach.call(switchToggle, function (item) {
            var switchToggleValue = item.getAttribute("data-switch");
            if (switchToggleValue === "On") {
                var checkbox = item.querySelector('input');
                checkbox.checked = true;
            }
        });

    };
    // SwithToggle on Init

    const UserFacilitiesData = [
        {
            EmployeeName: "Jacob Jones",
            Position: "STNA",
            ClockIn: "5:55:00 AM",
            ClockOut: "2:00:00 PM",
            Date: "26/04/2022",
            FacilityNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis faucibus at erat",
            ClinicNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis faucibus at erat",
            Status: "Pending",
            Reviews: "Rate",
            Stars: "none",
            POCSignature: "Pending",
        },
        {
            EmployeeName: "Jacob Jones",
            Position: "STNA",
            ClockIn: "5:55:00 AM",
            ClockOut: "2:00:00 PM",
            Date: "26/04/2022",
            FacilityNote: "Take note",
            ClinicNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis faucibus at erat",
            Status: "Pending",
            Reviews: "Rate",
            Stars: "none",
            POCSignature: "Pending",
        },
        {
            EmployeeName: "Camille Moreno",
            Position: "STNA",
            ClockIn: "5:55:00 AM",
            ClockOut: "2:00 PM",
            Date: "26/04/2022",
            FacilityNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis faucibus at erat",
            ClinicNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis faucibus at erat",
            Status: "Approved",
            Reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim in in sapien",
            Stars: "4",
            POCSignature: "Approved",
        },
        ,
        {
            EmployeeName: "Eleanor Pena",
            Position: "STNA",
            ClockIn: "5:55:00 AM",
            ClockOut: "2:00 PM",
            Date: "26/04/2022",
            FacilityNote: "Take note",
            ClinicNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis faucibus at erat",
            Status: "Approved",
            Reviews: "Rate",
            Stars: "none",
            POCSignature: "Approved",
        }
    ]
    return (
        <>
        <table width="100%">
            <thead>
                <tr>
                    <th>Emplyee Name</th>
                    <th>Position</th>
                    <th>Clock In</th>
                    <th>Clock Out</th>
                    <th>Date</th>
                    <th>Facility Note</th>
                    <th>Clinic Note</th>
                    <th>Status</th>
                    <th>Reviews</th>
                    <th>POC Signature</th>
                </tr>
            </thead>
            <tbody>
                <>
                    {UserFacilitiesData.map((val, index) =>
                        <tr key={index}>
                            <td className="employee-name-td">{val.EmployeeName}</td>
                            <td>{val.Position}</td>
                            <td className="clock-in-td">{val.ClockIn}</td>
                            <td className="clock-out-td">{val.ClockOut}</td>
                            <td>{val.Date}</td>
                            <td className="note-td">
                                {val.FacilityNote == "Take note" ? <TakeNotePopup ModelTitle="Note to the clinician"/> : val.FacilityNote}
                            </td>
                            <td className="note-td">{val.ClinicNote}</td>
                            <td>
                                <span className={`status-tag ${val.Status}`}>{val.Status}</span>
                            </td>
                            <td className={`reviews-td ${val.POCSignature == 'Pending' ? 'reviews-disable' : ''}`}>
                                {val.Reviews == "Rate" ? <RatePopup ModelTitle="Review Clinician"/> : <Rater rating={val.Stars} total={5} interactive={false} />}
                                {val.Reviews == "Rate" ? null : val.Reviews }
                                </td>
                            <td className="note-td">{val.POCSignature}</td>
                        </tr>

                    )}
                </>
            </tbody>
        </table>
        
        </>
    )
}

export default TimesheetsTable;