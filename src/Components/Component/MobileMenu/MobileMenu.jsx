import React from 'react';
import { mockDataMenus } from '../../Data/mockData';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { BsHouseFill } from 'react-icons/bs';
import { FaPeopleArrows } from 'react-icons/fa';
import './MobileMenu.scss';

const MobileMenu = () => {
    return (
        <section className='mobile-menu'>
            <div className="menus-content">
                <div className="order-header">
                    <h3>House Menu <BsHouseFill /></h3>
                </div>
                <ul className='heading'>
                    <li>Meal</li>
                    <li className='c-time'>Time</li>
                    <li className='c-price'>Price</li>
                </ul>
                <div className='header'>
                    {mockDataMenus.map((item) => (
                        <ul key={item.id}>
                            <li><img src={item.imgUrl} alt="" /><span className='name'>{item.meal}</span></li>
                            <li><MdOutlineAccessTimeFilled className='icon' /><span>{item.time}</span></li>
                            <li><RiMoneyDollarCircleFill className='icon' /><span>{item.price}</span></li>
                        </ul>
                    ))}
                </div>
            </div>
            <div className="menus-content">
                <div className="order-header">
                    <h3>Partners' Menu <FaPeopleArrows /></h3>
                </div>
                <ul className='heading'>
                    <li>Meal</li>
                    <li className='c-time'>Time</li>
                    <li className='c-price'>Price</li>
                </ul>
                <div className='header'>
                    {mockDataMenus.map((item) => (
                        <ul key={item.id}>
                            <li><img src={item.imgUrl} alt="" /><span className='name'>{item.meal}</span></li>
                            <li><MdOutlineAccessTimeFilled className='icon' /><span>{item.time}</span></li>
                            <li><RiMoneyDollarCircleFill className='icon' /><span>{item.price}</span></li>
                        </ul>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MobileMenu;