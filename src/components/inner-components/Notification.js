import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';





const Notification = () => {

    const [showClass, setShowClass] = useState(""); 

    const NotificationData = [
        {
            notificationText: "CNA schedule has been filled",
            notificationDate: "May 5, 2022",
            notificationTime: "8:17:18 PM",
            unreadNotificationClassName: "active",
        },
        {
            notificationText: "LVN schedule has been filled",
            notificationDate: "May 5, 2022",
            notificationTime: "8:17:18 PM",
            unreadNotificationClassName: "active",
        },
        {
            notificationText: "CNA schedule has been filled",
            notificationDate: "May 4, 2022",
            notificationTime: "9:17:18 PM",
            unreadNotificationClassName: "active",
        },
        {
            notificationText: "CNA schedule has been filled",
            notificationDate: "May 4, 2022",
            notificationTime: "9:17:18 PM",
            unreadNotificationClassName: "",
        },
        {
            notificationText: "CNA schedule has been filled",
            notificationDate: "May 4, 2022",
            notificationTime: "9:17:18 PM",
            unreadNotificationClassName: "",
        },
        {
            notificationText: "CNA schedule has been filled",
            notificationDate: "May 4, 2022",
            notificationTime: "9:17:18 PM",
            unreadNotificationClassName: "",
        },
    ]

    const popupOpen = () =>{
        setShowClass("show");
    }

    const popupClose = (e) =>{
        setShowClass("");
    }

    return (
        <div className={`notification-wrap ${showClass}`}>
            <Button className="notification-btn btn-white btn-square" onClick={popupOpen}>
                <img src="assets/images/ico/notification-icon-black.svg" alt="notification icon" />
            </Button>
            <div className={`notification-main all-notification notification-popup ${showClass}`}>
                <div className="all-notification-inner">
                    <div className="popup-header">
                        <h5 className="notification-title">Notification</h5>
                        <button className='close-btn' onClick={popupClose}></button>
                    </div>
                    <div className='notification-list'>
                        {NotificationData.map((val, index) =>
                            <div className={`notification-single ${val.unreadNotificationClassName}`} key={index}>
                                <div className='notification-text'>
                                    <h6>{val.notificationText}</h6>
                                    <div className='time-date-wrap'>
                                        <span>{val.notificationDate}</span>
                                        <span>{val.notificationTime}</span>
                                    </div>
                                </div>
                                <Button className="delete-btn btn-white">
                                    <img src="assets/images/ico/trash-icon-grey.svg" alt="notification icon" />
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )

}


export default Notification;