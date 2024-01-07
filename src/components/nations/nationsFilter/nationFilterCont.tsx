import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import NationFilter from './nationFilter';
import { filterObj } from '../../../interfaces';

interface NationFilterContProps {
    getNationData: (filter: string) => void;
}

// `(${selectedSearchField} eq '${searchVal}')`
function NationFilterCont(props: NationFilterContProps) {
    const [filterArr, setFilterArr] = useState<filterObj[]>([]);
    const [filterComp, setFilterComp] = useState<JSX.Element[]>([]);

    const filterChange = (ind: number, field: string, value: string) => {
        const filterArrClone: filterObj[] = JSON.parse(JSON.stringify(filterArr));
        filterArrClone[ind] = {field, value};
        setFilterArr(filterArrClone);
    }

    const addFilters = () => {
        const filterArrClone: filterObj[] = JSON.parse(JSON.stringify(filterArr));
        filterArrClone.push({field: 'nation', value: ''});
        setFilterArr(filterArrClone);
    }

    const removeFilter = (ind: number) => {
        const filterArrClone: filterObj[] = JSON.parse(JSON.stringify(filterArr));
        filterArrClone.splice(ind, 1);
        setFilterArr(filterArrClone);
    }

    const createFilters = () => {
        const filters = [];
        for (let i = 0; i < filterArr.length; i++) {
            filters.push(
                <Grid key={i} item={true} xs={12} sm={6} md={8}>
                    <NationFilter filterInd={i} setFilterVal={filterChange} removeFilter={removeFilter} filterObj={filterArr[i]}  />
                </Grid>
            )
        }
        console.log(filters);
        setFilterComp(filters);
    }

    useEffect(() => {
        filterChange(0, 'nation', '')
    }, []);

    useEffect(() => {
        createFilters()
    }, [filterArr]);

    const buildFilterString = () => {
        let filterString = '';
        for (let i = 0; i < filterArr.length; i++) {
            filterString = filterString.concat(`(${filterArr[i].field} eq ${filterArr[i].value})`);
            if (i !== filterArr.length - 1) {
                filterString = filterString.concat(' and ');
            }
        }
        return filterString;
    }
    
    return (
        <Grid container={true} spacing={2} >
            <Grid item={true} xs={12} sm={6} md={9}>
                {filterComp}
            </Grid>
            <Grid item={true} xs={12} sm={6} md={3}>
                <Button onClick={() =>  addFilters()} >+</Button>
                <Button onClick={() => props.getNationData(buildFilterString())} >Search</Button>
            </Grid>
        </Grid>
    )
}

export default NationFilterCont;