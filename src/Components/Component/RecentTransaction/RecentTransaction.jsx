import { Paper } from '@mui/material';
import React from 'react';
import { mockTransactions } from '../../Data/mockData';
import './RecentTransaction.scss';
import { BsFillPersonFill } from 'react-icons/bs';

const RecentTransaction = () => {
    return (
        <Paper elevation={3} className="recent">
            <div className="header">
                <div>
                    <h4>Recent Transaction</h4>
                </div>
            </div>
            <div className="history">
                {mockTransactions.map((item, i) => (
                    <div className="item" key={i}>
                        <div className="user">
                            <h5><BsFillPersonFill/>{item.user}</h5>
                            <span>ID: {item.txId}</span>
                        </div>
                        <small>{item.date}</small>
                        <div className='cost'><span>${item.cost}</span></div>
                    </div>
                ))}
            </div>
        </Paper>
    );
};

export default RecentTransaction;