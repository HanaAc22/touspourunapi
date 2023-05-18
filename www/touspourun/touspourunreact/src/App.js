import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicRouter from "./pages/public/PublicRouter";
import AdminRouter from "./pages/admin/AdminRouter";
import AuthRouter from "./pages/Auth/AuthRouter";
import AuthGuard from "./_helpers/AuthGuard";

export default function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<PublicRouter/>}/>
                    <Route path='/admin/*' element={
                        <AuthGuard>
                            <AdminRouter/>
                        </AuthGuard>
                    }/>
                    <Route path='/auth/*' element={<AuthRouter/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
