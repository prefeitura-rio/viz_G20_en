import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './BigNumbers.css';

const data = [
  { value: 130, unit: '+', text: ' events (official and side events)' },
  { value: 120, unit: '+', text: 'thousand people involved in the events' },
  { value: 270, unit: '', text: 'ministers and deputy ministers' },
  { value: 600, unit: 'M', text: 'million in potential economic impact in Rio by the end of the G20 cycle' },
  { value: 130, unit: 'M', text: 'million in advertising value for event media coverage' },
  { value: 900, unit: '+', text: 'event hours' },
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