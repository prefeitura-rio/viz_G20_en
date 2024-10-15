import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Scrollytelling.css';

gsap.registerPlugin(ScrollTrigger);

const Scrollytelling = () => {
  const videoRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const videos = videoRefs.current;
    const texts = textRefs.current;

    videos.forEach((video, index) => {
      gsap.fromTo(
        video,
        { opacity: index === 0 ? 1 : 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: texts[index],
            start: 'top center',
            end: 'bottom center',
            onEnter: () => video.play(),
            // onLeave: () => video.pause(),
            onEnterBack: () => video.play(),
            // onLeaveBack: () => video.pause(),
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const videoSources = [
    'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/1.mp4',
    'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/2.mp4',
    'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/3.mp4',
  ];

  return (
    <div className="scrollytelling-container">
      <div className="video-container">
        {videoSources.map((src, index) => (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            className="background-video"
            src={src}
            loop
            muted
          />
        ))}
      </div>

      {/* Scrolling text cards */}
      <div className="text-section">
        <div className="text-card" ref={(el) => (textRefs.current[0] = el)}>
          <h2>Em um momento crucial para o futuro, a cidade maravilhosa se torna o palco das decisões que moldarão a economia e o clima do mundo.</h2>
        </div>
        <div className="text-card" ref={(el) => (textRefs.current[1] = el)}>
          <h2>Em 2024, o Rio de Janeiro sedia um dos maiores encontros de líderes globais: a cúpula do G20.</h2>
        </div>
        <div className="text-card3" ref={(el) => (textRefs.current[2] = el)}>
          <h1>G20 EM DADOS</h1>
          <h2>veja como o evento dá destaque geopolítico ao Rio ao mobilizar a cidade, envolver seus cidadãos e impactar sua economia</h2>
        </div>
      </div>
    </div>
  );
};

export default Scrollytelling;