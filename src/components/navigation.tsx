import React, { useState, useEffect, SyntheticEvent } from 'react';
import Box from '@mui/material/Box';
import { Tabs, Tab, Typography } from '@mui/material';
import Nations from './nations/nations';
import AddItem from './add';
import IdeaGroups from './ideaGroups/ideaGroups';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Navigation() {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newVal: number) => {
        setValue(newVal);
    }

    return (
        <Box >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Search" {...a11yProps(0)} />
                    <Tab label="National Ideas" {...a11yProps(1)} />
                    <Tab label="Add" {...a11yProps(2)} />
                    <Tab label="Update" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Nations />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <IdeaGroups />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AddItem />
            </TabPanel>
            <TabPanel value={value} index={3}>
                Update
            </TabPanel>
        </Box>
    );
};

export default Navigation;