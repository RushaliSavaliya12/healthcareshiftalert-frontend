import React, { useState, useEffect } from 'react';
import TakeNotePopup from './TakeNotePopup';
import RatePopup from './RatePopup';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css';

const Feedbackstable = () => {


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
            ClinicianPhoto: "assets/images/Nurse.png",
            ClinicianName: "Courtney Henry",
            Position: "STNA",
            Ratings: "4",
            FeedbacksOrComments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sodales amet, vitae in magna nec.",
        },
        {
            ClinicianPhoto: "assets/images/Nurse.png",
            ClinicianName: "Courtney Henry",
            Position: "STNA",
            Ratings: "Pending",
            FeedbacksOrComments: "Pending",
        },
        {
            ClinicianPhoto: "assets/images/Nurse.png",
            ClinicianName: "Wade Warren",
            Position: "STNA",
            Ratings: "4",
            FeedbacksOrComments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sodales amet, vitae in magna nec.",
        },
        ,
        {
            ClinicianPhoto: "assets/images/Nurse.png",
            ClinicianName: "Arlene McCoy",
            Position: "STNA",
            Ratings: "Pending",
            FeedbacksOrComments: "Pending",
        },
        ,
        {
            ClinicianPhoto: "assets/images/Nurse.png",
            ClinicianName: "Savannah Nguyen",
            Position: "STNA",
            Ratings: "Pending",
            FeedbacksOrComments: "Pending",
        },
        {
            ClinicianPhoto: "assets/images/Nurse.png",
            ClinicianName: "Devon Lane",
            Position: "STNA",
            Ratings: "4",
            FeedbacksOrComments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sodales amet, vitae in magna nec.",
        }
    ]
    return (
        <>
        <table width="100%">
            <thead>
                <tr>
                    <th>Clinician</th>
                    <th>Position</th>
                    <th>Ratings</th>
                    <th>Feedbacks/Comments</th>
                </tr>
            </thead>
            <tbody>
                <>
                    {UserFacilitiesData.map((val, index) =>
                        <tr key={index}>
                            <td className="clinician-td">
                                <div className='clinician-info'>
                                    <img src={val.ClinicianPhoto} alt={val.ClinicianName} />
                                    <h6>{val.ClinicianName}</h6>
                                </div>
                            </td>
                            <td className="positons-td">
                                <div className='flex-table-image d-block d-md-none'><img src="/assets/images/position-icon.svg" alt="Position Icon"/></div>
                                <div className='flex-table-title d-block d-md-none'>Position:</div>
                                {val.Position}
                                </td>
                            <td className="ratings-td">
                                <div className='flex-table-image d-block d-md-none'><img src="/assets/images/ratings-icon.svg" alt="Ratings Icon"/></div>
                                <div className='flex-table-title d-block d-md-none'>Ratings:</div>
                                {val.Ratings == "Pending" ? <Rater rating={0} total={5} interactive={false}/> :  <Rater rating={val.Ratings} total={5} interactive={false} /> }
                            </td>
                            <td className="reviews-td">
                                <div className='flex-table-image d-block d-md-none'><img src="/assets/images/feedback-icon.svg" alt="Feebacks Icon"/></div>
                                <div className='flex-table-title d-block d-md-none'>Feebacks:</div>
                                {val.FeedbacksOrComments == "Pending" ? <RatePopup ModelTitle="Review Clinician"/> :  val.FeedbacksOrComments }
                            </td>
                        </tr>

                    )}
                </>
            </tbody>
        </table>
        
        </>
    )
}

export default Feedbackstable;