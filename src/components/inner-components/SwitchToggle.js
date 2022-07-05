import React, { useState, useEffect } from 'react';





const SwitchToggle = (props) => {

    useEffect(() => {
        ToggleActiveOnInit();
    });


    // SwithToggle on Init
    const ToggleActiveOnInit = () => {
        var switchToggle = document.querySelectorAll('.switch');

        [].forEach.call(switchToggle, function (item) {
            var switchToggleValue = item.getAttribute("data-switch");
            if (switchToggleValue === "On") {
                var checkbox = item.querySelector('input');
                checkbox.checked = true;
            }
        });

    };
    // SwithToggle on Init


    return (
        <label className="switch" data-switch={props.dataSwitch}>
            <input type="checkbox" id={props.switchToggleID} />
            <span className="slider switch-toggle"></span>
        </label>
    )

}


export default SwitchToggle;