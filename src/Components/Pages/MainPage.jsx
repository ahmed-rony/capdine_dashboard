import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '../Component/Layout/Layout';
import Dashboard from './Dashboard/Dashboard';
import FAQ from './FAQ/FAQ';
import LineGraph from './LineGraph/LineGraph';
import Login from './Login/Login';
import Menus from './Menus/Menus';
import Orders from './Orders/Orders';
import Page404 from './Page404/Page404';
import Payment from './Payment/Payment';
import Pie from './Pie/Pie';
import Register from './Register/Register';
import SettingsPage from './SettingsPage/SettingsPage';

const MainPage = () => {
    return (
        <>
            <Router>
                <Routes>

                    <Route path='/' element={<Layout />}>
                        <Route path='/' element={<Dashboard />}></Route>
                        <Route path='/orders' element={<Orders />}></Route>
                        <Route path='/menus' element={<Menus />}></Route>
                        <Route path='/settings' element={<SettingsPage />}></Route>
                        <Route path='/pieGraph' element={<Pie />}></Route>
                        <Route path='/lineGraph' element={<LineGraph />}></Route>
                        <Route path='/payment' element={<Payment />}></Route>
                        <Route path='/FAQ' element={<FAQ />}></Route>
                        <Route path='*' element={<Page404 />}></Route>
                    </Route>

                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                </Routes>
            </Router>
        </>
    );
};

export default MainPage;