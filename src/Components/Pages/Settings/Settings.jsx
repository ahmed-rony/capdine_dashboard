import React from 'react';
import './Settings.scss';
import { RiUpload2Fill } from 'react-icons/ri';
import { Paper, TextField } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Formik } from 'formik';
import * as yup from "yup";

const initialValues = {
    name: '',
    location: '',
    type: '',
    phone: ''
}
const initialValues2 = {
    email: '',
    position: '',
    access: ''
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const restaurantSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    location: yup.string().required("Location is required"),
    type: yup.string().required("Food type is required"),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Contact number is required")
})
const staffSchema = yup.object().shape({
    email: yup.string().required("Email is required"),
    position: yup.string().required("Position is required"),
    access: yup.string().required("Access type is required")
})

const Settings = () => {

    const handleSubmit = () => {
        console.log(value)
    }
    return (
        <section className='setting'>
            <div className="title">
                <h1>Settings</h1>
            </div>
            <div className="content">
                <Paper elevation={3} className="left">
                    <div className="img-upload">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMsIQjVDI_yrFB4vUjX15TdFRan7SOUFyEg&usqp=CAU" alt="" />

                        <input type="file" name="file" id="file" />
                        <label htmlFor='file' className='upload' >Resaurant Logo<RiUpload2Fill /></label>
                        <LinearProgress value={50} />
                    </div>
                </Paper>
                <div className="right">
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={initialValues}
                        validationSchema={restaurantSchema}
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
                                    <h3>Restaurant Settings</h3>
                                    <div className="row">
                                        <div className="item">
                                            <span>Full Name</span>
                                            <TextField
                                                type="text"
                                                placeholder='Rastaurant Name'
                                                name='name'
                                                value={values.name}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.name && !!errors.name}
                                                helperText={touched.name && errors.name}
                                            />
                                        </div>
                                        <div className="item">
                                            <span>Location</span>
                                            <TextField
                                                type="text"
                                                placeholder='Address'
                                                name='location'
                                                value={values.location}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.location && !!errors.location}
                                                helperText={touched.location && errors.location}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="item">
                                            <span>Food Type</span>
                                            <TextField
                                                type="text"
                                                placeholder='Pizza, Burger'
                                                name='type'
                                                value={values.type}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.type && !!errors.type}
                                                helperText={touched.type && errors.type}
                                            />
                                        </div>
                                        <div className="item">
                                            <span>Phone Number</span>
                                            <TextField
                                                type="text"
                                                placeholder='Contact Number'
                                                name='phone'
                                                value={values.phone}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.phone && !!errors.phone}
                                                helperText={touched.phone && errors.phone}
                                            />
                                        </div>
                                    </div>
                                    <button>Save</button>
                                </Paper>
                            </form>
                        )}
                    </Formik>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={initialValues2}
                        validationSchema={staffSchema}
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
                                    <h3>Staff</h3>
                                    <div className="row">
                                        <div className="item" style={{ width: '100%' }}>
                                            <span>Email Address</span>
                                            <TextField
                                                type="text"
                                                placeholder='user@example.com'
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
                                            <span>Role</span>
                                            <TextField
                                                type="text"
                                                placeholder='Position'
                                                name='position'
                                                value={values.position}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.position && !!errors.position}
                                                helperText={touched.position && errors.position}
                                            />
                                        </div>
                                        <div className="item">
                                            <span>Access</span>
                                            <TextField
                                                type="text"
                                                placeholder='Orders. Menus, Settings..'
                                                name='access'
                                                value={values.access}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.access && !!errors.access}
                                                helperText={touched.access && errors.access}
                                            />
                                        </div>
                                    </div>
                                    <button>Save</button>
                                </Paper>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </section >
    );
};

export default Settings;