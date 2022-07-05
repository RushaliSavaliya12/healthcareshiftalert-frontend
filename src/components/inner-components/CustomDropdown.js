import React, { useState, useEffect } from 'react';
import { Dropdown, Button, Form } from 'react-bootstrap';
import { RoutesPath } from '../../App';



const CustomDropdown = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [selection, setSelection] = useState("");

    useEffect(() => {
        const selectedFirst = props.optionData[0].label;
        setSelection(selectedFirst);
    }, []);

    const handleClose = (e) => {
        if (e.target.innerText !== selection && e.target.innerText !== "") {
            setSelection(e.target.innerText);
        }
        setSearchText("");
        setAnchorEl(null);
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };


    return (
        <div className={`dropdown-wrapper ${props.dropClass}`}>
            <Dropdown id="facilityDropdown" className="custom-dropdown">
                <Dropdown.Toggle id="facilityDropdown">
                    {selection}
                </Dropdown.Toggle>
                {renderDashboardMenu()}
            </Dropdown>
        </div>
    );


    function renderDashboardMenu() {
        const displayOptions = props.optionData.map((item) => {
            if (item.label.toLowerCase().includes(searchText.toLowerCase())) {
                return item;
            }
            return undefined;
        })
            .filter((item) => item !== undefined);

        function renderOption(value) {
            if (selection === value) {
                return (
                    <div className="active">
                        {value}
                    </div>
                );
            }
            return value;
        }

        return (
            <Dropdown.Menu onClose={handleClose}>
                <div className="search-input-wrap">

                    <div className="search-icon">
                        <img src="assets/images/ico/search-icon-grey.svg" alt/>
                    </div>
                    <Form.Control type="search" onChange={handleSearchChange} placeholder="Search..." name="Search" value={searchText} />

                </div>

                {displayOptions.map((item, index) => {
                    return (

                        <Dropdown.Item onClick={(e) => handleClose(e)} key={index}>
                            {renderOption(item.label)}
                        </Dropdown.Item>

                    );
                })}
            </Dropdown.Menu>
        );
    }

}


export default CustomDropdown;