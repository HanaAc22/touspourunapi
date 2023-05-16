import React from 'react';
import {Route, Routes} from "react-router-dom";
import ALayout from "./ALayout";
import Dashboard from "./Dashboard";


const AdminRouter = () => {
    return (
        <div>
            <Routes>
                <Route element={<ALayout/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </div>
    );
};

export default AdminRouter;