import React, {useState} from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState({
        login: '',
        password: ''
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    let onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="group">
                <label htmlFor="login">Email</label>
                <input type="text" name="login" value={credentials.login} onChange={onChange}/>
            </div>
            <div className="group">
                <label htmlFor="password">Mot de passe</label>
                <input type="text" name="password" value={credentials.password} onChange={onChange}/>
            </div>
            <div className="group">
                <button type="submit">Connexion</button>
            </div>
        </form>
    );
};

export default Login;