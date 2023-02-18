import React, { useState } from 'react';
import './Setting.scss';
import { RiUpload2Fill } from 'react-icons/ri';
import { MdRestaurantMenu } from 'react-icons/md';
import { Autocomplete, Paper, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from "yup";
import { staffAccess, staffInfo, staffRole } from '../../Data/mockData';

const initialValues = {
    name: '',
    location: '',
    type: '',
    phone: ''
}
const initialValues2 = {
    email: '',
    staffname: '',
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
    staffname: yup.string().required("Name is required"),
    position: yup.string().required("Position is required"),
    access: yup.string().required("Access type is required")
})

const Setting = () => {
    const [file, setFile] = useState(null);

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
                        {file ? <img src={URL.createObjectURL(file)} alt="" /> : <div><div className='logo-pic'><MdRestaurantMenu /></div></div>}
                        <input type="file" name="file" id="file"  onChange={(e) => setFile(e.target.files[0])} />
                        <label htmlFor='file' className='upload brand-btn' >Resaurant Logo<RiUpload2Fill /></label>

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
                                    <button className='brand-btn save-btn'>Save</button>
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
                                            <span>Staff Photo</span>
                                            <input type="file" name="file" id="staffPhoto" />
                                            <label htmlFor='file' className='upload brand-btn' >Upload<RiUpload2Fill /></label>
                                        </div>
                                        <div className="item"
                                        >
                                            <span>Staff Name</span>
                                            <TextField
                                                type="text"
                                                placeholder='Name'
                                                name='staffname'
                                                value={values.staffname}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={!!touched.staffname && !!errors.staffname}
                                                helperText={touched.staffname && errors.staffname}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="item">
                                            <span>Role</span>
                                            <Autocomplete
                                                options={staffRole}
                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
                                                        placeholder='Position'
                                                        name='position'
                                                        value={values.position}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        error={!!touched.position && !!errors.position}
                                                        helperText={touched.position && errors.position}
                                                    />}
                                            />
                                        </div>
                                        <div className="item">
                                            <span>Access</span>
                                            <Autocomplete
                                                options={staffAccess}
                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
                                                        placeholder='Orders. Menus, Settings..'
                                                        name='access'
                                                        value={values.access}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        error={!!touched.access && !!errors.access}
                                                        helperText={touched.access && errors.access}
                                                    />}
                                            />
                                        </div>
                                    </div>
                                    <button className='brand-btn save-btn'>Save</button>
                                </Paper>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className="staff-content">
                <h3>Staff Members</h3>
                <div className="staff">
                    {
                        staffInfo.map((staff) => (
                            <Paper elevation={3} className="item">
                                <div className="user">
                                    <img src={staff.imgUrl} alt="" />
                                    <h5>{staff.name}</h5>
                                    <span>{staff.role}</span>
                                    <h6>{staff.email}</h6>
                                </div>
                            </Paper>
                        ))
                    }
                </div>
            </div>
        </section >
    );
};

export default Setting;