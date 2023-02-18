import { Paper } from '@mui/material';
import React from 'react';
import './PaymentGateway.scss';

const PaymentGateway = () => {
    return (
        <Paper elevation={3} className='gateway'>
            <h2>Payment gateways configurations</h2>
        </Paper>
    );
};

export default PaymentGateway;