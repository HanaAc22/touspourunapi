import React from 'react';
import {Outlet} from "react-router-dom";

const ALayout = () => {
    return (
        <div className='Alayout'>
            LyoutAdmin
            <Outlet/>
        </div>
    );
};

export default ALayout;