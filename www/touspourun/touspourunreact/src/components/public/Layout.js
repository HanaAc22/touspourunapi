import React from 'react';
import Header from "./Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="Layout">
            <Header/>
            Le Layout
            <Outlet/>
        </div>
    );
};

export default Layout;