import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicRouter from "./pages/public/PublicRouter";
import AdminRouter from "./pages/admin/AdminRouter";

export default function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<PublicRouter/>}/>
                    <Route path='/admin/*' element={<AdminRouter/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
