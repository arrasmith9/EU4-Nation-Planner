import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Grid } from '@material-ui/core';
import { NationDef, NationIdea } from '../../interfaces';

interface NationProps {
    nation: NationDef;
    nationIdea: NationIdea;
}

function Nation(props: NationProps) {
    const [] = useState();

    return (
        <Paper style={{borderRadius: '15px'}}>
            <Grid container={true} style={{backgroundColor: '#365175', borderRadius: '15px'}} >
                <Grid item={true} xs={12} style={{textAlign: "center"}}>
                    <label style={{color: '#ffffff', fontWeight: 'bold', fontSize: 26}}>{props.nation.nation} {`(${props.nation.tag})`}</label>
                </Grid>
                <Grid item={true} xs={6} style={{backgroundColor: '#2d2b59', borderBottomLeftRadius: '15px'}}>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12}>
                            <div style={{width: '230px', height: '230px', marginLeft: '25px'}}>
                                <label style={{color: '#ffffff', marginLeft: '5px'}}>{'{Future Nation Logo Here}'}</label>
                            </div>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <label style={{color: '#e3dd36', fontWeight: 'bold', marginLeft: '5px'}}>Culture</label><br/>
                            <label style={{color: '#ffffff', textDecoration: 'underline', marginLeft: '20px'}}>{props.nation.culture}</label>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <label style={{color: '#e3dd36', fontWeight: 'bold', marginLeft: '5px'}}>Culture Group</label><br/>
                            <label style={{color: '#ffffff', textDecoration: 'underline', marginLeft: '20px'}}>{props.nation.culture_group}</label>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <label style={{color: '#e3dd36', fontWeight: 'bold', marginLeft: '5px'}}>Religion</label><br/>
                            <label style={{color: '#ffffff', textDecoration: 'underline', marginLeft: '20px'}}>{props.nation.religion}</label>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <label style={{color: '#e3dd36', fontWeight: 'bold', marginLeft: '5px'}}>Technology Group</label><br/>
                            <label style={{color: '#ffffff', textDecoration: 'underline', marginLeft: '20px'}}>{props.nation.tech}</label>
                        </Grid>
                    </Grid>
                </Grid>
                {/* For Ideas, consider two or more effects for one idea. Will need to consider. A \n will be in the data for that idea should it have more than one effect. */}
                <Grid item={true} xs={6} style={{backgroundColor: '#40665e', borderBottomRightRadius: '15px'}}>
                    <Grid item={true} xs={12}>
                        <label style={{color: '#e3dd36', fontWeight: 'bold', fontSize: 18}}>{props.nationIdea.title}</label>
                    </Grid>
                    <Grid item={true} xs={12} style={{ height: '15px' }}/>
                    <Grid item={true} xs={12}>
                        <label style={{color: '#e3dd36', fontWeight: 'bold'}}>Traditions</label><br/>
                        <div style={{marginLeft: '20px'}}>
                            <label style={{color: '#ffffff', whiteSpace: 'pre-wrap'}}>{props.nationIdea.traditions}</label>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <label style={{color: '#e3dd36', fontWeight: 'bold'}}>{props.nationIdea.idea_one_title}</label><br/>
                        <div style={{marginLeft: '20px'}}>
                            <label style={{color: '#ffffff', whiteSpace: 'pre-wrap'}}>{props.nationIdea.idea_one}</label>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <label style={{color: '#e3dd36', fontWeight: 'bold'}}>{props.nationIdea.idea_two_title}</label><br/>
                        <div style={{marginLeft: '20px'}}>
                            <label style={{color: '#ffffff', whiteSpace: 'pre-wrap'}}>{props.nationIdea.idea_two}</label>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <label style={{color: '#e3dd36', fontWeight: 'bold'}}>{props.nationIdea.idea_three_title}</label><br/>
                        <div style={{marginLeft: '20px'}}>
                            <label style={{color: '#ffffff', whiteSpace: 'pre-wrap'}}>{props.nationIdea.idea_three}</label>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <label style={{color: '#e3dd36', fontWeight: 'bold'}}>{props.nationIdea.idea_four_title}</label><br/>
                        <div style={{marginLeft: '20px'}}>
                            <label style={{color: '#ffffff', whiteSpace: 'pre-wrap'}}>{props.nationIdea.idea_four}</label>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <label style={{color: '#e3dd36', fontWeight: 'bold'}}>{props.nationIdea.idea_five_title}</label><br/>
                        <div style={{marginLeft: '20px'}}>
                            <label style={{color: '#ffffff', whiteSpace: 'pre-wrap'}}>{props.nationIdea.idea_five}</label>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <label style={{color: '#e3dd36', fontWeight: 'bold'}}>{props.nationIdea.idea_six_title}</label><br/>
                        <div style={{marginLeft: '20px'}}>
                            <label style={{color: '#ffffff', whiteSpace: 'pre-wrap'}}>{props.nationIdea.idea_six}</label>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <label style={{color: '#e3dd36', fontWeight: 'bold'}}>{props.nationIdea.idea_seven_title}</label><br/>
                        <div style={{marginLeft: '20px'}}>
                            <label style={{color: '#ffffff', whiteSpace: 'pre-wrap'}}>{props.nationIdea.idea_seven}</label>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <label style={{color: '#e3dd36', fontWeight: 'bold'}}>Ambition</label><br/>
                        <div style={{marginLeft: '20px'}}>
                            <label style={{color: '#ffffff', whiteSpace: 'pre-wrap'}}>{props.nationIdea.ambition}</label>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default Nation;