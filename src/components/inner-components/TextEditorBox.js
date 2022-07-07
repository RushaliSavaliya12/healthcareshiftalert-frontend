import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditorBox(props) {
    const [value, setValue] = useState('');
    return (
        <ReactQuill value={props.editorValue}/>
    );

}
export default TextEditorBox;