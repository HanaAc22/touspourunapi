import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Questions() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:48000/api/questions')
            .then(response => {
                setData(response.data['hydra:member']);
                console.log('Data fetched successfully:', response.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Questions</h1>
            {Array.isArray(data) && data.map(question =>
                <div>
                    <h2 key={question.id}>{question.title}</h2>
                    <p key={question.id}>{question.question}</p>
                </div>
            )}
        </div>
    );
}
