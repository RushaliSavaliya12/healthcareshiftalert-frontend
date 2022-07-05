import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';





const MessagesButton = () => {


    return (
        <div className='message-wrap'>
            <Button className="message-btn btn-white btn-square">
                <i className='icon-message-solid'></i>
            </Button>

        </div>

    )

}


export default MessagesButton;