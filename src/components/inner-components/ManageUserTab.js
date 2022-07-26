import React, { useState, useEffect } from 'react';
import { Tabs, Tab} from 'react-bootstrap';
import FacilityTabContent from './FacilityTabContent';
import CliniciansTabContent from './CliniciansTabContent';
import AdminTabContent from './AdminTabContent';



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
                    <CliniciansTabContent />
                </Tab>
                <Tab eventKey="admin" title="Admin">
                    <AdminTabContent />
                </Tab>
            </Tabs>
        </div>
    )

}


export default ManageUserTab;