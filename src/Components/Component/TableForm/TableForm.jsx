import React from 'react';
import { Paper, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from "yup";
import './TableForm.scss';

const initialValues2 = {
    table: '',
    room: '',
    country: ''
}
const contactSchema = yup.object().shape({
    table: yup.string().required("Table numbers are required"),
    room: yup.string().required("Room numbers are required"),
    country: yup.string().required("Country is required")
})

const TableForm = () => {
    const handleSubmit = () => {
        console.log(value)
    }

    return (
        <div className='table-form'>
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues2}
                validationSchema={contactSchema}
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
                        <Paper elevation={3} className="content-1">
                            <h3>Restaurant or Hotel Info</h3>
                            <div className="row">
                                <div className="item" style={{ width: '100%' }}>
                                    <span>Tables</span>
                                    <TextField
                                        type="number"
                                        placeholder='Table Numbers'
                                        name='table'
                                        value={values.table}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={!!touched.table && !!errors.table}
                                        helperText={touched.table && errors.table}
                                    />
                                </div>
                                <div className="item" style={{ width: '100%' }}>
                                    <span>Rooms</span>
                                    <TextField
                                        type="number"
                                        placeholder='Room Numbers'
                                        name='room'
                                        value={values.room}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={!!touched.room && !!errors.room}
                                        helperText={touched.room && errors.room}
                                    />
                                </div>
                            </div>
                            <button className='brand-btn'>Save</button>
                        </Paper>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default TableForm;