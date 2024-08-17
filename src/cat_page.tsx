
import fetch_from_dbd from "./fetch_from_dbd";
import './App.css';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export const  Catpage = () => {
    const [imageUrl, setImageUrl] = useState();
    const [emoji, setEmoji] = useState('');
    const location = useLocation();
    const name = (location.state as { name?: string })?.name || '';
    const animalType = (location.state as { animal?: string })?.animal || '';

    const apiUrl = animalType === "Dog" ? "https://api.thedogapi.com/v1/images/search" : "https://api.thecatapi.com/v1/images/search";
    const emojiSymbol = animalType === "Dog" ? "🐕" : "🐈";
    const animalname = animalType === "Dog" ? "Dog" : "Cat";

    useEffect(() => {
        setEmoji(emojiSymbol);  // Set the emoji based on animal type
        fetch_from_dbd(apiUrl)
            .then(url => {
                setImageUrl(url.url);
            })
            .catch(error => {
                console.error('Error fetching the image:', error);
            });
    }, [apiUrl, emojiSymbol]); // Only runs when apiUrl or emojiSymbol changes

    return (
        <div className="App-header">
            <p className="catheader">{name} {animalname} Pics </p>
            {imageUrl ? (
                <img src={imageUrl} alt="A cute animal" style={{width: '300px', height: '300px'}}/>
            ) : (
                <p>Loading...</p>
            )}
            <button className="button" onClick={() => fetch_from_dbd(apiUrl).then(url => setImageUrl(url.url))}>NEW {animalname.toUpperCase()} {emoji}</button>
        </div>
    );
}


