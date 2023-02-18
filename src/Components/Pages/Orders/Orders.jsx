import React, { useState } from 'react';
import './Orders.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Accordion, AccordionDetails, AccordionSummary, Paper } from '@mui/material';
import { mockDataOrder } from '../../Data/mockData';
import { MdExpandMore, MdOutlineAccessTimeFilled, MdPeopleAlt } from 'react-icons/md';
import { SiAirtable } from 'react-icons/si';
import { FaUser, FaPeopleArrows } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { BsHouseFill } from 'react-icons/bs';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import OrderDetail from '../../Component/OrderDetail/OrderDetail';

const Orders = () => {
    const [open, setOpen] = useState(false);
    const [order, setOrder] = useState();
    const handleOpen = (props) => { setOpen(true); setOrder(props) };
    const handleClose = () => setOpen(false);

    const columns = [
        { field: 'id', headerName: 'ID', hide: true },
        { field: 'name', headerName: 'Name', Width: 120 },
        {
            field: 'meal', headerName: 'Meal', renderCell: ({ row: { meal } }) => {

                return (
                    <>
                        <div className='meal'>
                            <button onClick={() => handleOpen(meal)}>Details</button>
                        </div>
                    </>
                )
            }
        },
        { field: 'table', headerName: 'Table N', },
        { field: 'time', headerName: 'Time', },
        { field: 'price', headerName: 'Price', },
        { field: 'payment', headerName: 'Payment', },
        { field: 'ordered', headerName: 'Ordered', },
    ]
    const columns2 = [
        { field: 'id', headerName: 'ID', hide: true },
        { field: 'name', headerName: 'Name', Width: 120 },
        {
            field: 'meal', headerName: 'Meal', renderCell: ({ row: { meal } }) => {

                return (
                    <>
                        <div className='meal'>
                            <button className='brand-btn' onClick={() => handleOpen(meal)}>Details</button>
                        </div>
                    </>
                )
            }
        },
        { field: 'table', headerName: 'Table N', },
        { field: 'time', headerName: 'Time', },
        { field: 'price', headerName: 'Price', },
        { field: 'payment', headerName: 'Payment', },
    ]
    return (
        <section className='orders'>
            <div className="title">
                <h1>Latest Orders</h1>
            </div>
            <Paper elevation={3} className='grid-content'>
                <div className="order-header">
                    <h3>House Order <BsHouseFill /></h3>
                </div>
                <DataGrid
                    rows={mockDataOrder}
                    columns={columns}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </Paper>
            <Paper elevation={3} className='grid-content'>
                <div className="order-header">
                    <h3>Partners' Order <FaPeopleArrows /></h3>
                </div>
                <DataGrid
                    rows={mockDataOrder}
                    columns={columns2}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </Paper>
            <OrderDetail order={order} open={open} handleClose={handleClose} />

            {/* for mobile */}
            <div className="mobile-order">
                <div className="order-header">
                    <h3>House Order <BsHouseFill /></h3>
                </div>
                <ul className='heading'>
                    <li>Table No</li>
                    <li>Time</li>
                    <li>Price</li>
                </ul>
                <div className="content">
                    {mockDataOrder.map((item) => (
                        <Accordion key={item.id}>
                            <AccordionSummary expandIcon={<MdExpandMore className='header-icon' />} className='header'>
                                <ul>
                                    <li><SiAirtable /><span>{item.table}</span></li>
                                    <li><MdOutlineAccessTimeFilled /><span>{item.time}</span></li>
                                    <li><RiMoneyDollarCircleFill /><span>{item.price}</span></li>
                                </ul>
                            </AccordionSummary>
                            <AccordionDetails className='details'>
                                <div className="info">
                                    <span><FaUser />{item.name}</span>
                                    <span>Payment: {item.payment}</span>
                                </div>
                                <ul>
                                    {item.meal?.map((food) => (
                                        <li><span><GiMeal />{food.name}</span><small>x{food.quantity}</small></li>
                                    ))}
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
            <div className="mobile-order">
                <div className="order-header">
                    <h3>Partners' Order <FaPeopleArrows /></h3>
                </div>
                <ul className='heading heading-2'>
                    <li>Time</li>
                    <li>Price</li>
                </ul>
                <div className="content">
                    {mockDataOrder.map((item) => (
                        <Accordion key={item.id}>
                            <AccordionSummary expandIcon={<MdExpandMore className='header-icon' />} className='header'>
                                <ul>
                                    <li><MdOutlineAccessTimeFilled /><span>{item.time}</span></li>
                                    <li><RiMoneyDollarCircleFill /><span>{item.price}</span></li>
                                </ul>
                            </AccordionSummary>
                            <AccordionDetails className='details'>
                                <div className="info">
                                    <span><FaUser />{item.name}</span>
                                    <span>Payment: {item.payment}</span>
                                </div>
                                <ul>
                                    {item.meal?.map((food) => (
                                        <li><span><GiMeal />{food.name}</span><small>x{food.quantity}</small></li>
                                    ))}
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Orders;