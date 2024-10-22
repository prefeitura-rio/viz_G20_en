// RioMap.js
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as wkt from 'wkt'; // Import WKT library

const jsonDataUrl = './rj_shapefile.json'; // Adjust path if needed

const RioMap = () => {
  const svgRef = useRef();
  const [data, setData] = useState([]);

  // Fetch JSON data on component mount
  useEffect(() => {
    fetch(jsonDataUrl)
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }, []);

  // Render the map with D3 when data changes
  useEffect(() => {
    if (!data.length) return;

    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 600;

    // Convert WKT geometry to GeoJSON format
    const geoJsonData = {
      type: 'FeatureCollection',
      features: data.map(item => ({
        type: 'Feature',
        properties: { ...item },
        geometry: wkt.parse(item.geometry), // Parse WKT to GeoJSON
      })),
    };

    // Set up projection and path generator
    const projection = d3.geoMercator().fitSize([width, height], geoJsonData);
    const pathGenerator = d3.geoPath().projection(projection);

    // Clear previous paths if any
    svg.selectAll('*').remove();

    // Render neighborhoods as paths
    svg
      .selectAll('path')
      .data(geoJsonData.features)
      .enter()
      .append('path')
      .attr('d', pathGenerator)
      .attr('fill', 'steelblue')
      .attr('stroke', 'black')
      .attr('stroke-width', 0.5)
      .on('mouseover', function () {
        d3.select(this).attr('fill', 'orange');
      })
      .on('mouseout', function () {
        d3.select(this).attr('fill', 'steelblue');
      });
  }, [data]);

  return <svg ref={svgRef} width={800} height={600} />;
};

export default RioMap;
