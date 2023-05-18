import React from 'react';
import {useNavigate} from "react-router";

const User = () => {
    let navigate = useNavigate();
    const user = (userId) => {
        console.log("click")
        navigate('../edit/'+userId, {replace: true})
    }
    return (
        <div className='user'>
            USERS
            <button onClick={() => user(4)}>User</button>

        </div>
    );
};

export default User;