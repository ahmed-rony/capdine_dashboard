import { Paper } from '@mui/material';
import React from 'react';
import ProgressCircle from '../ProgressCircle/ProgressCircle';
import './StatBox.scss';

const StatBox = ({ title, subtitle, percent, icon, progress, request }) => {
    return (
        <Paper elevation={3} className='stat'>
            <div className="left">
                <h4>{title}</h4>
                {subtitle && <span>$ {subtitle}</span>}
                <span>{percent}</span>
                <span>{request}</span>
            </div>
            <div className="right">
                <span>{icon}</span>
                {progress && <ProgressCircle progress={progress} />}
            </div>
        </Paper>
    );
};

export default StatBox;