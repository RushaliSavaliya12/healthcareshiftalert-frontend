import React, { useState, useEffect } from 'react';
import FeedbacksContent from './FeedbacksContent';



const FeedbacksTopFilterSection = () => {

    return (
        <>
            <div className='timesheets-main-section'>
                <div className='user-tab-wrapper'>
                    <div className="user-tab-col">
                        <div className="col-inner">
                            <FeedbacksContent />
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FeedbacksTopFilterSection;