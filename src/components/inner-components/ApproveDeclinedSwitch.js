import React, { useState, useEffect } from 'react';


const ApproveDeclinedSwitch = () => {

    const approveRequest = (e) => {
        var thisTarget = e.target;
        var TargetSibling = thisTarget.parentNode.nextElementSibling;

        TargetSibling.classList.add('success');
        TargetSibling.classList.remove('no-status');
        TargetSibling.innerHTML = "Approved";
        thisTarget.parentNode.remove();
    };

    const declineRequest = (e) => {
        var thisTarget = e.target;
        var TargetSibling = thisTarget.parentNode.nextElementSibling;

        TargetSibling.classList.add('failed');
        TargetSibling.classList.remove('no-status');
        TargetSibling.innerHTML = "Declined";
        thisTarget.parentNode.remove();
    };

    return (

        <div className="status-toggle-switch">
            <button type='button' className='approve-btn' onClick={approveRequest}>
            </button>
            <button type='button' className='decline-btn' onClick={declineRequest}>
            </button>
        </div>

    )
}

export default ApproveDeclinedSwitch;