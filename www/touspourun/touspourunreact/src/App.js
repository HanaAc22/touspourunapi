import React from 'react';
import { BrowserRouter } from "react-router-dom";
import PublicRouter from "./pages/public/PublicRouter";

export default function App() {

    return (
        <div>
            <BrowserRouter>
                <PublicRouter/>
            </BrowserRouter>
        </div>
    );
}
