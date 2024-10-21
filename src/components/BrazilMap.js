import React, { useEffect, useRef } from "react"; import * as d3 from "d3"; import "./BrazilMap.css";

const BrazilMap = ({ chartType }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = window.innerWidth; const height = window.innerHeight;

    const svg = d3.select(svgRef.current);

    // Clear previous elements to prevent overlap or duplication
    svg.selectAll("*").remove();

    const projection = d3.geoMercator()
      .scale(850)
      .center([-45, -15])
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Set highlighted states based on chartType
    let highlightedStates = {};
    if (chartType === "mapInfoBrazil") {
      highlightedStates = {
        "Rio de Janeiro": { code: "RJ", value: 26, coords: [-43.1729, -22.9068] },
        "Distrito Federal": { code: "DF", value: 33, coords: [-47.9292, -15.7801] },
      };
    } else if (chartType === "mapInfoBrazil2") {
      highlightedStates = {
        "Pará": { code: "PA", value: 6, coords: [-48.5044, -1.4558] },
        "Bahia": { code: "BA", value: 4, coords: [-38.5161, -12.9714] },
        "Paraná": { code: "PR", value: 3, coords: [-54.5854, -25.5428] },
        "São Paulo": { code: "SP", value: 2, coords: [-46.6333, -23.5505] },
      };
    }

    // Load the GeoJSON map data
    d3.json(
      "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson"
    )
      .then((data) => {
        // Render map paths with a black border for all states
        svg
          .selectAll("path")
          .data(data.features)
          .enter()
          .append("path")
          .attr("d", path)
          .attr("class", (d) => {
            const stateName = d.properties.name;
            const stateData = highlightedStates?.[stateName];
            return stateData ? stateData.code : "default";
          })
          .attr("stroke", "black") // Add black stroke for country borders
          .attr("stroke-width", 1) // Adjust border thickness
          .attr("fill", (d) => {
            const stateName = d.properties.name;
            return highlightedStates[stateName] ? "none" : "#c8d9e8"; // Default fill
          });

        // Render annotations and labels for highlighted states
        Object.entries(highlightedStates).forEach(([name, state], index) => {
          const [x, y] = projection(state.coords);
          const boxX = width - 150;
          const boxY = 50 + index * 50;

          svg
            .append("line")
            .attr("x1", x)
            .attr("y1", y)
            .attr("x2", boxX)
            .attr("y2", boxY)
            .attr("class", "line");

          svg
            .append("rect")
            .attr("x", boxX - 20)
            .attr("y", boxY - 15)
            .attr("width", 40)
            .attr("height", 30)
            .attr("class", "boxMap");

          svg
            .append("text")
            .attr("x", boxX)
            .attr("y", boxY + 5)
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .attr("class", "label")
            .text(state.value);
        });
      })
      .catch((error) => console.error("Error loading map data:", error));
  }, [chartType]); // Add chartType as a dependency

  return <svg ref={svgRef} style={{ position: "fixed", top: 0, width: "100vw", height: "100vh", zIndex: "3" }} />;
};

export default BrazilMap;