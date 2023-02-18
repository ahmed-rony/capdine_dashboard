import React, { useState } from 'react';
import './Payment.scss';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, StepLabel } from '@mui/material';
import PricePlan from '../../Component/PricePlan/PricePlan';
import TableForm from '../../Component/TableForm/TableForm';
import PaymentGateway from '../../Component/PaymentGateway/PaymentGateway';

const Payment = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const allStepsCompleted = () => {
        return activeStep === 3;
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };
    
    const nextStep = () => {
        setActiveStep((activeStep < 2) ? activeStep + 1 : activeStep)
    }

    const prevStep = () => {
        setActiveStep((activeStep > 0) ? activeStep - 1 : activeStep)
    }

    return (
        <div className='payment'>
            <div className="title">
                <h1>Payment</h1>
            </div>
            <Box>
                <Stepper className='steppers' activeStep={activeStep}>
                    <Step>
                        <StepLabel>Plans</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Tables Setup</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Payment</StepLabel>
                    </Step>
                </Stepper>
                <div>
                    {allStepsCompleted() ? (
                        <Paper elevation={3} >
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </Paper>
                    ) : (
                        <section>
                            {(activeStep === 0 && <PricePlan />)}
                            {(activeStep === 1 && <TableForm />)}
                            {(activeStep === 2 && <PaymentGateway />)}
                        </section>
                    )}
                </div>
                <div className='stepper-btn'>
                    <button className="brand-btn" onClick={() => prevStep()}>Previous</button>
                    {
                        (activeStep === 1)
                            ? <button className="brand-btn" onClick={() => nextStep()}>Submit</button>
                            : (activeStep < 2) && <button className="brand-btn" onClick={() => nextStep()}>Next</button>
                    }
                    {
                        (activeStep === 2) && <button className="brand-btn">Finish</button>
                    }

                </div>
            </Box>
        </div>
    );
};

export default Payment;