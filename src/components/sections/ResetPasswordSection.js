import React from 'react';
import { Container} from 'react-bootstrap';
import ResetPasswordForm from '../inner-components/ResetPasswordForm';

const ResetPasswordSection = () => {


    return (
        <>
            <section className='section login-section full-height bg-image reset-password' style={{ backgroundImage: "url(assets/images/login-bg.jpg)" }}>
                <div className="section-wrap">
                    <Container>
                        <ResetPasswordForm />
                    </Container>
                </div>
            </section>
        </>
    )
}

export default ResetPasswordSection;