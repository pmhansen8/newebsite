import React, { useState, useEffect } from 'react';
import fetch_from_dbd from "./fetch_from_dbd";
import './App.css';

function App() {
    const [imageUrl, setImageUrl] = useState();



    function newpic() {
        fetch_from_dbd()
            .then(url => {
                setImageUrl(url.url); // Set the fetched image URL in state
            })
            .catch(error => {
                console.error('Error fetching the cat image:', error);
            });
    }

    useEffect(() => {
        newpic();
    }, []);


    return (
        <div className="App-header">

                <p className="catheader">PATS CAT PICS</p>
                {imageUrl ? (
                    <img src={imageUrl} alt="A cute cat" style={{width: '300px', height: '300px'}}/>
                ) : (
                    <p>Loading...</p>
                )}
                <button  className="button" onClick={() => newpic()}>NEW CAT🐈</button>

        </div>
    );
}

export default App;
