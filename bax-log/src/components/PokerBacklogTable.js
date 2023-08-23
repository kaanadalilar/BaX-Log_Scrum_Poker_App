import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

    { field: 'status', headerName: 'Status', width: 90 },
    { field: 'header', headerName: 'Header', width: 90 },
    { field: 'description', headerName: 'Description', width: 150 },
];

const rows = [
    { id: 1, status: 'Snow', header: 'Jon', description: 35 },
    { id: 2, status: 'Lannister', header: 'Cersei', description: 42 },
    { id: 3, status: 'Lannister', header: 'Jaime', description: 45 },
    { id: 4, status: 'Stark', header: 'Arya', description: 16 },
    { id: 5, status: 'Targaryen', header: 'Daenerys', description: 'null' },
    { id: 6, status: 'Melisandre', header: '#584', description: 150 },
    { id: 7, status: 'Clifford', header: 'Ferrara', description: 44 },
    { id: 8, status: 'Frances', header: 'Rossini', description: 36 },
    { id: 9, status: 'Roxie', header: 'Harvey', description: 65 },
    { id: 10, status: 'Snow', header: 'Jon', description: 35 },
    { id: 12, status: 'Lannister', header: 'Cersei', description: 42 },
    { id: 13, status: 'Lannister', header: 'Jaime', description: 45 },
    { id: 14, status: 'Stark', header: 'Arya', description: 16 },
    { id: 15, status: 'Targaryen', header: 'Daenerys', description: 'null' },
    { id: 16, status: 'Melisandre', header: '#584', description: 150 },
    { id: 17, status: 'Clifford', header: 'Ferrara', description: 44 },
    { id: 18, status: 'Frances', header: 'Rossini', description: 36 },
    { id: 19, status: 'Roxie', header: 'Harvey', description: 65 },
    { id: 20, status: 'Snow', header: 'Jon', description: 35 },
    { id: 21, status: 'Lannister', header: 'Cersei', description: 42 },
    { id: 23, status: 'Lannister', header: 'Jaime', description: 45 },
    { id: 24, status: 'Stark', header: 'Arya', description: 16 },
    { id: 25, status: 'Targaryen', header: 'Daenerys', description: 'null' },
    { id: 26, status: 'Melisandre', header: '#584', description: 150 },
    { id: 27, status: 'Clifford', header: 'Ferrara', description: 44 },
    { id: 28, status: 'Frances', header: 'Rossini', description: 36 },
    { id: 29, status: 'Roxie', header: 'Harvey', description: 65 },
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