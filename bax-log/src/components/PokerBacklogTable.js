import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

    { field: 'status', headerName: <strong>{'Status'}</strong>, width: 90 },
    { field: 'header', headerName: <strong>{'Header'}</strong>, width: 90 },
    { field: 'description', headerName: <strong>{'Description'}</strong>, width: 150 },
];

const rows = [
    { id: 1, status: 'Active', header: '#234', description: "Task description will be here" },
    { id: 2, status: 'Passive', header: '#235', description: "Task description will be here" },
    { id: 3, status: 'Passive', header: '#236', description: "Task description will be here" },
    { id: 4, status: 'Active', header: '#237', description: "Task description will be here" },
    { id: 5, status: 'Passive', header: '#238', description: "Task description will be here" },
    { id: 6, status: 'Passive', header: '#584', description: "Task description will be here" },
    { id: 7, status: 'Active', header: '#239', description: "Task description will be here" },
    { id: 8, status: 'Passive', header: '#240', description: "Task description will be here" },
    { id: 9, status: 'Active', header: '#234', description: "Task description will be here" },
    { id: 10, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 11, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 12, status: 'Active', header: '#234', description: "Task description will be here" },
    { id: 13, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 14, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 15, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 16, status: 'Active', header: '#234', description: "Task description will be here" },
    { id: 17, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 18, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 19, status: 'Active', header: '#234', description: "Task description will be here" },
    { id: 20, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 21, status: 'Active', header: '#234', description: "Task description will be here" },
    { id: 23, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 24, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 25, status: 'Active', header: '#234', description: "Task description will be here" },
    { id: 26, status: 'Passive', header: '#584', description: "Task description will be here" },
    { id: 27, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 28, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 29, status: 'Passive', header: '#234', description: "Task description will be here" },
];

export default function DataTable() {
    return (
        <div style={{ height: 860, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10, 15, 20, 25]}
            />
        </div>
    );
}