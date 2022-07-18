import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

const ColorPickerDrodown = (props) => {


    useEffect(() => {

    });

    const colorData = [
        {
            ColorValue: "#0EA80F"
        },
        {
            ColorValue: "#E42961"
        },
        {
            ColorValue: "#FF9429"
        },
        {
            ColorValue: "#893DEB"
        },
        {
            ColorValue: "#2753B8"
        }
    ];

    const dropdownSelectedInit = (e) => {
        var toggleButton = document.getElementById('colorDropdown');
        var toggleColorValue = toggleButton.getAttribute("selectedcolor");
        var alldropdownItem = document.querySelectorAll('.color-picker-dropdown .dropdown-item');
        [].forEach.call(alldropdownItem, function (item) {
            var dropdownItemColor = item.getAttribute("colorvalue");
            if (dropdownItemColor === toggleColorValue) {
                item.classList.add('active');
            }
        });
    }

    const dropdownSelected = (e) => {
        var target = e.target;
        var dropdownButton = document.getElementById('colorDropdown');
        var SelectedDiv = document.querySelector(".color-picker-dropdown a.active");
        var ColorCode = target.getAttribute("colorvalue");
        dropdownButton.setAttribute("selectedcolor", ColorCode);
        dropdownButton.style.backgroundColor = ColorCode;
        SelectedDiv.classList.remove('active');
        target.classList.add('active');
    }

    return (
        <>
            <div className='color-picker-dropdown'>
                <Dropdown onToggle={dropdownSelectedInit}>
                    <Dropdown.Toggle id="colorDropdown" className="color-round" selectedcolor="#0EA80F" style={{ backgroundColor: "#0EA80F" }}></Dropdown.Toggle>
                    <Dropdown.Menu>
                        {colorData.map((val, index) =>
                            <Dropdown.Item key={index} colorvalue={val.ColorValue} className="color-round" onClick={dropdownSelected} style={{ backgroundColor: val.ColorValue }}></Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </>
    )
}

export default ColorPickerDrodown;