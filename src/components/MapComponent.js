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
      { trigger: '.text-card-map-especial:nth-child(8) .box', chartType: 'mapBrazil', leaveBack: 'mapBrazil' },
      { trigger: '.text-card-map-especial:nth-child(9) .box', chartType: 'mapInfoBrazil', leaveBack: 'mapInfoBrazil' },
      { trigger: '.text-card-map:nth-child(10) .box', chartType: 'mapInfoBrazil2', leaveBack: 'mapInfoBrazil2' },
      { trigger: '.text-card-map:nth-child(11) .box', chartType: 'mapInfoBrazil2', leaveBack: 'mapInfoBrazil2' },
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
            <h2>The G20 consists of 19 countries, plus the European Union and the African Union. Do you know <b>which countries are members of the group?</b>

            </h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>A country’s participation in the G20 is not determined by voting or election but by its <b>global economic and geopolitical relevance.</b> This makes the G20 a high-impact group in discussions on the economy, trade, and other important issues. The G20 countries account for:
            </h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>85% of the world’s GDP</h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>75% of global trade</h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>56% of the world’s population</h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>97% of the world’s patent applications
            </h2>
          </div>
        </div>
        <div className="text-card-map">
          {/* 7 */}
        </div>
        <div className="text-card-map-especial">
          <div className="box">
            <h2>Brazil, present at the G20 since the first meeting, has positioned itself as a <b>key voice in advocating for emerging countries</b>. This stance, along with a growing economy, has strengthened its international image. Brazil’s participation goes beyond merely holding a seat; it aims to shape global decisions, particularly in areas such as sustainable development, social justice, and climate change. </h2>
          </div>
        </div>
        <div className="text-card-map-especial">
          <div className="box">
            <h2> In 2024, under Brazil’s presidency, the G20 adopts the theme <b>“Building a Fair World and a Sustainable Planet”</b> and focuses on three priority areas: energy transition, fair sustainable development (emphasizing the fight against hunger, poverty, and inequality), and the reform of multilateral institutions. Since December 2023, 105 official events have been scheduled across Brazil, with 26 of them in <b>Rio, the official host city of the event.</b>
            </h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>During the G20, 34 high-level official events were held in different cities across the country.

            </h2>
          </div>
        </div>
        <div className="text-card-map">
          <div className="box">
            <h2>12 of the high-level events take place in Rio de Janeiro – including the most important one, the Leaders' Summit.
            </h2>
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