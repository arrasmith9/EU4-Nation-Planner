import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@material-ui/core';
import Nation from './nation';
import NationsGrid from './nationsGrid';
import { NationDef, NationIdea } from '../../interfaces';
import TextField from '@mui/material/TextField';
import nationData from '../../localdata/nation.json';
import nationalIdeaData from '../../localdata/nationalIdeas.json'

function Nations(props: any) {
    const [nations, setNations] = useState<NationDef[]>(nationData);
    const [nationIdeas, setNationIdeas] = useState<NationIdea[]>(nationalIdeaData);
    const [selectedNations, setSelectedNations] = useState<NationDef[]>([]);
    const [selectedNationIdeas, setSelectedNationIdeas] = useState<NationIdea[]>([]);
    const [selectedSearchField, setSelectedSearchField] = useState<String | null>(null);
    const [searchVal, setSearchVal] = useState<String>('');
    // The main containing hook. Will ideally be calling OTHER hooks to obtain the information from the server. Then passed where necessary.
    // useEffect(() => {
    //     getNationsInfo(setNations, setNationIdeas);
    // }, []);

    
    const buildNationCards = () => {
        const nationCards: any[] = [];
        for (let i = 0; i < selectedNations.length; i++) {
            for (let j = 0; j < selectedNationIdeas.length; j++) {
                if (selectedNationIdeas[j].tags.indexOf(selectedNations[i].tag) !== -1) {
                    nationCards.push(
                        <Grid item={true} xs={4} >
                            <Nation
                                nation={selectedNations[i]}
                                nationIdea={selectedNationIdeas[j]}
                            />                        
                        </Grid>
                    );
                    j = selectedNationIdeas.length;
                }
            }
        }

        return (
            <Grid container={true} spacing={2} >
                {nationCards}
            </Grid>
        )
    }

    const compareSelectedNations = (selectedNations: NationDef[]) => {
        // We will need to make a request for the national ideas of the selected nations. We can not exactly go off of the tag, due to multiple nations being connected to a national idea.
        // Instead, it will be by unique nation.national_idea.
        const uniqueNatIdeas: string[] = [];
        for (const selectedNation of selectedNations) {
            if (!uniqueNatIdeas.includes(selectedNation.national_idea)) {
                uniqueNatIdeas.push(selectedNation.national_idea)
            }
        }

        // const promises: Promise<any>[] = [];
        // for (const uniqueNatIdea of uniqueNatIdeas) {
        //     promises.push(axios.post('http://localhost:3949/getdata', {
        //         table: 'nation_ideas',
        //         select: 'id,tags,title,traditions,idea_one_title,idea_one,idea_two_title,idea_two,idea_three_title,idea_three,idea_four_title,idea_four,idea_five_title,idea_five,idea_six_title,idea_six,idea_seven_title,idea_seven,ambition',
        //         order_by: { field: 'title', direction: 'asc' },
        //         filter: `(title eq ${uniqueNatIdea})`
        //     }));
        // }

        // Promise.all(promises).then((res: any) => {
            // let natIdeaData: NationIdea[] = [];
            // for (const item of res) {
            //     natIdeaData.push(item.data);
            // }
            setSelectedNations(selectedNations);
            setSelectedNationIdeas(nationIdeas);
        // })
    }

    const getNationData = () => {
        axios.post('http://localhost:3949/getdata', {
            table: 'nations',
            select: 'id,nation,tag,culture,culture_group,religion,tech,national_idea',
            order_by: { field: 'nation', direction: 'asc' },
            filter: `(${selectedSearchField} eq '${searchVal}')`
        }).then((res: any) => {
            setNations(res.data);
        });
    }

    const handleChange = (event: any) => {
        setSelectedSearchField(event.target.value)
    }

    const renderMenuItems = () => {
        return ([
            <MenuItem value={'nation'}>Nation</MenuItem>,
            <MenuItem value={'tag'}>Tag</MenuItem>,
            <MenuItem value={'culture'}>Culture</MenuItem>,
            <MenuItem value={'culture_group'}>Culture Group</MenuItem>,
            <MenuItem value={'religion'}>Religion</MenuItem>,
            <MenuItem value={'tech'}>Technology Group</MenuItem>,
            <MenuItem value={'national_idea'}>National Ideas</MenuItem>]
        )
    }

    if (selectedNations.length > 0) {
        // May need to place this in some sort of container as well. Mutiple items in question.
        return buildNationCards()
    } else {
        return (
            <Grid container={true} spacing={2}>
                <Grid item={true} xs={12}>
                    <Grid container={true} spacing={2} >
                        <Grid item={true} xs={3}>
                            <TextField
                                onChange={handleChange}
                                label={'Field'}
                                select={true}
                                style={{width: '100%'}}
                            >
                                {renderMenuItems()}
                            </TextField>
                        </Grid>
                        <Grid item={true} xs={3}>
                            <TextField style={{width: '100%'}} label="Value" variant="standard" onChange={(event: any) => setSearchVal(event.target.value)} />
                        </Grid>
                        <Grid>
                            <Button onClick={getNationData} >Search</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item={true} xs={12} >
                <NationsGrid
                    nations={nations}
                    nationIdeas={nationIdeas}
                    compareSelectedNations={(selectedNations: NationDef[]) => compareSelectedNations(selectedNations)}
                />
                </Grid>
            </Grid>
        );
    }
}


function getNationsInfo(setNations: (value: NationDef[]) => void, setNationIdeas: (value: NationIdea[]) => void) {
    const promises: Promise<any>[] = [];
    promises.push(axios.post('http://localhost:3949/getdata', {
        table: 'nations',
        select: 'id,nation,tag,culture,culture_group,religion,tech,national_idea',
        order_by: { field: 'nation', direction: 'asc' }
    }));
    promises.push(axios.post('http://localhost:3949/getdata', {
        table: 'nation_ideas',
        select: 'id,tags,title,traditions,idea_one_title,idea_one,idea_two_title,idea_two,idea_three_title,idea_three,idea_four_title,idea_four,idea_five_title,idea_five,idea_six_title,idea_six,idea_seven_title,idea_seven,ambition',
        order_by: { field: 'title', direction: 'asc' }
    }))
    Promise.all(promises).then((res: any) => {
        setNations(res[0].data);
        setNationIdeas(res[1].data);
    })
}

export default Nations;