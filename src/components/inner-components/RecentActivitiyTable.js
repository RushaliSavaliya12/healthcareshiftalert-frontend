import React, { useState, useEffect } from 'react';


const RecentActivitiyTable = () => {
    const recentTableData = [
        {
            activityIconSrc: "assets/images/ico/payment-icon-grey.svg",
            activityName: "Payment Recieved",
            activityAmount: "$2,000",
            activityStatus: "Success",
            activityStatusClassName: "success",
            activityDate: "May 5, 2022"
        },
        {
            activityIconSrc: "assets/images/ico/request-approve-icon-grey.svg",
            activityName: "Shift request approved",
            activityAmount: "",
            activityStatus: "Success",
            activityStatusClassName: "success",
            activityDate: "May 5, 2022"
        },
        {
            activityIconSrc: "assets/images/ico/cancellation-icon-grey.svg",
            activityName: "No show without notification",
            activityAmount: "",
            activityStatus: "Failed",
            activityStatusClassName: "failed",
            activityDate: "May 5, 2022"
        },
        {
            activityIconSrc: "assets/images/ico/cancellation-icon-grey.svg",
            activityName: "Shift cancellation approved",
            activityAmount: "",
            activityStatus: "Processing",
            activityStatusClassName: "processing",
            activityDate: "May 5, 2022"
        },
        {
            activityIconSrc: "assets/images/ico/payment-icon-grey.svg",
            activityName: "Payment Recieved",
            activityAmount: "$2,000",
            activityStatus: "Success",
            activityStatusClassName: "success",
            activityDate: "May 5, 2022"
        },
        {
            activityIconSrc: "assets/images/ico/payment-icon-grey.svg",
            activityName: "Payment Recieved",
            activityAmount: "$2,000",
            activityStatus: "Success",
            activityStatusClassName: "success",
            activityDate: "May 5, 2022"
        }
    ]

    return (
        <table width="100%">
            <thead>
                <tr>
                    <th>Activity</th>
                    <th></th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <>
                    {recentTableData.map((val, index) =>
                        <tr key={index}>
                            <td>
                                <div className="activity-text">
                                    <span className='icon-wrap'><img src={val.activityIconSrc} alt="" /></span>
                                    <span className='text-wrap'>{val.activityName}</span>
                                </div>
                            </td>
                            <td>
                                <div className='amount-text'>
                                    <span>{val.activityAmount}</span>
                                </div>
                            </td>
                            <td>
                                <span className={`status-tag ${val.activityStatusClassName}`}>{val.activityStatus}</span>
                            </td>
                            <td>
                                <span className="date-text">{val.activityDate}</span>
                            </td>

                        </tr>

                    )}
                </>
            </tbody>
        </table>
    )
}

export default RecentActivitiyTable;