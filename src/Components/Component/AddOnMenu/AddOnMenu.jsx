import React, { useState } from 'react';
import './AddOnMenu.scss';
import { Paper, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from "yup";
import { MdFastfood } from 'react-icons/md';

const initialValues = {
    food: '',
    price: '',
    time: '',
    lastname: ''
}

const userSchema = yup.object().shape({
    food: yup.string().required("Food is required"),
    price: yup.string().required("Price is required"),
    time: yup.string().required("Time is required"),
    lastname: yup.string().required("Last Name is required")
})

const AddOnMenu = () => {
    const [file, setFile] = useState(null);
    
    const handleSubmit = () => {
        console.log(value)
    }

    return (
        <section className="content">
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
                        <form onSubmit={handleSubmit} className='menu-form'>
                            <Paper elevation={3} className="content-1">
                                <div className="food">
                                    <div className='pic-upload'>
                                        <input type="file" name="file" id="file"  style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                                        <label htmlFor='file' className='food-pic' >
                                            
                                            {file ? <img className="file" src={URL.createObjectURL(file)} alt="" /> :<MdFastfood />}
                                        </label>
                                    </div>
                                    <span>Upload Food</span>
                                </div>

                                <div className="row">
                                    <div className="item">
                                        <span>Item Name</span>
                                        <TextField
                                            type="text"
                                            placeholder='Food'
                                            name='food'
                                            value={values.food}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={!!touched.food && !!errors.food}
                                            helperText={touched.food && errors.food}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="item">
                                        <span>Preperation Time</span>
                                        <TextField
                                            type="text"
                                            placeholder='30min'
                                            name='time'
                                            value={values.time}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={!!touched.time && !!errors.time}
                                            helperText={touched.time && errors.time}
                                        />
                                    </div>

                                    <div className="item">
                                        <span>Price</span>
                                        <TextField
                                            type="number"
                                            placeholder='Price'
                                            name='price'
                                            value={values.price}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={!!touched.price && !!errors.price}
                                            helperText={touched.price && errors.price}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="item-2">
                                        <span>Description</span>
                                        <TextField
                                            name='description'
                                            placeholder='Description'
                                            multiline
                                        />
                                    </div>
                                </div>
                                {/* <button className='brand-btn'>Save</button> */}
                            </Paper>
                        </form>
                    )}
                </Formik>
            </section>
    );
};

export default AddOnMenu;