import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';





const MessagesButton = () => {


    return (
        <div className='message-wrap'>
            <Button className="message-btn btn-white btn-square">
                <img src="assets/images/ico/message-icon-black.svg" alt="notification icon" />
            </Button>

        </div>

    )

}


export default MessagesButton;