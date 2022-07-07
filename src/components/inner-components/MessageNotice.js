import React, { useState, useEffect } from 'react';

const MessageNotice = (props) => {


    return (

       <div className="message-notice-wrap color-success">
            <h6>MessageNotice</h6>
            <p>{props.noticeText}</p>
       </div>

    )
}

export default MessageNotice;