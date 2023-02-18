import React from 'react';
import LineChart from '../../Component/LineChart/LineChart';
import './LineGraph.scss';

const LineGraph = () => {
    return (
        <section className='line-graph'>
            <div className="title" style={{padding: '10px 30px'}}>
                <h1>Line Graph</h1>
            </div>
            <LineChart></LineChart>
        </section>
    );
};

export default LineGraph;