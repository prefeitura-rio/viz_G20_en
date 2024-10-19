import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import createREGL from 'regl';
import { animateMapToBarChart } from 'regl-map-animation';

const SvgMap = () => {
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    if (!showChart) {
      // D3 code to render the map
      const svg = d3.select('#map')
        .attr('width', 800)
        .attr('height', 600);

      const projection = d3.geoMercator().scale(100).translate([400, 300]);
      const path = d3.geoPath().projection(projection);

      d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
        .then(data => {
          svg.selectAll('path')
            .data(data.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', 'steelblue');
        });
    } else {
      // Transition to bar chart using regl-map-animation
      const regl = createREGL('#map');
      animateMapToBarChart(regl, {
        mapDataUrl: 'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson',
        barData: [
          { name: 'A', value: 30 },
          { name: 'B', value: 80 },
          { name: 'C', value: 45 },
          { name: 'D', value: 60 },
          { name: 'E', value: 20 },
          { name: 'F', value: 90 },
          { name: 'G', value: 55 },
        ],
        width: 800,
        height: 600,
      });
    }
  }, [showChart]);

  return (
    <div>
      <button onClick={() => setShowChart(!showChart)}>
        {showChart ? 'Show Map' : 'Show Chart'}
      </button>
      <svg id="map"></svg>
    </div>
  );
};

export default SvgMap;