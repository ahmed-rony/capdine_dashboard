import React from 'react';
import './Menus.scss';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { mockDataMenus, mockDataPartnersMenus } from '../../Data/mockData';
import AddOnMenu from '../../Component/AddOnMenu/AddOnMenu';
import MobileMenu from '../../Component/MobileMenu/MobileMenu';
import Partners from '../../Component/Partners/Partners';
import { BsHouseFill } from 'react-icons/bs';
import { FaPeopleArrows } from 'react-icons/fa';

const Menus = () => {

    const columns = [
        { field: 'id', headerName: 'ID', Width: 40 },
        {
            field: 'meal', headerName: 'Meal', flex: 1, renderCell: ({ row: { imgUrl, meal } }) => {
                return (
                    <div className='meal'>
                        <img src={imgUrl} alt="" />
                        <span>{meal}</span>
                    </div>
                )
            }
        },
        { field: 'time', headerName: 'Prep. Time', flex: 1 },
        { field: 'price', headerName: 'Price', flex: 1 },
    ]
    const columns2 = [
        { field: 'id', headerName: 'ID', Width: 40 },
        {
            field: 'meal', headerName: 'Meal', flex: 1, renderCell: ({ row: { imgUrl, meal } }) => {
                return (
                    <div className='meal'>
                        <img src={imgUrl} alt="" />
                        <span>{meal}</span>
                    </div>
                )
            }
        },
        { field: 'time', headerName: 'Prep. Time', flex: 1 },
        { field: 'price', headerName: 'Price', flex: 1 },
        {
            field: 'restaurant', headerName: 'Restaurant', flex: 1, renderCell: ({ row: { logo, restaurant } }) => {
                return (
                    <div className='restaurant'>
                        <img src={logo} alt="" />
                        <span>{restaurant}</span>
                    </div>
                )
            }
        },
    ]

    return (
        <div className='menus'>
            <div className="title">
                <h1>Menus</h1>
            </div>
            <div className="menu-content">
                <AddOnMenu />
                <Partners />
                <Paper elevation={3} className='grid-content'>
                    <div className="menu-header">
                        <h3>House Menu <BsHouseFill /></h3>
                    </div>
                    <DataGrid
                        rows={mockDataMenus}
                        columns={columns}
                        components={{ Toolbar: GridToolbar }}
                    />
                </Paper>
                <Paper elevation={3} className='grid-content'>
                    <div className="menu-header">
                        <h3>Partners' Menu <FaPeopleArrows /></h3>
                    </div>
                    <DataGrid
                        rows={mockDataPartnersMenus}
                        columns={columns2}
                        components={{ Toolbar: GridToolbar }}
                    />
                </Paper>
                {/* for mobile */}
                <MobileMenu />
            </div>
        </div>
    );
};

export default Menus;