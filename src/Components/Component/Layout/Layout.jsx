import React from 'react';
import { Outlet } from 'react-router-dom';
import Leftbar from '../Leftbar/Leftbar';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
    return (
        <>
            <div style={{ display: "flex", width: '100%' }}>
                <Leftbar />
                <div style={{ flex: 6 }}>
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;