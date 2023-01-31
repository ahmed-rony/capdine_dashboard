import React from 'react';
import './Dashboard.scss';
import { MdFileDownload, MdOutlineAttachMoney, MdPendingActions } from 'react-icons/md';
import { BsCalendar2WeekFill, BsCurrencyDollar } from 'react-icons/bs';
import { FaTasks } from 'react-icons/fa';
import StatBox from '../../Component/StatBox/StatBox';
import { Paper } from '@mui/material';
import LineChart from '../../Component/LineChart/LineChart';
import { mockTransactions } from '../../Data/mockData';
import PieChart from '../../Component/PieChart/PieChart';

const Dashboard = () => {
    return (
        <section className='dashboard'>
            <div className='header'>
                <div className="title">
                    <h1>Dashboard</h1>
                </div>
                <button><MdFileDownload /> DOWNLOAD REPORT</button>
            </div>
            <div className="stat-content">
                <StatBox
                    title='EARNINGS (MONTHLY)'
                    subtitle='4,000'
                    icon={<BsCalendar2WeekFill />}
                />
                <StatBox
                    title='EARNINGS (ANNUAL)'
                    subtitle='15,000'
                    icon={<BsCurrencyDollar />}
                />
                <StatBox
                    title='TASKS'
                    percent='45%'
                    progress='0.45'
                />
                <StatBox
                    title='PENDING REQUESTS'
                    request='17'
                    icon={<MdPendingActions />}
                />
            </div>
            <div className="row">
                <Paper elevation={3} className="linchart">
                    <div className="header">
                        <div>
                            <h4>Earnings Overview</h4>
                            <span>$ 15,000</span>
                        </div>
                        <div className='icon'>
                            <MdFileDownload />
                        </div>
                    </div>
                    <div className="chart">
                        <LineChart isDashboard={true} />
                    </div>
                </Paper>
                
                <Paper elevation={3} className="piechart">
                    <div className="header">
                        <div>
                            <h4>Food Order</h4>
                        </div>
                    </div>
                    <div className="chart">
                        <PieChart isDashboard={true} />
                    </div>
                </Paper>
            </div>
            <div className="row2">
                
                <Paper elevation={3} className="content">
                    <div className="header">
                        <div>
                            <h4>Food Order</h4>
                        </div>
                    </div>
                    <div className="chart">
                        <LineChart isDashboard={true} />
                    </div>
                </Paper>
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
                                    <h4>ID: {item.txId}</h4>
                                    <span>{item.user}</span>
                                </div>
                                <small>{item.date}</small>
                                <div className='cost'><span>${item.cost}</span></div>
                            </div>
                        ))}
                    </div>
                </Paper>

            </div>
        </section>
    );
};

export default Dashboard;