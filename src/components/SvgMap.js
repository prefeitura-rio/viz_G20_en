import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import "./SvgMap.css";

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

const SvgMap = ({ correctCountries, setCorrectCountries }) => {

  useEffect(() => {
    const svg = d3.select('#world-map')
      .attr('viewBox', '0 0 960 500')
      .attr('preserveAspectRatio', 'xMidYMid meet');

    const projection = d3.geoMercator()
      .scale(150)
      .translate([480, 250]);

    const path = d3.geoPath().projection(projection);

    const tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('background', '#fff')
      .style('padding', '5px')
      .style('border', '1px solid #ccc')
      .style('border-radius', '5px')
      .style('pointer-events', 'none')
      .style('opacity', 0);

    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(worldData => {
      const countries = topojson.feature(worldData, worldData.objects.countries).features;

      svg.selectAll('path')
        .data(countries)
        .enter().append('path')
        .attr('d', path)
        .attr('class', 'country')
        .attr('fill', '#ccc')
        .attr('stroke', 'black')
        .attr('stroke-width', 0.5)
        .on('click', function (event, d) {
          const countryName = d.properties.name;
          if (data.some(country => country.name === countryName)) {
            d3.select(this).attr('fill', 'blue');
            setCorrectCountries(prev => [...new Set([...prev, countryName])]);
          } else {
            d3.select(this).attr('fill', 'red');
            setTimeout(() => d3.select(this).attr('fill', '#ccc'), 500);
          }
        })
        .on('mouseover', function (event, d) {
          tooltip.transition().duration(200).style('opacity', .9);
          tooltip.html(d.properties.name)
            .style('left', (event.pageX + 5) + 'px')
            .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', function () {
          tooltip.transition().duration(500).style('opacity', 0);
        });
    });

  }, [setCorrectCountries]);

  useEffect(() => {
    if (correctCountries) {
      setCorrectCountries(true);
    }
  }, [correctCountries]);

  const showAllCorrectCountries = () => {
    d3.selectAll('.country')
      .attr('fill', function (d) {
        return data.some(country => country.name === d.properties.name) ? 'blue' : '#ccc';
      });
    setCorrectCountries(true);
  };

  return (
    <div className="map-containerr">
      <svg id="world-map"></svg>
      {correctCountries ? (
        <p>Congrats!</p>
      ) : (
        <button onClick={showAllCorrectCountries}>Mostrar Países</button>
      )}
    </div>
  );
};

export default SvgMap;