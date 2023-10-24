import React, { useState } from 'react';
import './App.css';
import CardAdress from './components/cardAdress/CardAdress';
import CardPeople from './components/cardPeople/CardPeople';
import Formes from './components/formes/Formes';
import NavBar from './components/header/NavBar';

function App() {
    const [pessoas, setPessoas] = useState([]);

    const handleFormSubmit = (data) => {
        setPessoas([...pessoas, data]);
    };

    return (
        <>
            <NavBar />
            <CardAdress nome={"Edilson"} cep={"88801-003"} />
            <Formes onFormSubmit={handleFormSubmit} />
            <div className="card-container">
                {pessoas.map((pessoa, index) => (
                    <CardPeople key={index} {...pessoa} />
                ))}
            </div>
        </>
    );
}

export default App;
