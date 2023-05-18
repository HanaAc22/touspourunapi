import React from 'react';
import {Route, Routes} from "react-router-dom";
import ALayout from "./ALayout";
import Dashboard from "./Dashboard";
import User from "./user/User";
import UserAdd from "./user/UserAdd";
import UserEdit from "./user/UserEdit";
import Error from "../../_util/Error";
import Association from "./associations/Association";
import AssociationEdit from "./associations/AssociationEdit";
import AssociationAdd from "./associations/AssociationAdd";

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="user">
                    <Route path="index" element={<User/>}/>
                    <Route path="edit/:uid" element={<UserEdit/>}/>
                    <Route path="add" element={<UserAdd/>}/>
                </Route>
                <Route path="association">
                    <Route path="index" element={<Association/>}/>
                    <Route path="edit" element={<AssociationEdit/>}/>
                    <Route path="add" element={<AssociationAdd/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;