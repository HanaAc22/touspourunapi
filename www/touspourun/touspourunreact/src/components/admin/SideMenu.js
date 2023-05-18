import React from 'react';
import {Link} from "react-router-dom";

const SideMenu = () => {
    return (
        <div className='sideMenu'>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li>&nbsp</li>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li>
                    Users
                    <ul>
                        <li><Link to="/admin/user/index">Liste</Link></li>
                        <li><Link to="/admin/user/add">Ajouter</Link></li>
                        <li><Link to="/admin/user/edit">Modifier</Link></li>

                    </ul>
                </li>
                <li>
                    Associations
                    <ul>
                        <li><Link to="/admin/association/index">Liste</Link></li>
                        <li><Link to="/admin/association/add">Ajouter</Link></li>
                        <li><Link to="/admin/association/edit">Modifier</Link></li>

                    </ul>
                </li>

            </ul>
        </div>
    );
};

export default SideMenu;