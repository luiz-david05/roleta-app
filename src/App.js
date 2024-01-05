import React, { useState } from 'react';
import "./App.css"

const Roleta = () => {
  const [itens, setItens] = useState([]);
  const [novoItem, setNovoItem] = useState('');
  const [resultado, setResultado] = useState(null);

  const adicionarItem = () => {
    if (novoItem.trim() !== '') {
      setItens([...itens, novoItem]);
      setNovoItem('');
    }
  };

  const girarRoleta = () => {
    const indiceSorteado = Math.floor(Math.random() * itens.length);
    setResultado(itens[indiceSorteado]);
  };

  const esvaziarLista = () => {
    setItens([]);
    setResultado(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      adicionarItem();
    }
  };

  return (
    <div class='roleta'>
      <h1>Sorteio</h1>
      <ol>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <input
        type="text"
        placeholder="Digite um item"
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <br></br>
      <button onClick={adicionarItem}>Adicionar</button>
      <button onClick={girarRoleta}>Girar Roleta</button>
      <button onClick={esvaziarLista}>Esvaziar Lista</button>
      {resultado && <p>Resultado: {resultado}</p>}
    </div>
  );
};

export default Roleta;
