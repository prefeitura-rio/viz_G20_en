import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MapComponent.css';

gsap.registerPlugin(ScrollTrigger);

const data = [
  { name: 'South Africa' },
  { name: 'Germany' },
  { name: 'Saudi Arabia' },
  { name: 'Argentina' },
  { name: 'Australia' },
  { name: 'Brazil' },
  { name: 'Canada' },
  { name: 'China' },
  { name: 'South Korea' },
  { name: 'United States of America' },
  { name: 'France' },
  { name: 'India' },
  { name: 'Indonesia' },
  { name: 'Italy' },
  { name: 'Japan' },
  { name: 'Mexico' },
  { name: 'United Kingdom' },
  { name: 'Russia' },
  { name: 'Turkey' },
];

const MapComponent = ({ correctCountries }) => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '.text-card-especial',
      start: 'center top',
      onEnter: () => {
        if (!correctCountries) {
          document.body.style.overflow = 'hidden';
        }
      },
      onEnterBack: () => {
        document.body.style.overflow = 'auto';
      }
    });
  }, [correctCountries]);

  useEffect(() => {
    if (correctCountries) {
      document.body.style.overflow = 'auto';
    }
  }, [correctCountries]);

  return (
    <div className="map-container">
      {/* Scrolling text cards */}
      <div className="text-section">
        <div className="text-card-especial">
          <div className="box">
            <h2>texto1</h2>
          </div>
        </div>
        <div className="text-card">
          <div className="box">
            <h2>texto2</h2>
          </div>
        </div>
        <div className="text-card">
          <div className="box">
            <h2>texto3</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;