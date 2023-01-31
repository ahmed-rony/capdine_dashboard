import React from 'react';
import './Menus.scss';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { mockDataContacts } from '../../Data/mockData';

const Menus = () => {
    const columns = [
        { field: "id", headerName: "ID" },
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left' },
        { field: 'phone', headerName: 'Phone Number', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: "address", headerName: "Address", flex: 1, },
    ]

    return (
        <div className='menus'>
            <div className="title">
                <h1>Menus</h1>
            </div>
            <Paper elevation={3} className='grid-content'>
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{Toolbar: GridToolbar}}
                />
            </Paper>
        </div>
    );
};

export default Menus;