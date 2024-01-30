import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IdeaGroupDef } from '../../interfaces';
import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@material-ui/core';
import IdeaGroup from './ideaGroup';

interface IdeaGroupsProps {
    
}

function IdeaGroups(props: IdeaGroupsProps) {

    const [ideaGroups, setIdeaGroups] = useState<IdeaGroupDef[]>([])

    const getIdeaGroups = () => {
        axios.get(`http://localhost:3949/getdata?table=idea_groups&select=id,idea_group_name,idea_name1,idea_effect1,idea_name2,idea_effect2,idea_name3,idea_effect3,idea_name4,idea_effect4,idea_name5,idea_effect5,idea_name6,idea_effect6,idea_name7,idea_effect7,bonus,idea_mana_type&orderByField=idea_mana_type&orderByDirection=asc`).then((res: any) => {
            setIdeaGroups(res.data)
        });
    }

    useEffect(() => {
        getIdeaGroups();
    }, []);

    const renderIdeaGroups = (manaType: string) => {
        const ideasToRender: JSX.Element[] = [];
        for (let i = 0; i < ideaGroups.length; i++) {
            if (ideaGroups[i].idea_mana_type === manaType) {
                ideasToRender.push(
                    <Accordion key={`${manaType}${i}`}>
                        <AccordionSummary
                            style={{ color: 'white', backgroundColor: '#365175', fontWeight: 'bold', fontSize: '20px' }}
                            aria-controls="panel1-content"
                            id={`${manaType}${i}`}
                        >
                           {ideaGroups[i].idea_group_name}
                        </AccordionSummary>
                        <AccordionDetails style={{ color: 'white', backgroundColor: '#2d2b59' }} >
                            <IdeaGroup ideaGroup={ideaGroups[i]} />
                        </AccordionDetails>
                    </Accordion>
                )
            }
        }
        return ideasToRender;
    }

    return (
        <Grid container={true} spacing={3}>
            <Grid item={true} xs={12} sm={4}>
                {renderIdeaGroups('adm')}
            </Grid>
            <Grid item={true} xs={12} sm={4}>
                {renderIdeaGroups('dip')}
            </Grid>
            <Grid item={true} xs={12} sm={4}>
                {renderIdeaGroups('mil')}
            </Grid>
        </Grid>
    )
}

export default IdeaGroups;