import React, { useState, useEffect } from 'react';
import './CardAdress.css';

function CardAdress({ nome, cep }) {
  const [addressData, setAddressData] = useState(null);
  const [showAddress, setShowAddress] = useState(false);
  const [horaAtual, setHoraAtual] = useState(new Date());


  useEffect(() => {
    const intervalId = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000); 

   
    return () => clearInterval(intervalId);
  }, []); 

  const horas = horaAtual.getHours();
  const minutos = horaAtual.getMinutes();
  const segundos = horaAtual.getSeconds();


  const fetchAddressData = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setAddressData(data);
      setShowAddress(true);
    } catch (error) {
      console.error('Erro ao buscar dados de endereço:', error);
    }
  };

  return (
    <>
      <div>
        <h2 className="Welcome">Seja Bem vindo, {nome}</h2>
        <button className="Button" onClick={fetchAddressData}>
          Buscar Endereço
        </button>
      </div>

      {showAddress && addressData && (
        <div className="Card">
          <h3>Endereço:</h3>
          <p>CEP: {addressData.cep}</p>
          <p>Bairro: {addressData.bairro}</p>
          <p>Cidade: {addressData.localidade}</p>
          <p>Estado: {addressData.uf}</p>
          <p>Rua: {addressData.logradouro}</p>
          <p>Hora: {horas}:{minutos}:{segundos}</p>
           
        </div>
      )}
    </>
  );
}

export default CardAdress;