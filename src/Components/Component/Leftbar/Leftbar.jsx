import React, { useState } from 'react';
import './Leftbar.scss';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { FiHome } from 'react-icons/fi';
import {  AiOutlinePieChart } from 'react-icons/ai';
import { FaQuestion, FaChartArea } from 'react-icons/fa';
import { ImMenu } from 'react-icons/im';
import { MdRestaurantMenu, MdSettings, MdOutlineAccountCircle, MdOutlinePayment } from 'react-icons/md';
import { BiMoney, BiLineChart } from 'react-icons/bi';
import logo from '../../images/CAPDINE-logo-WHITE 01.png';



const Leftbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState(false);
    const { collapseSidebar } = useProSidebar();

    const Item = ({ title, icon, selected, setSelected }) => {
        return (
            <MenuItem
                active={selected === title}
                className='item'
                onClick={() => setSelected(title)}
                icon={icon}
            >
                {!isCollapsed && <span>{title}</span>}
            </MenuItem>
        );
    };

    return (
        <Sidebar className='sidebar' collapsed={isCollapsed}>
            <Menu className='menu'>
                {/* LOGO */}
                <MenuItem className='header' onClick={() => { collapseSidebar(), setIsCollapsed(!isCollapsed) }} icon={isCollapsed ? <ImMenu /> : undefined}>
                    {!isCollapsed && (
                        <Box className='logo'>
                            <img src={logo} alt="" />
                            <ImMenu />
                        </Box>
                    )}
                </MenuItem>

                {/* USER */}
                {!isCollapsed && (
                    <Box className="user">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMsIQjVDI_yrFB4vUjX15TdFRan7SOUFyEg&usqp=CAU" alt="" />
                        <span>Pizza Hut</span>
                        <small>22bis Rue Jean Nicot, 75007 Paris, France</small>
                    </Box>
                )}
                {isCollapsed && (
                    <Box className="user2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMsIQjVDI_yrFB4vUjX15TdFRan7SOUFyEg&usqp=CAU" alt="" />
                    </Box>
                )}
                <Box>
                    <Link to='/'>
                        <Item
                            title='Dashboard'
                            icon={<FiHome />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                    </Link>
                    <Link to='/orders'>
                        <Item
                            title='Orders'
                            icon={<BiMoney />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                    </Link>
                    <Link to='/menus'>
                        <Item
                            title='Menus'
                            icon={<MdRestaurantMenu />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                    </Link>
                    <Link to='/settings'>
                        <Item
                            title='Settings'
                            icon={<MdSettings />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                    </Link>
                    <SubMenu label="Charts" icon={<BiLineChart />}>
                        <Link to='/pieGraph'>
                            <Item
                                title='Pie Chart'
                                icon={<AiOutlinePieChart />}
                                selected={selected}
                                setSelected={setSelected}
                            ></Item>
                        </Link>
                        <Link to='/lineGraph'>
                            <Item
                                title='Line Chart'
                                icon={<FaChartArea />}
                                selected={selected}
                                setSelected={setSelected}
                            ></Item>
                        </Link>
                    </SubMenu>
                    <Link to='/payment'>
                        <Item
                            title='Payment'
                            icon={<MdOutlinePayment />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                    </Link>
                    <Link to='/FAQ'>
                        <Item
                            title='FAQ'
                            icon={<FaQuestion />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                    </Link>
                </Box>
            </Menu>
        </Sidebar>

    );
};

export default Leftbar;