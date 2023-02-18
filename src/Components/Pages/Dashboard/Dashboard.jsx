import React from 'react';
import './Dashboard.scss';
import { MdFileDownload, MdOutlineAttachMoney, MdPendingActions } from 'react-icons/md';
import { FaTasks } from 'react-icons/fa';
import { Paper } from '@mui/material';
import LineChart from '../../Component/LineChart/LineChart';
import PieChart from '../../Component/PieChart/PieChart';
import Todo from '../../Component/Todo/Todo';
import RecentTransaction from '../../Component/RecentTransaction/RecentTransaction';
import Status from '../../Component/Status/Status';
import CurrentOrders from '../../Component/CurrentOrders/CurrentOrders';

const Dashboard = () => {
    return (
        <section className='dashboard'>
            <div className='header'>
                <div className="title">
                    <h1>Dashboard</h1>
                </div>
                <button className='brand-btn'><MdFileDownload /> DOWNLOAD REPORT</button>
            </div>
            <Status />
            <div className="row1">

                <CurrentOrders />
                <RecentTransaction />

            </div>
            <div className="row2">
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
            <div className="row1">

                {/* <Todo /> */}
                {/* <RecentTransaction /> */}

            </div>
        </section>
    );
};

export default Dashboard;