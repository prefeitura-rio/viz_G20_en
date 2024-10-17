import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './BigNumbers.css';

const data = [
  { value: 130, unit: '+', text: 'eventos (oficiais e paralelos)' },
  { value: 120, unit: '+', text: 'mil pessoas envolvidas nos eventos' },
  { value: 270, unit: '', text: 'ministros e vice-ministros' },
  { value: 600, unit: 'M', text: 'milhões de potencial impacto econômico no Rio até o fim do ciclo do G20' },
  { value: 130, unit: 'M', text: 'milhões em valor publicitário de divulgação do evento na imprensa' },
  { value: 900, unit: '+', text: 'horas de eventos' },
];

const BigNumbers = ({ opacity }) => {
  const refs = useRef([]);

  useEffect(() => {
    if (opacity === 1) {
      refs.current.forEach((el, index) => {
        const endValue = data[index].value;
        gsap.to(el, {
          textContent: endValue,
          duration: 2,
          ease: 'power1.out',
          snap: { textContent: 1 },
          stagger: 0.2,
        });
      });
    }
  }, [opacity]);

  return (
    <div className="container2">
      <div className="bignumbers-container">
        {data.map((item, index) => (
          <div key={index} className="stat-item">
            <div className="prefix">
              <div ref={(el) => (refs.current[index] = el)} className="stat-value">
                0
              </div>
              <span className="stat-unit">{item.unit}</span>
            </div>
            <p className="stat-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigNumbers;