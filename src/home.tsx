import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Apps.css';

export const Home = () =>{
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');
    const navigate = useNavigate();
    const handleChange = (event: any) => {
        setName(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate('/catpage', { state: { name } })
    };

    return (

        <div className="form-container">
            <h2 className="texts">Please input your name:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};


