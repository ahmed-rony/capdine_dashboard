import React from 'react';
import './Orders.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { mockDataTeam } from '../../Data/mockData';


const Orders = () => {
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name', flex: 1},
        { field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left' },
        { field: 'phone', headerName: 'Phone Number', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
    ]

    return (
        <div className='orders'>
            <div className="title">
                <h1>Latest Orders</h1>
            </div>
            <Paper elevation={3} className='grid-content'>
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </Paper>
        </div>
    );
};

export default Orders;