import React, { useState } from 'react';

const HomePage = () => {
  const [message, setMessage] = useState('Bem-vindo à página inicial!');

  const handleClick = () => {
    setMessage('Botão pressionado!');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Clique aqui</button>
      Oi
    </div>
  );
};

export default HomePage;
