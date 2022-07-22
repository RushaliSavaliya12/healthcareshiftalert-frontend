import React, { useState, useEffect } from 'react';





const ImageUploadInput = (props) => {

    const [file, setFile] = useState(props.UserImage);
    const [fileAddClass, setFileAddClass] = useState();

    function handleChange(e) {
        // console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setFileAddClass("image-added");
    }

    return (
        <div className='form-group image-upload-wrapper'>
            <input type="file" onChange={handleChange} accept=".png,.jpg,.jpeg"/>
            <div className={`image-preview ${fileAddClass}`}>
                <img src={file} alt=""/>
                <span className='upload-text'>
                    <i className='icon-gallary'></i>
                    Click to upload image
                </span>
            </div>
        </div>
    )

}


export default ImageUploadInput;