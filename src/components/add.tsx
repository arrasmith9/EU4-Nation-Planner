import React, { useState, useRef } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, TextField } from '@mui/material';
import axios from 'axios';

interface AddElementProps {
    type: string;
}

function AddElements(props: AddElementProps) {
    const itemsRef = useRef<any[]>([]);
    if (props.type === 'nations') {
        return (
            <Box sx={{ minWidth: 120, marginTop: '25px' }}>
                <Grid container={true} spacing={2} >
                    <Grid item={true} xs={3} >
                        <TextField id="nation" label="Nation" inputRef={el => itemsRef.current[0] = el} variant="outlined" style={{width: 300}} />
                    </Grid>
                    <Grid item={true} xs={3} >
                        <TextField id="tag" label="Tag" inputRef={el => itemsRef.current[1] = el} variant="outlined" style={{width: 300}} />
                    </Grid>
                    <Grid item={true} xs={3} >
                        <TextField id="culture" inputRef={el => itemsRef.current[2] = el} label="Culture" variant="outlined" style={{width: 300}} />
                    </Grid>
                    <Grid item={true} xs={3} >
                        <Autocomplete
                            disablePortal
                            freeSolo
                            id="culture_group"
                            options={DropdownOptions('Culture_Group')}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Culture Group" inputRef={el => itemsRef.current[3] = el} style={{width: 300}} />}
                        />
                    </Grid>
                    <Grid item={true} xs={3} >
                        <Autocomplete
                            disablePortal
                            freeSolo
                            id="religion"
                            options={DropdownOptions('Religion')}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} inputRef={el => itemsRef.current[4] = el} label="Religion" />}
                        />
                    </Grid>
                    <Grid item={true} xs={3} >
                        <Autocomplete
                            disablePortal
                            freeSolo
                            id="tech"
                            options={DropdownOptions('Tech')}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} inputRef={el => itemsRef.current[5] = el} label="Technology Group" />}
                        />
                    </Grid>
                    <Grid item={true} xs={3} >
                        <Autocomplete
                            disablePortal
                            freeSolo
                            id="national_idea"
                            options={DropdownOptions('National_Ideas')}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} inputRef={el => itemsRef.current[6] = el} label="National Ideas" />}
                        />
                    </Grid>
                    <Grid item={true} xs={12} >
                        <Button variant="contained" onClick={() => addHandler(itemsRef, getArrOfFields('nations'), 'nations')} >Add</Button>
                        <Button onClick={() => clearHandler(null)} style={{marginLeft: '10px'}} >Clear</Button>
                    </Grid>
                </Grid>
            </Box>
        )
    } else if (props.type === 'national_ideas') {
        return (
            <Box sx={{ minWidth: 120 }}>National Ideas</Box>
        )
    }
    return (
        <></>
    );
}

function addHandler(addRefs: any, fieldArr: string[], type: string) {
    const refsArr = addRefs.current;
    const addObj: any = {};
    for (let i = 0; i < refsArr.length; i++) {
        addObj[fieldArr[i]] = refsArr[i].value
    }
    console.log(addObj);
    if (type === 'nations') {
        const addReqObj: any = {
            table: type,
            item: addObj
        };
        axios.post('http://localhost:3949/addrow', addReqObj).then((res: any) => {
            console.log(res);
            clearHandler(addRefs);
        })
    }
}

function clearHandler(clearRefs: any) {
    
}

function getArrOfFields(type: string) {
    if (type === 'nations') {
        return [
            'nation',
            'tag',
            'culture',
            'culture_group',
            'religion',
            'tech',
            'national_idea'
        ];
    }
    return [];
}

function DropdownOptions(element: string) {
    if (element === 'Culture_Group') {
        return (
            [
                { label: 'Sonoran', value: 'Sonoran' },
                { label: 'Central Algonquian', value: 'Central Algonquian' },
                { label: 'Iroquoian', value: 'Iroquoian' },
                { label: 'Eastern Algonquian', value: 'Eastern Algonquian' },
                { label: 'Siouan', value: 'Siouan' },
                { label: 'Plains Algonquian', value: 'Plains Algonquian' },
                { label: 'Muskogean', value: 'Muskogean' },
                { label: 'Mayan', value: 'Mayan' },
                { label: 'Germanic', value: 'Germanic' },
                { label: 'Iberian', value: 'Iberian' },
                { label: 'West Slavic', value: 'West Slavic' },
                { label: 'South Slavic', value: 'South Slavic' },
                { label: 'Byzantine', value: 'Byzantine' },
                { label: 'British', value: 'British' },
                { label: 'Latin', value: 'Latin' },
                { label: 'Tatar', value: 'Tatar' },
                { label: 'Andean', value: 'Andean' },
                { label: 'French', value: 'French' },
                { label: 'West African', value: 'West African' },
                { label: 'Chinese', value: 'Chinese' },
                { label: 'Burman', value: 'Burman' },
                { label: 'Sudanese', value: 'Sudanese' },
                { label: 'Eastern Aryan', value: 'Eastern Aryan' },
                { label: 'Japanese', value: 'Japanese' },
                { label: 'Levantine', value: 'Levantine' },
                { label: 'Dravidian', value: 'Dravidian' },
                { label: 'Hindustani', value: 'Hindustani' }
            ]
        );
    } else if (element === 'Religion') {
        return (
            [
                { label: 'Catholic', value: 'Catholic' },
                { label: 'Protestant', value: 'Protestant' },
                { label: 'Sunni', value: 'Sunni' },
                { label: 'Shia', value: 'Shia' },
                { label: 'Hindu', value: 'Hindu' },
                { label: 'Shinto', value: 'Shinto' },
                { label: 'Totemist', value: 'Totemist' },
                { label: 'Inti', value: 'Inti' },
                { label: 'Tengri', value: 'Tengri' },
                { label: 'Animist', value: 'Animist' },
                { label: 'Fetishist', value: 'Fetishist' },
                { label: 'Confucian', value: 'Confucian' },
                { label: 'Ibadi', value: 'Ibadi' },
                { label: 'Mayan', value: 'Mayan' },
                { label: 'Nahuatl', value: 'Nahuatl' },
                { label: 'Coptic', value: 'Coptic' },
                { label: 'Mahayana', value: 'Mahayana' },
                { label: 'Theravada', value: 'Theravada' },
                { label: 'Vajrayana', value: 'Vajrayana' },
                { label: 'Alcheringa', value: 'Alcheringa' },
                { label: 'Sikh', value: 'Sikh' },
                { label: 'Orthodox', value: 'Orthodox' }
            ]
        );
    } else if (element === 'Tech') {
        return (
            [
                { label: 'Western', value: 'Western' },
                { label: 'Eastern', value: 'Eastern' },
                { label: 'Anatolian', value: 'Anatolian' },
                { label: 'Muslim', value: 'Muslim' },
                { label: 'Indian', value: 'Indian' },
                { label: 'Chinese', value: 'Chinese' },
                { label: 'East African', value: 'East African' },
                { label: 'West African', value: 'West African' },
                { label: 'Central African', value: 'Central African' },
                { label: 'Aboriginal', value: 'Aboriginal' },
                { label: 'Polynesian', value: 'Polynesian' },
                { label: 'Nomadic', value: 'Nomadic' },
                { label: 'Mesoamerican', value: 'Mesoamerican' },
                { label: 'Andean', value: 'Andean' },
                { label: 'North American', value: 'North American' },
                { label: 'South American', value: 'South American' }
            ]
        );
    } else if (element === 'National_Ideas') {
        return (
            [
                { label: 'American Southwest', value: 'American Southwest' },
                { label: 'Northeastern Woodlands', value: 'Northeastern Woodlands' },
                { label: 'Plains Native', value: 'Plains Native' },
                { label: 'Southeastern Woodlands', value: 'Southeastern Woodlands' },
                { label: 'Mayan', value: 'Mayan' },
                { label: 'Mesoamerican', value: 'Mesoamerican' },
                { label: 'West African', value: 'West African' },
                { label: 'Horn of African', value: 'Horn of African' },
                { label: 'Nepalese Princedom', value: 'Nepalese Princedom' },
                { label: 'French Ducal', value: 'French Ducal' },
                { label: 'Arabian', value: 'Arabian' }
            ]
        );
    }
    return (
        [
            
        ]
    );
}

function AddItem() {
    // There will be two types of adds, currently. Nations and National Ideas. The idea groups are expected to remain relatively unchanged in size.
    // We will need to be able to switch between the two adds. This will require two separate add renders to handle the difference.
    // NO METADATA RENDERING!
    const [type, setType] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <Grid container={true} spacing={2} >
                <Grid item={true} xs={2} >
                    <FormControl sx={{width: 200}}>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={'nations'}>Nations</MenuItem>
                            <MenuItem value={'national_ideas'}>National Ideas</MenuItem>
                        </Select>
                    </FormControl>                
                </Grid>
                <Grid item={true} xs={10}/>
            </Grid>
            <AddElements type={type} />
        </Box>
    );
};

export default AddItem;