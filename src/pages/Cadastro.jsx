import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import '../App.css'


function Cadastro() {

  const irPara= useNavigate();
  const handleClick = () => {
    irPara('/');
  };

const [novoUsuário, setNovoUsuário] = useState({
  username: '',
  password: '',
});

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setNovoUsuário((prevUsuário) => ({
  ...prevUsuário,
    [name]: value,
  }));
};

const handleCadastro = async (event) => {
  event.preventDefault();
  try {
    await axios.post('http://localhost:8090/api/cadastro', novoUsuário);
    // fetchUsuários();
    setNovoUsuário({
      username: '',
      password: '',
    });
    
  } catch (error) {
    console.error('Erro ao criar Usuário:', error);
  }
};

return (
  <div>
    <h1>Cadastro</h1>
    <form onSubmit={handleCadastro}>
      <input
        type="text"
        name="username"
        placeholder="Nome"
        value={novoUsuário.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={novoUsuário.password}
        onChange={handleInputChange}
      />
      <button type='submit' onClick={handleCadastro}>Cadastrar</button>
      <div> 
      <button  onClick= {handleClick}>Deslogar</button>
    </div>
    </form>
  </div>
);
}

export default Cadastro;