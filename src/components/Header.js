import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () =>{
    return(
        <>
        <header className='app-header'>
            <div className='header-wrap'>
                <Container>
                    <div className='brand-logo'>
                        <figure>
                            <img src='assets/images/ShiftAlerts_Logo_white.svg' alt="App Logo"/>
                        </figure>
                    </div>
                </Container>
            </div>
        </header>
        </>
    )
}

export default Header;