import React, { useState, useEffect } from 'react';


const RecentActivitiyTable = () => {
    const recentTableData = [
        {
            activityIconClassName: "icon-payment-solid",
            activityName: "Payment Recieved",
            activityAmount: "$2,000",
            activityStatus: "Success",
            activityStatusClassName: "success",
            activityDate: "May 5, 2022"
        },
        {
            activityIconClassName: "icon-shift-request-solid",
            activityName: "Shift request approved",
            activityAmount: "",
            activityStatus: "Success",
            activityStatusClassName: "success",
            activityDate: "May 5, 2022"
        },
        {
            activityIconClassName: "icon-close-solid",
            activityName: "No show without notification",
            activityAmount: "",
            activityStatus: "Failed",
            activityStatusClassName: "failed",
            activityDate: "May 5, 2022"
        },
        {
            activityIconClassName: "icon-close-solid",
            activityName: "Shift cancellation approved",
            activityAmount: "",
            activityStatus: "Processing",
            activityStatusClassName: "processing",
            activityDate: "May 5, 2022"
        },
        {
            activityIconClassName: "icon-payment-solid",
            activityName: "Payment Recieved",
            activityAmount: "$2,000",
            activityStatus: "Success",
            activityStatusClassName: "success",
            activityDate: "May 5, 2022"
        },
        {
            activityIconClassName: "icon-payment-solid",
            activityIconClassName: "icon-payment-solid",
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
                                    <span className='icon-wrap'>
                                        <i className={val.activityIconClassName}></i>
                                    </span>
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