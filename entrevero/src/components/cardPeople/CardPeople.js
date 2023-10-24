import React from 'react';
import './CardPeople.css';

function CardPeople({ nome, telefone, isEgresso, isPago, fotoUrl }) {
    return (
        <div className="card">
            <div className="avatar" style={{ backgroundImage: `url(${fotoUrl})` }}></div>
            <h2>{nome}</h2>
            <p>{isEgresso ? 'Egresso/Convidado' : 'Estudante'}</p>
            <p>{isPago ? 'Confirmado' : 'Não Confirmado'}</p>
        </div>
    );
}

export default CardPeople;
