import React from 'react';
import './Creditos.css'; // Assuming you will style it in a separate CSS file
import logo from '../assets/logo_prefeitura.png'; // Assuming you have a logo image

const Creditos = () => {
  return (
    <div className="creditos">
      <div className="section">
        <h2>Autores</h2>
        <ul>
          <br></br>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div className="section">
        <h2>Comissão do G20</h2>
        <ul>
          <br></br>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
      <div className="section">
        <h2>Prefeito</h2>
        <ul>
          <br></br>
          <li>Eduardo Paes</li>
        </ul>
      </div>
      <div className="logo-creditos">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Creditos;