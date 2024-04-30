// Importa o módulo React do pacote react
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

function Home() {
  const irPara= useNavigate();
  const handleClick = () => {
    irPara('/');
  };
  return (
    <div>
      <h1>Bem vindo!</h1>      
      <button onClick= {handleClick}>Deslogar</button>
    </div>
  );
}
export default Home;

