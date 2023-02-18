import React, { useState } from 'react';
import './Account.scss';
import { RiUpload2Fill } from 'react-icons/ri';
import { BsPersonFill } from 'react-icons/bs';
import { Paper, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from "yup";

const initialValues = {
    username: '',
    email: '',
    firstname: '',
    lastname: ''
}
const initialValues2 = {
    address: '',
    city: '',
    country: ''
}

const userSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    firstname: yup.string().required("First Name is required"),
    lastname: yup.string().required("Last Name is required")
})
const contactSchema = yup.object().shape({
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required")
})

const Account = () => {
    const [file, setFile] = useState(null);

    const handleSubmit = () => {
        console.log(value)
    }
    return (
        <section className='account'>
            <div className="title">
                <h1>Account</h1>
            </div>
            <div className="content">
                <Paper elevation={3} className="left">
                    <div className="img-upload">

                        {file ? <img src={URL.createObjectURL(file)} alt="" /> : <div><div className='profile-pic'><BsPersonFill /></div></div>}
                        <span>Samantha Moon</span>
                        <input type="file" name="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
                        <label htmlFor='file' className='upload brand-btn' >Profile Photo<RiUpload2Fill /></label>
                    </div>
                </Paper>
                <div className="right">
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
                                <Paper elevation={3} className="content-1">
                                    <h3>User Settings</h3>
                                    <div className="row">
                                        <div className="item">
                                            <span>Username</span>
                                            <TextField
                                                type="text"
                                                placeholder='userame123'
                                                name='username'
                                                value={values.username}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.username && !!errors.username}
                                                helperText={touched.username && errors.username}
                                            />
                                        </div>
                                        <div className="item">
                                            <span>Email</span>
                                            <TextField
                                                type="email"
                                                placeholder='Email Address'
                                                name='email'
                                                value={values.email}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.email && !!errors.email}
                                                helperText={touched.email && errors.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="item">
                                            <span>First Name</span>
                                            <TextField
                                                type="text"
                                                placeholder='John'
                                                name='firstname'
                                                value={values.firstname}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.firstname && !!errors.firstname}
                                                helperText={touched.firstname && errors.firstname}
                                            />
                                        </div>
                                        <div className="item">
                                            <span>Last Name</span>
                                            <TextField
                                                type="text"
                                                placeholder='Doe'
                                                name='lastname'
                                                value={values.lastname}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.lastname && !!errors.lastname}
                                                helperText={touched.lastname && errors.lastname}
                                            />
                                        </div>
                                    </div>
                                    <button className='brand-btn'>Save</button>
                                </Paper>
                            </form>
                        )}
                    </Formik>
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
                                    <h3>Contact Settings</h3>
                                    <div className="row">
                                        <div className="item" style={{ width: '100%' }}>
                                            <span>Address</span>
                                            <TextField
                                                type="text"
                                                placeholder='Sunset Blvd, 38'
                                                name='address'
                                                value={values.address}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.address && !!errors.address}
                                                helperText={touched.address && errors.address}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="item">
                                            <span>City</span>
                                            <TextField
                                                type="text"
                                                placeholder='Los Angeles'
                                                name='city'
                                                value={values.city}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.city && !!errors.city}
                                                helperText={touched.city && errors.city}
                                            />
                                        </div>
                                        <div className="item">
                                            <span>Country</span>
                                            <TextField
                                                type="text"
                                                placeholder='USA'
                                                name='country'
                                                value={values.country}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.country && !!errors.country}
                                                helperText={touched.country && errors.country}
                                            />
                                        </div>
                                    </div>
                                    <button className='brand-btn'>Save</button>
                                </Paper>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </section >
    );
};

export default Account;