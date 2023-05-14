import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../../components/public/Layout";
import Home from "./Home";
import Content from "./Contenu";
import Forum from "./Forum";
import Contact from "./Contact";
import Error from "../../_util/Error";

const PublicRouter = () => {
    return (
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Home/>}/>

                    <Route path="/home" element={<Home/>}/>
                    <Route path="/contenu" element={<Content />}/>
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/contact" element={<Contact />}/>

                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
    );
};

export default PublicRouter;