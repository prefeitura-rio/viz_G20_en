import React, { useEffect, useRef, useState } from 'react';
import './Content1.css';
import MapComponent from './MapComponent';
import SvgMap from './SvgMap';
import * as d3 from 'd3';

const Content1 = ({ id }) => {
  const [chartType, setChartType] = useState('map'); // Default to 'map'
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);

  useEffect(() => {
    if (chartType === 'mapInfoBrazil') {
      d3.select(imgRef1.current)
        .transition()
        .duration(500) // 0.5 second fade-in duration
        .style('opacity', 1);
    } else if (chartType === 'mapInfoBrazil2') {
      d3.select(imgRef2.current)
        .transition()
        .duration(500) // 0.5 second fade-in duration
        .style('opacity', 1);
    } else if (chartType === 'mapRio2') {
      d3.select(imgRef3.current)
        .transition()
        .duration(500) // 0.5 second fade-in duration
        .style('opacity', 1);
    }
  }, [chartType]);

  return (
    <>
      <div className="content-section">
        <div className="text-card-map-intro">
          <div className="box-map-intro">
            <div className="desenvolvido-por">
              Developed in partnership by the {" "}
              <a
                className="sem-estilo-link"
                href="https://www.dados.rio/"
                target="_blank"
                style={{ fontWeight: "bold" }}
                rel="noreferrer">
                {""}Data Office<br></br>
              </a> of the City Hall of Rio de Janeiro, SMDUE, and the G20 Rio Committee.
            </div>
            <br></br>
            <div style={{ width: "100px", border: "0.5px solid #949494" }}></div>
            <br></br>
            <br></br>
            <br></br>
            <h2>Tomorrow’s issues are on today’s agenda. The G20 (Group of Twenty) is an <b>international forum</b> that brings together the <b>world’s 19 largest economies</b>, plus the European Union and the newly incorporated African Union. Established in 1999, the group emerged in response to successive global economic crises, with a mission to promote trade harmony among major powers and global financial stability. <br></br><br></br>
              However, over time, the G20 has shifted its focus beyond mere economic growth and security. Today, it addresses urgent topics that resonate across the planet: <b>climate change, social inequality, and global governance</b>. What began as a forum for economists now sees leaders discussing the environment and the future of humanity as well.
              <br></br><br></br>
              G20 meetings consist of a <b>series of events</b> held throughout the year, involving finance ministers, central bank representatives, and other sectors. <b>Civil society</b> participation grows each year, through mechanisms such as Engagement Groups, the G20 Social, and side events. The event culminates in the Leaders' Summit, with <b>heads of State</b> in attendance, where documents and recommendations developed throughout the year are presented to them.

              <br></br><br></br>
              At the center of these global decisions, <b>Rio de Janeiro is the official host city of the G20</b> in 2024. But what does this mean for the city? Dive into this data visualization to explore the event, its numbers, its impact, and its legacy for Rio.

            </h2>
          </div>
        </div>
        <SvgMap chartType={chartType} />
        <MapComponent setChartType={setChartType} />

        {chartType === 'mapInfoBrazil' && (
          <img
            ref={imgRef1}
            className="special-image"
            style={{ opacity: 0 }} // Start with opacity 0
            src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/img1.png"
            alt="mapa1"
          />
        )}
        {chartType === 'mapInfoBrazil2' && (
          <img
            ref={imgRef2}
            className="special-image2"
            style={{ opacity: 0 }} // Start with opacity 0
            src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/img2.png"
            alt="mapa2"
          />
        )}
        {/* {chartType === 'mapRio2' && (
          <img
            ref={imgRef3}
            className="special-image3"
            style={{ opacity: 0 }} // Start with opacity 0
            src={map_rio}
            alt="mapa3"
          />
        )} */}
      </div>
    </>
  );
};

export default Content1;