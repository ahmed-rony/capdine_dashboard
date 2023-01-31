import React, { useState } from 'react';
import './Navbar.scss';
import { FaSearch } from 'react-icons/fa';
import { AiTwotoneSetting, AiFillFileText } from 'react-icons/ai';
import { MdNotifications, MdEmail } from 'react-icons/md';
import { Popover } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className='navbar'>
            <div className="search">
                <input type="text" placeholder='Search for..' />
                <button><FaSearch /></button>
            </div>
            <div className="options">
                <div className='option'>
                    <MdNotifications className='icon' onClick={handleClick} />
                    <span className='updates'></span>
                    <Popover
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <div className="notify-pop">
                            <div className="item">
                                <div className="left">
                                    <span><AiFillFileText /></span>
                                </div>
                                <div className="right">
                                    <small>January 28, 2023</small>
                                    <span>A new month report is ready to download</span>
                                </div>
                            </div>
                        </div>
                    </Popover>
                </div>
                <div className='option'>
                    <MdEmail className='icon' />
                    <span className='updates'></span>
                </div>
                <div className='option'>
                    <AiTwotoneSetting className='icon' />
                    <span className='updates'></span>
                </div>
                <Link to='account'>
                    <div className="user">
                        <span>Samantha Moon</span>
                        <img src="https://i.pinimg.com/236x/28/9f/d8/289fd81eff482949df60680cdb03c7a4.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;