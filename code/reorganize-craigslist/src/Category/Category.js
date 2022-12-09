import './Category.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import Marketplace from '../Marketplace/Marketplace';
import Activities from '../Activities/Activities';
import Services from '../Services/Services';
import Jobs from '../Jobs/Jobs';
import Groups from '../Groups/Groups';


// Following codes adapted from: https://mui.com/material-ui/react-tabs/
function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Category() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div id="tab">
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 2, borderColor: '#800080' }}>
                    <Tabs value={value} onChange={handleChange} centered textColor="secondary" indicatorColor="secondary" variant="fullWidth" sx={{
                        '& .MuiTab-root': { fontSize: 18, fontWeight: 'bold' },
                        '& .Mui-selected': { backgroundColor: '#f2e5ff' },
                        '& .MuiTabs-indicator': { display: 'none' },
                        '& button': { borderRadius: 3 },
                        '& button: hover': { backgroundColor: '#f2e5ff' }
                    }}>
                        <Tab icon={<StorefrontIcon />} iconPosition="start" label="Marketplace" {...a11yProps(0)} />
                        <Tab icon={<EventNoteOutlinedIcon />} iconPosition="start" label="Activities" {...a11yProps(1)} />
                        <Tab icon={<CleaningServicesOutlinedIcon />} iconPosition="start" label="Services" {...a11yProps(2)} />
                        <Tab icon={<ImportantDevicesOutlinedIcon />} iconPosition="start" label="Jobs" {...a11yProps(3)} />
                        <Tab icon={<Groups2OutlinedIcon />} iconPosition="start" label="Groups" {...a11yProps(4)} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    <Marketplace />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Activities />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Services />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Jobs />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Groups />
                </TabPanel>
            </Box>
        </div>
    );
}