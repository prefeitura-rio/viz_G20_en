import React, { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Intro.css';
import logoPrefeitura from '../assets/logo_prefeitura.png';
import { CurrentComponentContext } from '../CurrentComponentContext';

gsap.registerPlugin(ScrollTrigger);

const Intro = (props) => {
  const { setCurrentComponent } = useContext(CurrentComponentContext);
  const { currentComponent } = useContext(CurrentComponentContext);
  const containerRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setCurrentComponent('Intro'),
      onEnterBack: () => setCurrentComponent('Intro'),
      onLeave: () => setCurrentComponent(''),
      onLeaveBack: () => setCurrentComponent(''),
    });
  }, [setCurrentComponent]);

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
    'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/2.mp4',
    'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/1.mp4',
    'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/3.mp4',
    'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/4.mp4',
  ];

  return (
    <div {...props} className="intro-container" ref={containerRef}>
      {currentComponent === 'Intro' && (
        <div className="logo-container">
          <img src={logoPrefeitura} alt="Logo" className="logo" />
        </div>
      )}
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
        <div className="text-card-intro" ref={(el) => (textRefs.current[0] = el)}>
          <h2>Quem decide o futuro do mundo?</h2>
        </div>
        <div className="text-card-intro" ref={(el) => (textRefs.current[1] = el)}>
          <h2>As escolhas feitas pelos líderes globais hoje moldarão a face da Terra nas próximas décadas.  </h2>
        </div>
        <div className="text-card-intro" ref={(el) => (textRefs.current[2] = el)}>
          <h2>Em 2024, o Rio de Janeiro é a sede de um dos maiores encontros entre nações: a Cúpula do G20.  </h2>
        </div>
        <div className="text-card-intro3" ref={(el) => (textRefs.current[3] = el)}>
          <div>
            <h1>G20 EM DADOS</h1>
            <h2>Veja como o evento dá destaque geopolítico ao Rio, envolve a cidade e impacta sua economia</h2>
          </div>
          <span className="desenvolvido-por">
            Desenvolvido pela Equipe de Visualização de Dados do
            <a
              className="sem-estilo-link"
              href="https://www.dados.rio/"
              target="_blank"
              rel="noreferrer">
              {" "}Escritório de Dados
            </a> da Prefeitura da Cidade do Rio de Janeiro
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;