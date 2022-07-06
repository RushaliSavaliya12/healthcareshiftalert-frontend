import React, { useState, useEffect } from 'react';
import { Tabs, Tab} from 'react-bootstrap';
import FacilityTabContent from './FacilityTabContent';



const ManageUserTab = (props) => {

    const [key, setKey] = useState('facilities');

    return (
        <div className='manage-tab-main'>
            <Tabs
                id="manageUserTab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className=""
            >
                <Tab eventKey="facilities" title="Facilities">
                    <FacilityTabContent />
                </Tab>
                <Tab eventKey="clinicians" title="Clinicians">
                    
                </Tab>
                <Tab eventKey="admin" title="Admin">
                    
                </Tab>
            </Tabs>
        </div>
    )

}


export default ManageUserTab;