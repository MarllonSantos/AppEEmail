import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const inputFieldRef = useRef(null);
  const [isEmailValid, setIsEmailValid] = useState(null);

  function limparCampos() {
    if (inputFieldRef.current) inputFieldRef.current.value = '';
    setIsEmailValid(null);
  }

  function check() {
    const inputField = inputFieldRef.current;
    const value = inputField.value.trim();

    if (value === "") {
      alert("O campo está vazio. Por favor, insira um e-mail.");
      setIsEmailValid(null);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {
      setIsEmailValid(false);
      return;
    }

    setIsEmailValid(true);
  }

  useEffect(() => {
    limparCampos();
  }, []);

  return (
    <>
      <div className="content">
        <div className="descricaoProjeto">
          <p>Digite um e-mail, vamos verificar se ele tem um formato válido ou não!</p>
        </div>
        <h2>Insira o e-mail:</h2>
        <div className="formEmail">
          <input type="email" name="email" id="email" ref={inputFieldRef} />
          <button id="checkButton" onClick={check}>
            <i className="fa-solid fa-check"></i>
          </button>
          <button className="limpar" onClick={limparCampos}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        {isEmailValid === true && (
          <div className="returnOk" id="returnOk">
            <p><i className="fa-solid fa-check-double"></i> Email válido!</p>
          </div>
        )}
        {isEmailValid === false && (
          <div className="returnErro" id="returnErro">
            <p><i className="fa-solid fa-xmark"></i> Email inválido!</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
