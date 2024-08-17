import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Apps.css';

export const Home = () =>{
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');
    const navigate = useNavigate();
    const [selectedAnimal, setSelectedAnimal] = useState('');
    const handleChange = (event: any) => {
        setName(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate('/catpage', { state: { name, animal: selectedAnimal } });

    };

    const handleAnimalChange = (event: any) => {
        setSelectedAnimal(event.target.value);
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

                <h2 className="texts">Dogs or Cats:</h2>
                <div className="button-container">
                    <label>
                        <input
                            type="radio"
                            name="animal"
                            value="Dog"
                            checked={selectedAnimal === 'Dog'}
                            onChange={handleAnimalChange}
                            required
                        />
                        Dogs
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="animal"
                            value="Cat"
                            checked={selectedAnimal === 'Cat'}
                            onChange={handleAnimalChange}
                            required
                        />
                        Cats
                    </label>

                </div>
                <button type="submit">Submit</button>

            </form>

        </div>
    );
};


