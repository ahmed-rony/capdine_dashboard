import React from 'react';
import PieChart from '../../Component/PieChart/PieChart';

const Pie = () => {
    return (
        <section >
            <div className="title" style={{padding: '10px 30px'}}>
                <h1>Pie of Your Business</h1>
            </div>
            <PieChart />
        </section>
    );
};

export default Pie;