import React from 'react';
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";
import Content from "./pages/Contenu";
import Profil from "./pages/Profil";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error from "./_util/Error";
import Layout from "./components/public/Layout";

export default function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                   <Route element={<Layout/>}>
                        <Route index element={<Home/>}/>

                        <Route path="/home" element={<Home/>}/>
                        <Route path="/contenu" element={<Content />}/>
                        <Route path="/forum" element={<Forum />} />
                        <Route path="/contact" element={<Contact />}/>
                        <Route path="/profil" element={ <Profil />}/>
                       {/*<Route path="/*" element={<Layout/>}/>*/}

                       <Route path="*" element={<Error/>}/>
                   </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
