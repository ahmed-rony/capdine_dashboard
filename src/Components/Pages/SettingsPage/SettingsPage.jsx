import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Tab, Tabs } from '@mui/material';
import Account from '../../Component/Account/Account';
import Setting from '../../Component/Setting/Setting';
import { MdSettings, MdOutlineAccountCircle } from 'react-icons/md';
import './SettingsPage.scss';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        >
            {value === index && (
                <h3>{children}</h3>
            )}
        </div>
    );
}

const SettingsPage = () => {
    const [tab, setTab] = useState(0);

    const handleTabs = (e, val) => {
        setTab(val);
    }

    return (
        <div>
            <Box>
                <Tabs className='tabs' value={tab} onChange={handleTabs}>
                    <Tab className='tab' icon={<MdSettings className='icon' />}/>
                    <Tab className='tab' icon={<MdOutlineAccountCircle className='icon' />} />
                </Tabs>
            </Box>
            <TabPanel value={tab} index={0}>
                <Setting />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <Account />
            </TabPanel>
        </div>
    );
};

export default SettingsPage;