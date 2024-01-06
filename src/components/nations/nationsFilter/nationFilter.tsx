import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { filterObj } from '../../../interfaces';

interface NationFilterProps {
    filterInd: number;
    setFilterVal: (ind: number, field: string, value: string) => void;
    removeFilter: (ind: number) => void;
    filterObj: filterObj;
}

function NationFilter(props: NationFilterProps) {
    const [selectedSearchField, setSelectedSearchField] = useState<String | null>(props.filterObj.field);
    const [selectedValueField, setSelectedValueField] = useState<String | null>(props.filterObj.value);

    const renderMenuItems = () => {
        return ([
            <MenuItem key={'nation'} value={'nation'}>Nation</MenuItem>,
            <MenuItem key={'tag'} value={'tag'}>Tag</MenuItem>,
            <MenuItem key={'culture'} value={'culture'}>Culture</MenuItem>,
            <MenuItem key={'culture_group'} value={'culture_group'}>Culture Group</MenuItem>,
            <MenuItem key={'religion'} value={'religion'}>Religion</MenuItem>,
            <MenuItem key={'tech'} value={'tech'}>Technology Group</MenuItem>,
            <MenuItem key={'national_idea'} value={'national_idea'}>National Ideas</MenuItem>]
        )
    }
    const handleChange = (event: any) => {
        setSelectedSearchField(event.target.value)
    }

    const handleTextChange = (event: any) => {
        props.setFilterVal(props.filterInd, selectedSearchField as string, event.target.value)
    }
    
    useEffect(() => {
        setSelectedSearchField(props.filterObj.field);
        setSelectedValueField(props.filterObj.value);
    }, [props.filterObj]);

    return (
        <Grid key={props.filterInd} container={true} spacing={2} >
            <Grid item={true} xs={5}>
                <TextField
                    onChange={handleChange}
                    label={'Field'}
                    select={true}
                    style={{width: '100%'}}
                    value={selectedSearchField}
                >
                    {renderMenuItems()}
                </TextField>
            </Grid>
            <Grid item={true} xs={5}>
                <TextField
                    style={{width: '100%'}}
                    label="Value"
                    variant="standard"
                    onChange={handleTextChange}
                    value={selectedValueField}
                />
            </Grid>
            <Grid item={true} xs={2}>
                <Button onClick={() => props.removeFilter(props.filterInd)} >-</Button>
            </Grid>
        </Grid>
        // Add in "X" to allow for removal of a filter from this level. This will remove filter by index value, while also re-structuring the other filter's index values to their new positions.
    )
}
export default NationFilter;