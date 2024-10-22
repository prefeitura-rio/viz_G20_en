import React from 'react';
import './NobelGrid.css';

const images = [
  { src: 'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/nobel_david-macmillan.png', name: 'David MacMillan' },
  { src: 'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/nobel_kip-thorne.png', name: 'Kip Thorne' },
  { src: 'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/nobel_may-britt-moser.png', name: 'May-Britt Moser' },
  { src: 'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/nobel_nadia-murad.png', name: 'Nadia Murad' },
  { src: 'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/nobel_richard-roberts.png', name: 'Richard Roberts' },
  { src: 'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/nobel_serge_haroche.png', name: 'Serge Haroche' },
];

const NobelGrid = () => {
  return (
    <div className="container3">
      <div className="imagegrid-container">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.src} alt={image.name} className="image" />
            <div className="caption">{image.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NobelGrid;