import React from 'react';
import Header from '../components/Header';
import ResetPasswordSection from '../components/sections/ResetPasswordSection';

const ResetPassword = () => {
    return (
        <>
            <Header />
            <main className='app-main'>
                <ResetPasswordSection />
            </main>
        </>
    )
}

export default ResetPassword;