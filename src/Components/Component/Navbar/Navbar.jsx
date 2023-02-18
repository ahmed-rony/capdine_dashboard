import React, { useState } from 'react';
import './Navbar.scss';
import { FaSearch } from 'react-icons/fa';
import { ImMenu } from 'react-icons/im';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { AiTwotoneSetting, AiFillFileText, AiFillWarning } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';
import { Popover } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../images/CAPDINE-logo-BLACK 01.png';
import { Offcanvas } from 'react-bootstrap';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openOffcanvas = () => setIsOpen(true);
    const closeOffcanvas = () => setIsOpen(false);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <div className='navbar'>
                <div className="search">
                    <input type="text" placeholder='Search for..' />
                    <button className='brand-btn'><FaSearch /></button>
                </div>
                <div className="mob-logo">
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
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
                    <div className='option setting1'>
                        <Link to='/settings'>
                            <AiTwotoneSetting className='icon' />
                        </Link>
                        <span className='updates'></span>
                    </div>

                    <div className='option mo-option'>
                        <ImMenu className='icon' onClick={openOffcanvas} />
                    </div>
                    <Link to='/settings'>
                        <div className="user">
                            <span>Samantha Moon</span>
                            <img src="https://i.pinimg.com/236x/28/9f/d8/289fd81eff482949df60680cdb03c7a4.jpg" alt="" />
                        </div>
                    </Link>
                </div>
            </div>
            <Offcanvas show={isOpen} onHide={closeOffcanvas} placement='start' className='offcanvas'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='title'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMsIQjVDI_yrFB4vUjX15TdFRan7SOUFyEg&usqp=CAU" alt="" />
                        <span>Pizza Hut</span>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='content'>
                    <div className="menus">
                        <ul onClick={closeOffcanvas}>
                            <Link to='/' className='menu'><li>Dashboard</li></Link>
                            <Link to='/orders' className='menu'><li>Orders</li></Link>
                            <Link to='/menus' className='menu'><li>Menus</li></Link>
                            <Link to='/account' className='menu'><li>Account</li></Link>
                            <Link to='/settings' className='menu'><li>Settings</li></Link>
                            <Link to='/payment' className='menu'><li>Payment</li></Link>
                            <Link to='/FAQ' className='menu'><li>FAQ</li></Link>
                        </ul>
                        <button>Logout</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Navbar;