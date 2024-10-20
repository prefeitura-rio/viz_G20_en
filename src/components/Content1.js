import React, { useState } from 'react';
import './Content1.css';
import MapComponent from './MapComponent';
// import Map from '../assets/mapa.png';
import SvgMap from './SvgMap';

const Content1 = ({ id }) => {
  const [correctCountries, setCorrectCountries] = useState(false);

  return (
    <div className="content-section">
      <div className="text-card-map-intro">
        <div className="box-map-intro">
          ...
        </div>
      </div>
      <SvgMap correctCountries={correctCountries} setCorrectCountries={setCorrectCountries} />
      <MapComponent correctCountries={correctCountries} />
    </div>
  );
};

export default Content1;
