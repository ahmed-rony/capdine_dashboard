import React from 'react';
import PieChart from '../../Component/PieChart/PieChart';

const Pie = () => {
    return (
        <section >
            <div className="title" style={{padding: '20px'}}>
                <h1>Pie of Your Business</h1>
            </div>
            <PieChart />
        </section>
    );
};

export default Pie;