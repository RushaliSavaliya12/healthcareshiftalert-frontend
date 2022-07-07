import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { RoutesPath } from '../../App';

const UserTableMenuDropdown = () => {
    return (
        <>
            <Dropdown className="user-table-menu-dropdown custom-dropdown">
                <Dropdown.Toggle id="tableMenuDropdown">
                    <i className='icon-toggle-menu'></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href={RoutesPath.manageUserEdit} className="view-btn">
                        <i className='icon-eye'></i> View
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                        <i className='icon-edit'></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                        <i className='icon-disable'></i> Disable
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                        <i className='icon-trash'></i> Delete
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        </>
    )
}

export default UserTableMenuDropdown;