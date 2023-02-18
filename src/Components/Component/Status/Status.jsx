import React from 'react';
import StatBox from '../StatBox/StatBox';
import { BsCalendar2WeekFill, BsCurrencyDollar } from 'react-icons/bs';
import { MdPendingActions } from 'react-icons/md';
import './Status.scss';

const Status = () => {
    return (
        <div className="stat-content">
            <div className="stat-items">
                <StatBox
                    className='stat'
                    title='EARNINGS (MONTHLY)'
                    subtitle='4,000'
                    icon={<BsCalendar2WeekFill />}
                />
                <StatBox
                    className='stat'
                    title='EARNINGS (ANNUAL)'
                    subtitle='15,000'
                    icon={<BsCurrencyDollar />}
                />
            </div>
            <div className="stat-items">
                <StatBox
                    className='stat'
                    title='TASKS'
                    percent='45%'
                    progress='0.45'
                />
                <StatBox
                    className='stat'
                    title='PENDING REQUESTS'
                    request='17'
                    icon={<MdPendingActions />}
                />
            </div>
        </div>
    );
};

export default Status;