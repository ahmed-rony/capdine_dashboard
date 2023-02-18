import { Paper } from '@mui/material';
import React from 'react';
import { mockDataOrder } from '../../Data/mockData';
import './CurrentOrders.scss';
import { BsClockFill, BsCheckCircleFill, BsFillPersonFill } from 'react-icons/bs';

const CurrentOrders = () => {
    return (
        <Paper elevation={3} className="current">
            <div className="header">
                <div>
                    <h4>Current Orders</h4>
                </div>
            </div>
            <div className="current-order">
                {
                    mockDataOrder.map((item) => (
                        <div className="item">
                            <div className="id">
                                <h5><BsFillPersonFill/>{item.name}</h5>
                                <span>ID: {item.id}</span>
                            </div>
                            <div className="foods">
                                {item.meal.map((food)=>(
                                    <img src={food.imgUrl} alt="" />
                                ))}
                            </div>
                            <div className="order-stat">
                                {item.status === 'pending' && <button className='pending'><BsClockFill className='icon'/>pending</button>}
                                {item.status === 'completed' && <button className='completed'><BsCheckCircleFill className='icon'/>completed</button>}
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </Paper>
    );
};

export default CurrentOrders;