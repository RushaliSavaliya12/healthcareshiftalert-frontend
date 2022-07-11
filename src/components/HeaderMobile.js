import React, { useEffect } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Notification from './inner-components/Notification';
import MessagesButton from './inner-components/MessagesButton';

const HeaderMobile = () => {


    useEffect(() => {
        headerMenuOpanClose();
        StickyMobileHeader();
    });

    const headerMenuOpanClose = () =>{
        var LeftPanelMenuHeader = document.getElementById('mobileMenu');
        var MenuToggle = document.getElementById('mobileMenuToggle');
        var closeButton = document.getElementById('MenucloseBtn');
        console.log(MenuToggle);

        MenuToggle.onclick = function () {  
            LeftPanelMenuHeader.classList.add('show');
            document.body.classList.add('modal-open');
        }
        closeButton.onclick = function () {  
            LeftPanelMenuHeader.classList.remove('show');
            document.body.classList.remove('modal-open');
        }

        LeftPanelMenuHeader.onclick = function () {  
            LeftPanelMenuHeader.classList.remove('show');
            document.body.classList.remove('modal-open');
        }

    }

    const StickyMobileHeader = () =>{
        var header = document.getElementById("mobileHeaderMain");
        var sticky = header.offsetTop;

        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        }else{
            header.classList.remove("sticky");
        }
        // Fixed Animation on Scroll
        window.onscroll = function() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            }else{
                header.classList.remove("sticky");
            }

        }
        // Fixed Animation on Scroll
    }

    return (
        <>
            <header className='site-header mobile-header' id="mobileHeaderMain">
                <Container>
                    <Navbar collapseOnSelect expand="lg">

                        <Navbar.Brand href="/">
                            <img src='assets/images/ShiftAlerts_Logo_white.svg' alt="" />
                        </Navbar.Brand>
                        <div className='header-right right-col-wrap top-dropdown-col'>
                            <Notification />
                            <MessagesButton />
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" id="mobileMenuToggle" />
                        </div>
                    </Navbar>
                </Container>
            </header>
        </>
    )
}

export default HeaderMobile;