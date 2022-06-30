import React from 'react';
import Header from '../components/Header';
import LoginSection from '../components/sections/LoginSection';

const Login = () => {
    return (
        <>
            <Header />
            <main className='app-main'>
                <LoginSection />
            </main>
        </>
    )
}

export default Login;