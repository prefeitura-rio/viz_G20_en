import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MapComponent.css';

gsap.registerPlugin(ScrollTrigger);

const MapComponent = () => {

  return (
    <div className="map-container">
      {/* Scrolling text cards */}
      <div className="text-section">
        <div className="text-card">
          <div className="box">
            <h2>O G20 é composto por 19 países, mais a União Europeia e a União Africana. Você sabe dizer quais são os países membros do grupo? Dica: são as maiores economias do mundo, e somente 5 ficam no Hemisfério Sul. Selecione os países no mapa:</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;