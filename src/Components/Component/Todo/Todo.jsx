import { Paper } from '@mui/material';
import React, { useState } from 'react';
import './Todo.scss';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import AddEvent from '../AddEvent/AddEvent';

const Todo = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Paper elevation={3} className="todos">
                <div className="header">
                    <div>
                        <h4>Todo List</h4>
                    </div>
                    <span onClick={handleOpen}>Add Event<MdOutlineAddCircleOutline /></span>
                </div>
                    <AddEvent open={open} handleClose={handleClose} />
                <div className="content">
                    <div className="item">
                        <span>Lunch meeting</span>
                        <small>10:30 AM</small>
                    </div>
                    <div className="item">
                        <span>Partners' meeting</span>
                        <small>10:30 AM</small>
                    </div>
                    <div className="item">
                        <span>Dinner meeting</span>
                        <small>10:30 AM</small>
                    </div>
                    <div className="item">
                        <span>Dinner meeting</span>
                        <small>10:30 AM</small>
                    </div>
                    <div className="item">
                        <span>Dinner meeting</span>
                        <small>10:30 AM</small>
                    </div>
                    <div className="item">
                        <span>Dinner meeting</span>
                        <small>10:30 AM</small>
                    </div>
                    <div className="item">
                        <span>Dinner meeting</span>
                        <small>10:30 AM</small>
                    </div>
                    <div className="item">
                        <span>Dinner meeting</span>
                        <small>10:30 AM</small>
                    </div>
                    <div className="item">
                        <span>Dinner meeting</span>
                        <small>10:30 AM</small>
                    </div>
                    <div className="item">
                        <span>Dinner meeting</span>
                        <small>10:30 AM</small>
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default Todo;