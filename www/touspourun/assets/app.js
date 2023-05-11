import React from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';


export default function App() {
    return (
        <div>
            <h1>Hello React in Symfony!</h1>
        </div>
    );
};


const container = document.getElementById('react-app');
const root = createRoot(container);
root.render(<App tab="home" />);
