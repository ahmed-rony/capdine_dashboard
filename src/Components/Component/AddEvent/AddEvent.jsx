import { Fade, Modal, Paper, TextField } from '@mui/material';
import './AddEvent.scss';
import { Formik } from 'formik';
import * as yup from "yup";
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: "#fcfcfc",
    border: 'none',
    padding: 2,
    outline: 'none',
    boxShadow: 24,
};
const initialValues = {
    eventname: ''
}
const userSchema = yup.object().shape({
    eventname: yup.string().required("Event Title is required"),
})

const AddEvent = ({ open, handleClose }) => {
    const [value, setValue] = useState(dayjs(new Date));

    const handleTimeChange = (newValue) => {
        setValue(newValue);
    };
    const handleSubmit = () => {
        console.log(value)
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Paper elevation={3} sx={style} className='event-pop'>
                        <div className="event-content">
                            <div className="title">
                                <h2>Make an Event</h2>
                            </div>
                            <Formik
                                onSubmit={handleSubmit}
                                initialValues={initialValues}
                                validationSchema={userSchema}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="item">
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DateTimePicker
                                                        label="Date&Time picker"
                                                        value={value}
                                                        onChange={handleTimeChange}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                            <div className="item">
                                                <TextField
                                                    className='event'
                                                    type="text"
                                                    placeholder='Event Title'
                                                    name='eventname'
                                                    value={values.eventname}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    error={!!touched.eventname && !!errors.eventname}
                                                    helperText={touched.eventname && errors.eventname}
                                                />
                                            </div>
                                            <button className='event-btn brand-btn'>Save</button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    );
};

export default AddEvent;