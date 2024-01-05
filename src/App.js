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
      <h2>Como usar:</h2>
      <p>Adicione um elemento por vez, depois realize o sorteio.</p>
      <input
        type="text"
        placeholder="Digite um item"
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={adicionarItem}>Adicionar</button>
      <button onClick={girarRoleta}>Sortear</button>
      <ol>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      {resultado && <p>Resultado: <mark>{resultado}</mark></p>}
      {resultado && <button onClick={esvaziarLista}>Esvaziar Lista</button>}
    </div>
  );
};

export default Roleta;