import React from 'react';
import { Outlet } from 'react-router-dom';
import Leftbar from '../Leftbar/Leftbar';
import Navbar from '../Navbar/Navbar';
import OrderPopUp from '../OrderPopUp/OrderPopUp';

const Layout = () => {
    return (
        <>
            <div style={{ display: "flex", width: '100%' }}>
                <Leftbar />
                <div style={{ flex: 6 }}>
                    <Navbar />
                    <Outlet />
                </div>
                <OrderPopUp />
            </div>
        </>
    );
};

export default Layout;