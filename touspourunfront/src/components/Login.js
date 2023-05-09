import { useRef } from 'react';
import {Button, TextField} from "@mui/material";

export default function Login() {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const errorRef = useRef('');
    const isLoadingRef = useRef(false);

    const loadEmailField = () => {
        emailRef.current = 'bernie@dragonmail.com';
    };
    const loadPasswordField = () => {
        passwordRef.current = 'roar';
    };

    const handleSubmit = async () => {
        isLoadingRef.current = true;
        errorRef.current = '';

        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailRef.current,
                password: passwordRef.current
            })
        });

        isLoadingRef.current = false;

        if (!response.ok) {
            const data = await response.json();
            errorRef.current = data.error;

            return;
        }

        emailRef.current = '';
        passwordRef.current = '';
        const userIri = response.headers.get('Location');
        // Emit the 'user-authenticated' event here
    }

    // @ts-ignore
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={emailRef.current}  />
                <button type="button" onClick={loadEmailField}>Load Email</button>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={passwordRef.current} onChange={(e) => passwordRef.current = e.target.value} />
                <button type="button" onClick={loadPasswordField}>Load Password</button>
            </div>
            {isLoadingRef.current && <p>Loading...</p>}
            {errorRef.current && <p>{errorRef.current}</p>}
            <button type="submit">Submit</button>
        </form>

    );
}
