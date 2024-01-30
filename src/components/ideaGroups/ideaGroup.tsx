import React, { useState } from 'react';
import { IdeaGroupDef } from '../../interfaces';
import { Grid } from '@material-ui/core';

interface IdeaGroupProps {
    ideaGroup: IdeaGroupDef;
}

function IdeaGroup(props: IdeaGroupProps) {

    const renderIdeaContent = () => {
        const ideaContent: JSX.Element[] = [];
        // All Idea Groups have seven items. Thus, we can explicitly limit the loop to 7.
        for (let i = 1; i <= 7; i++) {
            ideaContent.push(
                <Grid item={true} xs={12} >
                    <Grid container={true} spacing={2} >
                        <Grid item={true} xs={12} >
                            <span style={{ fontWeight: 'bold', color: '#e3dd36' }} >
                                {props.ideaGroup[`idea_name${i}` as keyof IdeaGroupDef]}
                            </span>
                        </Grid>
                        <Grid item={true} xs={12} >
                            {renderDetailItem(props.ideaGroup[`idea_effect${i}` as keyof IdeaGroupDef] as string)}
                        </Grid>
                    </Grid>
                </Grid>
            );
        }
        return ideaContent;
    }

    const renderDetailItem = (str: string) => {
        const detailItems: JSX.Element[] = []
        if (str.indexOf('\\n') !== -1) {
            const splitStr: string[] =  str.split('\\n');
            for (const strItem of splitStr) {
                detailItems.push(
                    <span>{strItem}<br/></span>
                )
            }
        } else {
            detailItems.push(
                <span>{str}</span>
            )
        }
        return detailItems;
    }

    return (
        <Grid container={true} spacing={2} >
            {renderIdeaContent()}
            <Grid item={true} xs={12} >
                <span style={{ fontWeight: 'bold' }} >
                    Idea Bonus
                </span>
            </Grid>
            <Grid item={true} xs={12} >

                {renderDetailItem(props.ideaGroup.bonus)}
            </Grid>
        </Grid>
    )
}

export default IdeaGroup;