import React from 'react';
import './Creditos.css'; // Assuming you will style it in a separate CSS file
import logo from '../assets/logo_prefeitura.png'; // Assuming you have a logo image

const Creditos = () => {
  return (
    <div className="creditos">
      <div className="section">
        <h2>Authors</h2>
        <ul>
          <br></br>
          <li>Mateus Lana</li>
          <li>Caio Jacintho</li>
          <li>Lucas Tavares</li>
          <li>Pedro Meneghel</li>
          <li>Vanessa Leme</li>
        </ul>
      </div>
      <div className="section">
        <h2>Rio G20 Committee</h2>
        <ul>
          <br></br>
          <li>Municipal Secretariat for Urban and Economic Development – ​​SMDUE</li>
        </ul>
      </div>
      <div className="section">
        <h2>Photographers</h2>
        <ul>
          <br></br>
          <li>Fabio Motta</li>
          <li>Raquel Camargo           </li>
        </ul>
      </div>
      <div className="section">
        <h2>Acknowledgements</h2>
        <ul>
          <br></br>
          <li>Lucas Padilha</li>
          <li>João Carabetta</li>
        </ul>
      </div>
      <div className="section">
        <h2>Mayor</h2>
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