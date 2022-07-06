import React, { useState, useEffect } from 'react';
import TimesheetsContent from './TimesheetsContent';



const TimesheetsTopFilterSection = () => {

    return (
        <>
            <div className='timesheets-main-section'>
                <div className='user-tab-wrapper'>
                    <div className="user-tab-col">
                        <div className="col-inner">
                            <TimesheetsContent />
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TimesheetsTopFilterSection;