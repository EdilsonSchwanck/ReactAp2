import React, { useState } from 'react';
import './Formes.css';

function Formes({ onFormSubmit }) {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [isSim, setIsSim] = useState(null);
    const [isPago, setIsPago] = useState(null);
    const [fotoUrl, setFotoUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para enviar os dados para o servidor ou realizar outras ações com os dados do formulário
        onFormSubmit({ nome, telefone, isEgresso: isSim, isPago, fotoUrl });
        // Limpar o formulário após o envio
        setNome('');
        setTelefone('');
        setIsSim(null);
        setIsPago(null);
        setFotoUrl('');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>

                <div className="form-row">
                    <label>Telefone:</label>
                    <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} maxLength={11} required />
                </div>

                <div className="form-row">
                    <label>Egresso/Convidado:</label>
                    <div className="radio-group">
                        <label>
                            <input type="radio" name="egressoConvidado" value="sim" checked={isSim === true} onChange={() => setIsSim(true)} />
                            Sim
                        </label>
                        <label>
                            <input type="radio" name="egressoConvidado" value="nao" checked={isSim === false} onChange={() => setIsSim(false)} />
                            Não
                        </label>
                    </div>
                </div>

                <div className="form-row">
                    <label>Pago:</label>
                    <div className="radio-group">
                        <label>
                            <input type="radio" name="pago" value="sim" checked={isPago === true} onChange={() => setIsPago(true)} />
                            Sim
                        </label>
                        <label>
                            <input type="radio" name="pago" value="nao" checked={isPago === false} onChange={() => setIsPago(false)} />
                            Não
                        </label>
                    </div>
                </div>

                <div className="form-row">
                    <label>Foto (URL):</label>
                    <input type="text" value={fotoUrl} onChange={(e) => setFotoUrl(e.target.value)} />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default Formes;