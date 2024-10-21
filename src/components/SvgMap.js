import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import worldJson from './world.json';
import "./SvgMap.css";

const SvgMap = ({ chartType }) => {
  const chartRef = useRef(null);
  const [opacity, setOpacity] = React.useState(1);

  useEffect(() => {
    if (chartType === 'mapInfoBrazil' || chartType === 'mapInfoBrazil2') {
      setOpacity(0);
      return; // Skip chart rendering if chartType is 'mapNow'
    } else {
      setOpacity(1);
    }

    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    let option;

    myChart.showLoading();
    myChart.hideLoading();
    echarts.registerMap('WorldMap', worldJson, {});

    const data = [
      { name: 'South Africa', value: 1, color: '#1E90FF' },
      { name: 'Germany', value: 2, color: '#FF6347' },
      { name: 'Saudi Arabia', value: 3, color: '#32CD32' },
      { name: 'Argentina', value: 4, color: '#FFD700' },
      { name: 'Australia', value: 5, color: '#8A2BE2' },
      { name: 'Brazil', value: 6, color: '#228B22' },
      { name: 'Canada', value: 7, color: '#FF4500' },
      { name: 'China', value: 8, color: '#DC143C' },
      { name: 'South Korea', value: 9, color: '#00CED1' },
      { name: 'United States', value: 10, color: '#4682B4' },
      { name: 'France', value: 11, color: '#6A5ACD' },
      { name: 'India', value: 12, color: '#FF8C00' },
      { name: 'Indonesia', value: 13, color: '#20B2AA' },
      { name: 'Italy', value: 14, color: '#C71585' },
      { name: 'Japan', value: 15, color: '#FF1493' },
      { name: 'Mexico', value: 16, color: '#B8860B' },
      { name: 'United Kingdom', value: 17, color: '#6495ED' },
      { name: 'Russia', value: 18, color: '#8B4513' },
      { name: 'Turkey', value: 19, color: '#00FA9A' },
    ];

    const dataBrazil = [
      { name: 'South Africa', value: 4822023 },
      { name: 'Germany', value: 731449 },
      { name: 'Saudi Arabia', value: 6553255 },
      { name: 'Argentina', value: 2949131 },
      { name: 'Australia', value: 38041430 },
      { name: 'Brazil', value: 5187582 },
      { name: 'Canada', value: 3590347 },
      { name: 'China', value: 917092 },
      { name: 'South Korea', value: 632323 },
      { name: 'United States', value: 19317568 },
      { name: 'France', value: 9919945 },
      { name: 'India', value: 1392313 },
      { name: 'Indonesia', value: 1595728 },
      { name: 'Italy', value: 12875255 },
      { name: 'Japan', value: 6537334 },
      { name: 'Mexico', value: 3074186 },
      { name: 'United Kingdom', value: 2885905 },
      { name: 'Russia', value: 4380415 },
      { name: 'Turkey', value: 4601893 },
    ];
    const dataBar = [
      { name: 'South Africa', value: 399, color: '#1E90FF' },  // Dodger Blue
      { name: 'Germany', value: 4308, color: '#FF6347' },       // Tomato
      { name: 'Saudi Arabia', value: 1062, color: '#32CD32' },  // Lime Green
      { name: 'Argentina', value: 641, color: '#FFD700' },      // Gold
      { name: 'Australia', value: 1707, color: '#8A2BE2' },     // Blue Violet
      { name: 'Brazil', value: 2081, color: '#228B22' },        // Forest Green
      { name: 'Canada', value: 2089, color: '#FF4500' },        // Orange Red
      { name: 'China', value: 19373, color: '#DC143C' },        // Crimson
      { name: 'South Korea', value: 1721, color: '#00CED1' },   // Dark Turquoise
      { name: 'United States', value: 26854, color: '#4682B4' },// Steel Blue
      { name: 'France', value: 2923, color: '#6A5ACD' },        // Slate Blue
      { name: 'India', value: 3736, color: '#FF8C00' },         // Dark Orange
      { name: 'Indonesia', value: 1391, color: '#20B2AA' },     // Light Sea Green
      { name: 'Italy', value: 2169, color: '#C71585' },         // Medium Violet Red
      { name: 'Japan', value: 4409, color: '#FF1493' },         // Deep Pink
      { name: 'Mexico', value: 1663, color: '#B8860B' },        // Dark Goldenrod
      { name: 'United Kingdom', value: 3159, color: '#6495ED' },// Cornflower Blue
      { name: 'Russia', value: 2062, color: '#8B4513' },        // Saddle Brown
      { name: 'Turkey', value: 1029, color: '#00FA9A' },        // Medium Spring Green
      { name: 'African Union', value: 2988, color: '#9400D3' }, // Dark Violet
      { name: 'European Union', value: 17818, color: '#FF69B4' },// Hot Pink
      { name: 'Resto do Mundo', value: 19146, color: '#A9A9A9' },// Dark Gray
    ];
    const dataComercio = [
      { name: 'South Africa', value: 0.5, color: '#1E90FF' },  // Dodger Blue
      { name: 'Germany', value: 6.35, color: '#FF6347' },       // Tomato
      { name: 'Saudi Arabia', value: 1.15, color: '#32CD32' },  // Lime Green
      { name: 'Argentina', value: 0.35, color: '#FFD700' },     // Gold
      { name: 'Australia', value: 1.45, color: '#8A2BE2' },     // Blue Violet
      { name: 'Brazil', value: 1.2, color: '#228B22' },         // Forest Green
      { name: 'Canada', value: 2.35, color: '#FF4500' },        // Orange Red
      { name: 'China', value: 12.5, color: '#DC143C' },         // Crimson
      { name: 'South Korea', value: 2.8, color: '#00CED1' },    // Dark Turquoise
      { name: 'United States', value: 10.75, color: '#4682B4' },// Steel Blue
      { name: 'France', value: 2.85, color: '#6A5ACD' },        // Slate Blue
      { name: 'India', value: 2.3, color: '#FF8C00' },          // Dark Orange
      { name: 'Indonesia', value: 1.05, color: '#20B2AA' },     // Light Sea Green
      { name: 'Italy', value: 2.65, color: '#C71585' },         // Medium Violet Red
      { name: 'Japan', value: 3.25, color: '#FF1493' },         // Deep Pink
      { name: 'Mexico', value: 2.35, color: '#B8860B' },        // Dark Goldenrod
      { name: 'United Kingdom', value: 2.65, color: '#6495ED' },// Cornflower Blue
      { name: 'Russia', value: 1.5, color: '#8B4513' },         // Saddle Brown
      { name: 'Turkey', value: 1.2, color: '#00FA9A' },         // Medium Spring Green
      { name: 'Resto do Mundo', value: 15.8, color: '#A9A9A9' } // Dark Gray
    ];

    const dataPopulacao = [
      { name: 'South Africa', value: 59308690, color: '#1E90FF' }, // Dodger Blue
      { name: 'Germany', value: 83166711, color: '#FF6347' },      // Tomato
      { name: 'Saudi Arabia', value: 34813867, color: '#32CD32' }, // Lime Green
      { name: 'Argentina', value: 45195777, color: '#FFD700' },    // Gold
      { name: 'Australia', value: 25687041, color: '#8A2BE2' },    // Blue Violet
      { name: 'Brazil', value: 212559417, color: '#228B22' },      // Forest Green
      { name: 'Canada', value: 38005238, color: '#FF4500' },       // Orange Red
      { name: 'China', value: 1444216107, color: '#DC143C' },      // Crimson
      { name: 'South Korea', value: 51780579, color: '#00CED1' },  // Dark Turquoise
      { name: 'United States', value: 331893745, color: '#4682B4' },// Steel Blue
      { name: 'France', value: 65273511, color: '#6A5ACD' },       // Slate Blue
      { name: 'India', value: 1393409038, color: '#FF8C00' },     // Dark Orange
      { name: 'Indonesia', value: 273523621, color: '#20B2AA' },   // Light Sea Green
      { name: 'Italy', value: 60244639, color: '#C71585' },        // Medium Violet Red
      { name: 'Japan', value: 125836021, color: '#FF1493' },       // Deep Pink
      { name: 'Mexico', value: 128932753, color: '#B8860B' },      // Dark Goldenrod
      { name: 'United Kingdom', value: 68207114, color: '#6495ED' },// Cornflower Blue
      { name: 'Russia', value: 145912025, color: '#8B4513' },      // Saddle Brown
      { name: 'Turkey', value: 84339067, color: '#00FA9A' },      // Medium Spring Green
      { name: 'Resto do Mundo', value: 7800000000 - (59308690 + 83166711 + 34813867 + 45195777 + 25687041 + 212559417 + 38005238 + 1444216107 + 51780579 + 331893745 + 65273511 + 1393409038 + 273523621 + 60244639 + 125836021 + 128932753 + 68207114 + 145912025 + 84339067), color: '#A9A9A9' } // Dark Gray
    ];

    const dataPatentes = [
      { name: 'South Africa', value: 135180, color: '#1E90FF' }, // Dodger Blue
      { name: 'Germany', value: 23592, color: '#FF6347' },      // Tomato
      { name: 'Saudi Arabia', value: 2684, color: '#32CD32' },  // Lime Green
      { name: 'Argentina', value: 1949, color: '#FFD700' },     // Gold
      { name: 'Australia', value: 16407, color: '#8A2BE2' },    // Blue Violet
      { name: 'Brazil', value: 23546, color: '#228B22' },       // Forest Green
      { name: 'Canada', value: 18125, color: '#FF4500' },       // Orange Red
      { name: 'China', value: 798347, color: '#DC143C' },       // Crimson
      { name: 'South Korea', value: 135180, color: '#00CED1' }, // Dark Turquoise
      { name: 'United States', value: 323410, color: '#4682B4' },// Steel Blue
      { name: 'France', value: 12421, color: '#6A5ACD' },       // Slate Blue
      { name: 'India', value: 30490, color: '#FF8C00' },        // Dark Orange
      { name: 'Indonesia', value: 9970, color: '#20B2AA' },     // Light Sea Green
      { name: 'Italy', value: 7348, color: '#C71585' },          // Medium Violet Red
      { name: 'Japan', value: 201420, color: '#FF1493' },       // Deep Pink
      { name: 'Mexico', value: 9698, color: '#B8860B' },        // Dark Goldenrod
      { name: 'United Kingdom', value: 10578, color: '#6495ED' },// Cornflower Blue
      { name: 'Russia', value: 23315, color: '#8B4513' },       // Saddle Brown
      { name: 'Turkey', value: 3449, color: '#00FA9A' },        // Medium Spring Green
      { name: 'Resto do Mundo', value: 51439, color: '#A9A9A9' },// Dark Gray
    ];


    data.sort((a, b) => a.value - b.value);
    dataBrazil.sort((a, b) => a.value - b.value);
    dataBar.sort((a, b) => a.value - b.value);
    dataComercio.sort((a, b) => a.value - b.value);
    dataPopulacao.sort((a, b) => a.value - b.value);
    dataPatentes.sort((a, b) => a.value - b.value);

    const mapOption = {
      visualMap: {
        show: false,
        left: 'right',
        top: 'center',
        min: 1,
        max: 19,
        inRange: {
          color: [
            '#1E90FF', '#FF6347', '#32CD32', '#FFD700', '#8A2BE2',
            '#228B22', '#FF4500', '#DC143C', '#00CED1', '#4682B4',
            '#6A5ACD', '#FF8C00', '#20B2AA', '#C71585', '#FF1493',
            '#B8860B', '#6495ED', '#8B4513', '#00FA9A'
          ]
        },
        // text: ['High', 'Low'],
        calculable: true
      },
      series: [
        {
          id: 'population',
          type: 'map',
          roam: false,
          map: 'WorldMap',
          animationDurationUpdate: 1000,
          universalTransition: true,
          data: data,
          center: [0, 0], // Coordenadas aproximadas do centro do Brasil
          zoom: 1,
          scaleLimit: {
            min: 1,
            max: 10,
          },
        }
      ]
    };
    const mapBrazil = {
      visualMap: {
        show: false,
        left: 'right',
        top: 'center',
        min: 1,
        max: 19,
        inRange: {
          color: [
            '#1E90FF', '#FF6347', '#32CD32', '#FFD700', '#8A2BE2',
            '#228B22', '#FF4500', '#DC143C', '#00CED1', '#4682B4',
            '#6A5ACD', '#FF8C00', '#20B2AA', '#C71585', '#FF1493',
            '#B8860B', '#6495ED', '#8B4513', '#00FA9A'
          ]
        },
        // text: ['High', 'Low'],
        calculable: true
      },
      series: [
        {
          id: 'population',
          type: 'map',
          roam: false,
          map: 'WorldMap',
          center: [-52.5, -14], // Coordenadas aproximadas do centro do Brasil
          zoom: 4, // Nível de zoom para focar no Brasil
          animationDurationUpdate: 1000,
          universalTransition: true,
          data: data,
          scaleLimit: {
            min: 1,
            max: 10,
          },
        }
      ]
    };
    const mapRio = {
      visualMap: {
        show: false,
        left: 'right',
        top: 'center',
        min: 1,
        max: 19,
        inRange: {
          color: [
            '#1E90FF', '#FF6347', '#32CD32', '#FFD700', '#8A2BE2',
            '#228B22', '#FF4500', '#DC143C', '#00CED1', '#4682B4',
            '#6A5ACD', '#FF8C00', '#20B2AA', '#C71585', '#FF1493',
            '#B8860B', '#6495ED', '#8B4513', '#00FA9A'
          ]
        },
        // text: ['High', 'Low'],
        calculable: true
      },
      series: [
        {
          id: 'population',
          type: 'map',
          roam: false,
          map: 'WorldMap',
          center: [-43.1729, -22.9068], // Coordenadas aproximadas do centro do Brasil
          zoom: 7, // Nível de zoom para focar no Brasil
          animationDurationUpdate: 1000,
          universalTransition: true,
          data: data,
          scaleLimit: {
            min: 1,
            max: 10,
          },
        }
      ]
    };

    const barOption = {
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          rotate: 30,
        },
        data: dataBar.map((item) => item.name),
      },
      animationDurationUpdate: 1000,
      series: {
        type: 'bar',
        id: 'population',
        data: dataBar.map((item) => ({
          value: item.value,
          itemStyle: {
            color: item.color, // Assign specific color from dataBar
          },
        })),
        universalTransition: true,
      },
    };
    const barComercio = {
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          rotate: 30,
        },
        data: dataComercio.map(item => item.name),
      },
      animationDurationUpdate: 1000,
      series: [{
        type: 'bar',
        id: 'population',
        data: dataComercio.map(item => ({
          value: item.value,
          itemStyle: { color: item.color }, // Assign color based on the dataComercio array
        })),
        universalTransition: true,
      }],
    };

    const barPopulacao = {
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          rotate: 30
        },
        data: dataPopulacao.map(item => item.name)
      },
      animationDurationUpdate: 1000,
      series: {
        type: 'bar',
        id: 'population',
        data: dataPopulacao.map(item => ({
          value: item.value,
          itemStyle: { color: item.color }, // Assign color based on the dataComercio array
        })),
        universalTransition: true
      }
    };
    const piePatentes = {
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          rotate: 30
        },
        data: dataPatentes.map(item => item.name)
      },
      animationDurationUpdate: 1000,
      series: {
        type: 'bar',
        id: 'population',
        data: dataPatentes.map(item => ({
          value: item.value,
          itemStyle: { color: item.color }, // Assign color based on the dataComercio array
        })),
        universalTransition: true
      }
    };

    switch (chartType) {
      case 'bar':
        option = barOption;
        break;
      case 'barComercio':
        option = barComercio;
        break;
      case 'barPopulacao':
        option = barPopulacao;
        break;
      case 'piePatentes':
        option = piePatentes;
        break;
      case 'mapBrazil':
        option = mapBrazil;
        break;
      case 'mapRio':
        option = mapRio;
        break;
      case 'map':
        option = mapOption;
        break;
      default:
        option = mapOption;
    }
    myChart.setOption(option);
  }, [chartType]);

  return <>
    <div ref={chartRef} className="svg-map" style={{ opacity: opacity, transition: 'opacity 2s' }} />
  </>
};

export default SvgMap;