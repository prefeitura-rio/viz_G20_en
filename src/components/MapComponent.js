import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MapComponent.css';

gsap.registerPlugin(ScrollTrigger);

const MapComponent = ({ setChartType }) => {
  useEffect(() => {
    const triggers = [
      { trigger: '.text-card-map:nth-child(1) .box', chartType: 'map', leaveBack: 'map' },
      { trigger: '.text-card-map:nth-child(2) .box', chartType: 'map', leaveBack: 'map' },
      { trigger: '.text-card-map:nth-child(3) .box', chartType: 'bar', leaveBack: 'bar' },
      { trigger: '.text-card-map:nth-child(4) .box', chartType: 'barComercio', leaveBack: 'barComercio' },
      { trigger: '.text-card-map:nth-child(5) .box', chartType: 'barPopulacao', leaveBack: 'barPopulacao' },
      { trigger: '.text-card-map:nth-child(6) .box', chartType: 'bubbleOptionPatentes', leaveBack: 'bubbleOptionPatentes' },
      { trigger: '.text-card-map:nth-child(7)', chartType: 'map', leaveBack: 'map' },
      { trigger: '.text-card-map:nth-child(8) .box', chartType: 'mapBrazil', leaveBack: 'mapBrazil' },
      { trigger: '.text-card-map:nth-child(9) .box', chartType: 'mapInfoBrazil', leaveBack: 'mapInfoBrazil' },
      { trigger: '.text-card-map:nth-child(10) .box', chartType: 'mapInfoBrazil2', leaveBack: 'mapInfoBrazil2' },
      { trigger: '.text-card-map:nth-child(11) .box', chartType: 'mapRio2', leaveBack: 'mapRio2' },
      { trigger: '.text-card-map:nth-child(12)', chartType: 'mapRio', leaveBack: 'mapRio' },
    ];

    triggers.forEach(({ trigger, chartType, leaveBack }) => {
      ScrollTrigger.create({
        trigger,
        start: 'center center',
        onEnter: () => setChartType(chartType),
        onLeaveBack: () => setChartType(leaveBack), // Default back to 'map'
      });
    });
  }, [setChartType]);

  return (
    <div className="map-container">
      <div className="text-section-map">
        <div className="text-card-map">
          <div className="box">
            <h2>O G20 é composto por 19 países, mais a União Europeia e a União Africana. Você sabe dizer quais são os países membros do grupo? </h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>A participação de um país no G20 não é determinada por votação ou eleição, mas por sua relevância econômica e geopolítica global. Isso torna o G20 um grupo de alto impacto em discussões globais sobre economia, comércio e outros temas importantes. Os países do G20 concentram:
            </h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>85% do PIB mundial</h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>75% do comércio global</h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>56% da população mundial</h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>97% das aplicações de patentes do mundo</h2>
          </div>
        </div>
        <div className="text-card-map">
          {/* 7 */}
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>O Brasil no G20: O Brasil, presente no G20 desde a primeira reunião, se posicionou como uma voz chave na defesa dos países emergentes. A posição, aliada a uma economia em crescimento, fortaleceu sua imagem internacional. Sua participação vai além de simplesmente ocupar um assento; o Brasil busca moldar as decisões globais, especialmente em áreas como desenvolvimento sustentável, justiça social e mudanças climáticas. </h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>O G20 no Brasil: Em 2024, sob a presidência brasileira, o G20 adota o lema “Construindo um Mundo Justo e um Planeta Sustentável” e tem três temas prioritários: transição energética, desenvolvimento sustentável justo (com ênfase no combate à fome, à pobreza e à desigualdade) e reforma das instituições multilaterais. Desde dezembro de 2023, foram programados 105 eventos oficiais por todo o Brasil, 26 deles no Rio</h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>Durante o G20, foram realizados 34 eventos oficiais de alto nível, espalhados pelo país.
            </h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>12 dos eventos de alto nível têm lugar na cidade maravilhosa - incluindo o mais importante deles, a Cúpula dos Líderes.</h2>
          </div>
        </div>
        <div className="text-card-map">
          {/* 12 */}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;