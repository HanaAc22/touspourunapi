import React, {useState} from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');

        // Validate email and password
        if (!email || !password) {
            setError('Please enter your email and password');
            setIsLoading(false);
            return;
        }
        const response = await fetch('http://localhost:48000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });

        if (!response) {
            setError('Something went wrong. Please try again.');
            setIsLoading(false);
            return;
        }
        const data = await response.json();
        setEmail(data.email);
        setPassword(data.password);
        console.log('response');

        setIsLoading(false);

        if (!response.ok) {
            setError(data?.error || 'Invalid Email or password ');
            console.log('error');
            return;
        }

        setEmail('');
        setPassword('');

        const userIri = response.headers.get('Location');
        console.log('User authenticated:', userIri);
    };

    return (
        <div className="App">
            {error && <div className="error">{error}</div>}
            <h3>TousPour1</h3>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="test@test.fr" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={(e =>setPassword(e.target.value))}/>
                </div>
                <button className="primary">Login</button>
            </form>
        </div>
    );
}
