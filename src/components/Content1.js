import React from 'react';
import './Content1.css';
import MapComponent from './MapComponent';
import Map from '../assets/mapa.jpg';

const Content1 = () => {
  return (
    <div className="content-section">
      <img src={Map} alt="Mapa" className="map" />
      <MapComponent />
    </div>
  );
};

export default Content1;
