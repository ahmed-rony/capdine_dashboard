import React, { useState } from 'react';
import './Navbar.scss';
import { FaSearch } from 'react-icons/fa';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { AiTwotoneSetting, AiFillFileText, AiFillWarning } from 'react-icons/ai';
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
                        className='notify'
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
                            <span className='header'>ALERTS CENTER</span>
                            <div className="item">
                                <div className="left">
                                    <span className='doc'><AiFillFileText /></span>
                                </div>
                                <div className="right">
                                    <small>January 28, 2023</small>
                                    <span>A new month report is ready to download</span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="left">
                                    <span className='success'><RiMoneyDollarCircleFill /></span>
                                </div>
                                <div className="right">
                                    <small>January 28, 2023</small>
                                    <span>$290.29 has been deposited into your account!</span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="left">
                                    <span className='warning'><AiFillWarning /></span>
                                </div>
                                <div className="right">
                                    <small>January 28, 2023</small>
                                    <span>Spending Alert: We've noticed unusually high spending for your account.</span>
                                </div>
                            </div>
                            <Link to='/'>
                                <span className='show-all'>SHOW ALL ALERTS</span>
                            </Link>
                        </div>
                    </Popover>
                </div>
                <div className='option'>
                    <Link to='/settings'>
                        <AiTwotoneSetting className='icon' />
                    </Link>
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