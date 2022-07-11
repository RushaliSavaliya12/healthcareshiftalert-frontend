import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RoutesPath } from '../../App';


const DocumentsTable = () => {



    const UserCliniciansData = [
        {

            UserImageSrc: "assets/images/user-shift-image.png",
            UserName: "Camille Moreno",
            UserPosition: "RN",
            PendingDocuments: "1",
            LastUpdateDate: "26/04/2022",
        },
        {

            UserImageSrc: "assets/images/user-shift-image.png",
            UserName: "Ronald Richards",
            UserPosition: "LPN",
            PendingDocuments: "2",
            LastUpdateDate: "26/04/2022",
        },
        {

            UserImageSrc: "assets/images/user-shift-image.png",
            UserName: "Guy Hawkins",
            UserPosition: "LPN",
            PendingDocuments: "1",
            LastUpdateDate: "26/04/2022",
        },
        {

            UserImageSrc: "assets/images/user-shift-image.png",
            UserName: "Jane Cooper",
            UserPosition: "LPN",
            PendingDocuments: "3",
            LastUpdateDate: "26/04/2022",
        },
        {

            UserImageSrc: "assets/images/user-shift-image.png",
            UserName: "Jerome Bell",
            UserPosition: "LPN",
            PendingDocuments: "1",
            LastUpdateDate: "26/04/2022",
        },
        {

            UserImageSrc: "assets/images/user-shift-image.png",
            UserName: "Darrell Steward",
            UserPosition: "LPN",
            PendingDocuments: "1",
            LastUpdateDate: "26/04/2022",
        },
        {

            UserImageSrc: "assets/images/user-shift-image.png",
            UserName: "Cameron Williamson",
            UserPosition: "LPN",
            PendingDocuments: "1",
            LastUpdateDate: "26/04/2022",
        },
        {

            UserImageSrc: "assets/images/user-shift-image.png",
            UserName: "Cody Fisher",
            UserPosition: "LPN",
            PendingDocuments: "1",
            LastUpdateDate: "26/04/2022",
        },
    ]
    return (
        <>
            <table width="100%">
                <thead>
                    <tr>
                        <th>Clinician Name</th>
                        <th>Position</th>
                        <th>Documents</th>
                        <th>Last updated</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {UserCliniciansData.map((val, index) =>
                            <tr key={index}>
                                <td>
                                    <div className="clinincians-user-name">
                                        <div className='clinicians-image-thumbnail'>
                                            <img src={val.UserImageSrc} alt="" />
                                        </div>
                                        <span>{val.UserName}</span>
                                    </div>

                                </td>
                                <td>{val.UserPosition}</td>
                                <td>
                                    <div className="file-data">
                                        {val.PendingDocuments} Pending
                                    </div>
                                </td>
                                <td>{val.LastUpdateDate}</td>
                                <td>
                                    <Link to={RoutesPath.documentsDetails} className="btn btn-primary border-btn">See details</Link>
                                </td>
                            </tr>

                        )}
                    </>
                </tbody>
            </table>

        </>
    )
}

export default DocumentsTable;