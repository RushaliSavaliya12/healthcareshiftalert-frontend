import React, { useState, useEffect } from 'react';
import ApproveDeclinedSwitch from './ApproveDeclinedSwitch';


const CredentialTable = () => {
    const CredentialTableData = [
        {
            pdfFileSrc: "assets/images/document/sample.pdf",
            pdfFileName: "Background check",
            LastDate: "26/04/2022",
            statusProgressToggle: <ApproveDeclinedSwitch />,
            statusTagClassName: "no-status",
            status: "",
        },
        {
            pdfFileSrc: "assets/images/document/sample.pdf",
            pdfFileName: "IP Assignment Agreement",
            LastDate: "26/04/2022",
            statusProgressClassName: "status-done",
            statusTagClassName: "success",
            status: "Approved",
        },
        {
            pdfFileSrc: "assets/images/document/sample.pdf",
            pdfFileName: "Background check",
            LastDate: "26/04/2022",
            statusProgressClassName: "status-done",
            statusTagClassName: "success",
            status: "Approved",
        },
        {
            pdfFileSrc: "assets/images/document/sample.pdf",
            pdfFileName: "Background check",
            LastDate: "26/04/2022",
            statusProgressClassName: "status-done",
            statusTagClassName: "failed",
            status: "Declined",
        }
    ]

    return (
        <table width="100%">
            <thead>
                <tr>
                    <th>Credentials</th>
                    <th>Last Update</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <>
                    {CredentialTableData.map((val, index) =>
                        <tr key={index}>
                            <td>
                                <div className='file-data'>
                                    <a href={val.pdfFileSrc} download className='file-name'>{val.pdfFileName}</a>
                                </div>
                            </td>
                            <td>{val.LastDate}</td>
                            <td>
                                {val.statusProgressToggle}
                                <span className={`status-tag ${val.statusTagClassName}`}>{val.status}</span>
                            </td>


                        </tr>

                    )}
                </>
            </tbody>
        </table >
    )
}

export default CredentialTable;