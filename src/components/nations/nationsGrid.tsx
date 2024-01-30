import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { NationDef, NationIdea } from '../../interfaces';

interface NationsGridProps {
    nations: NationDef[];
    nationIdeas: NationIdea[];
    compareSelectedNations: (selectedNations: NationDef[]) => void;
}

function NationsGrid(props: NationsGridProps) {
    const [selectedNations, setSelectedNations] = useState<number[]>([]);
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', width: 230 },
        { field: 'nation', headerName: 'Nation', width: 230 },
        { field: 'tag', headerName: 'Tag', width: 230 },
        { field: 'culture', headerName: 'Culture', width: 230 },
        { field: 'culture_group', headerName: 'Culture Group', width: 230 },
        { field: 'religion', headerName: 'Religion', width: 230 },
        { field: 'tech', headerName: 'Technology', width: 230 },
        { field: 'national_idea', headerName: 'National Ideas', width: 230 }
    ];

    const prepareNationCompare = () => {
        // Assumption here is that the search request has both nations and national ideas. A new network call is not necessary.
        // Selection maintains the order of the rows as selected. Thus, that order will be respected in the building of the data.
        const selectedNationsCompare: NationDef[] = []
        for (const id of selectedNations) {
            for (let i = 0; i < props.nations.length; i++) {
                if (props.nations[i].id === id) {
                    selectedNationsCompare.push(props.nations[i]);
                }
            }
        }
        props.compareSelectedNations(selectedNationsCompare)
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <Button onClick={ () => prepareNationCompare() }>Compare Selected</Button>
            <DataGrid
                rows={props.nations}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection={true}
                onSelectionModelChange={(rowSelectionModel: any, details: any) => { setSelectedNations(rowSelectionModel) }}
            />
        </div>
    );
}

export default NationsGrid;