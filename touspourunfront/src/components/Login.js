import React, {useState} from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const loadEmailField = () => {
        setEmail('test@test.fr');
    };

    const loadPasswordField = () => {
        setPassword('test');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');

        const response = await fetch('http://localhost:48000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const data = await response.json();
        setEmail(data.email);
        setPassword(data.password);
        console.log(data);

        setIsLoading(false);

        if (!response.ok) {
            setError(data.error);
            console.log('error ❌');
            return;
        }

        setEmail('');
        setPassword('');
        const userIri = response.headers.get('Location');
        console.log('User authenticated:', userIri);
    };

    return (
        <div className="App">
            <h3>TousPour1</h3>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="test@test.fr" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <button className="primary">Login</button>
            </form>
        </div>
    );
}
