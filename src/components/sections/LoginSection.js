import React from 'react';
import { Container} from 'react-bootstrap';
import LoginForm from '../inner-components/LoginForm';

const LoginSection = () => {


    return (
        <>
            <section className='section login-section full-height bg-image' style={{ backgroundImage: "url(assets/images/login-bg.jpg)" }}>
                <div className="section-wrap">
                    <Container>
                        <LoginForm />
                    </Container>
                </div>
            </section>
        </>
    )
}

export default LoginSection;