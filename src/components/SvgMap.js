import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import worldJson from './world.json';
import "./SvgMap.css";
import * as d3 from 'd3';

const SvgMap = ({ chartType }) => {
  const chartRef = useRef(null);
  const [opacity, setOpacity] = React.useState(1);

  useEffect(() => {
    if (chartType === 'mapInfoBrazil' || chartType === 'mapInfoBrazil2' || chartType === 'mapRio' || chartType === 'mapRio2') {
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
      { name: 'South Africa', value: 1, color: '#c4b5c2' },
      { name: 'Germany', value: 2, color: '#dea768' },
      { name: 'Saudi Arabia', value: 3, color: '#e67a70' },
      { name: 'Argentina', value: 4, color: '#a4b7a1' },
      { name: 'Australia', value: 5, color: '#b7dcda' },
      { name: 'Brazil', value: 6, color: '#859f82' },
      { name: 'Canada', value: 7, color: '#6b7894' },
      { name: 'China', value: 8, color: '#c3868b' },
      { name: 'South Korea', value: 9, color: '#b65141' },
      { name: 'United States', value: 10, color: '#7999b4' },
      { name: 'France', value: 11, color: '#edd07a' },
      { name: 'India', value: 12, color: '#c9835e' },
      { name: 'Indonesia', value: 13, color: '#a4a3bf' },
      { name: 'Italy', value: 14, color: '#afa82d ' },
      { name: 'Japan', value: 15, color: '#b5636e' },
      { name: 'Mexico', value: 16, color: '#62949f' },
      { name: 'United Kingdom', value: 17, color: '#efc375' },
      { name: 'Russia', value: 18, color: '#9f635a' },
      { name: 'Turkey', value: 19, color: '#d3b68c' },
      { name: 'Rio de Janeiro', value: 20, color: '#859f82' },
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
      { name: 'Rio de Janeiro', value: 20 }
    ];

    const dataPie = [
      { name: 'South Africa', value: 399, color: '#c4b5c2' },  // Dodger Blue
      { name: 'Germany', value: 4308, color: '#dea768' },       // Tomato
      { name: 'Saudi Arabia', value: 1062, color: '#e67a70' },  // Lime Green
      { name: 'Argentina', value: 641, color: '#a4b7a1' },      // Gold
      { name: 'Australia', value: 1707, color: '#b7dcda' },     // Blue Violet
      { name: 'Brazil', value: 2081, color: '#859f82' },        // Forest Green
      { name: 'Canada', value: 2089, color: '#6b7894' },        // Orange Red
      { name: 'China', value: 19373, color: '#c3868b' },        // Crimson
      { name: 'South Korea', value: 1721, color: '#b65141' },   // Dark Turquoise
      { name: 'United States', value: 26854, color: '#7999b4' },// Steel Blue
      { name: 'France', value: 2923, color: '#edd07a' },        // Slate Blue
      { name: 'India', value: 3736, color: '#c9835e' },         // Dark Orange
      { name: 'Indonesia', value: 1391, color: '#a4a3bf' },     // Light Sea Green
      { name: 'Italy', value: 2169, color: '#afa82d ' },         // Medium Violet Red
      { name: 'Japan', value: 4409, color: '#b5636e' },         // Deep Pink
      { name: 'Mexico', value: 1663, color: '#62949f' },        // Dark Goldenrod
      { name: 'United Kingdom', value: 3159, color: '#efc375' },// Cornflower Blue
      { name: 'Russia', value: 2062, color: '#9f635a' },        // Saddle Brown
      { name: 'Turkey', value: 1029, color: '#d3b68c' },        // Medium Spring Green
      { name: 'African Union', value: 2988, color: '#9400D3' }, // Dark Violet
      { name: 'European Union', value: 17818, color: '#FF69B4' },// Hot Pink
      { name: 'Resto do Mundo', value: 19146, color: '#A9A9A9' },// Dark Gray
    ];
    const dataComercio = [
      { name: 'South Africa', value: 0.5, color: '#c4b5c2' },  // Dodger Blue
      { name: 'Germany', value: 6.35, color: '#dea768' },       // Tomato
      { name: 'Saudi Arabia', value: 1.15, color: '#e67a70' },  // Lime Green
      { name: 'Argentina', value: 0.35, color: '#a4b7a1' },     // Gold
      { name: 'Australia', value: 1.45, color: '#b7dcda' },     // Blue Violet
      { name: 'Brazil', value: 1.2, color: '#859f82' },         // Forest Green
      { name: 'Canada', value: 2.35, color: '#6b7894' },        // Orange Red
      { name: 'China', value: 12.5, color: '#c3868b' },         // Crimson
      { name: 'South Korea', value: 2.8, color: '#b65141' },    // Dark Turquoise
      { name: 'United States', value: 10.75, color: '#7999b4' },// Steel Blue
      { name: 'France', value: 2.85, color: '#edd07a' },        // Slate Blue
      { name: 'India', value: 2.3, color: '#c9835e' },          // Dark Orange
      { name: 'Indonesia', value: 1.05, color: '#a4a3bf' },     // Light Sea Green
      { name: 'Italy', value: 2.65, color: '#afa82d ' },         // Medium Violet Red
      { name: 'Japan', value: 3.25, color: '#b5636e' },         // Deep Pink
      { name: 'Mexico', value: 2.35, color: '#62949f' },        // Dark Goldenrod
      { name: 'United Kingdom', value: 2.65, color: '#efc375' },// Cornflower Blue
      { name: 'Russia', value: 1.5, color: '#9f635a' },         // Saddle Brown
      { name: 'Turkey', value: 1.2, color: '#d3b68c' },         // Medium Spring Green
      { name: 'Resto do Mundo', value: 15.8, color: '#A9A9A9' } // Dark Gray
    ];

    const dataPopulacao = [
      { name: 'South Africa', value: 59308690, color: '#c4b5c2' }, // Dodger Blue
      { name: 'Germany', value: 83166711, color: '#dea768' },      // Tomato
      { name: 'Saudi Arabia', value: 34813867, color: '#e67a70' }, // Lime Green
      { name: 'Argentina', value: 45195777, color: '#a4b7a1' },    // Gold
      { name: 'Australia', value: 25687041, color: '#b7dcda' },    // Blue Violet
      { name: 'Brazil', value: 212559417, color: '#859f82' },      // Forest Green
      { name: 'Canada', value: 38005238, color: '#6b7894' },       // Orange Red
      { name: 'China', value: 1444216107, color: '#c3868b' },      // Crimson
      { name: 'South Korea', value: 51780579, color: '#b65141' },  // Dark Turquoise
      { name: 'United States', value: 331893745, color: '#7999b4' },// Steel Blue
      { name: 'France', value: 65273511, color: '#edd07a' },       // Slate Blue
      { name: 'India', value: 1393409038, color: '#c9835e' },     // Dark Orange
      { name: 'Indonesia', value: 273523621, color: '#a4a3bf' },   // Light Sea Green
      { name: 'Italy', value: 60244639, color: '#afa82d ' },        // Medium Violet Red
      { name: 'Japan', value: 125836021, color: '#b5636e' },       // Deep Pink
      { name: 'Mexico', value: 128932753, color: '#62949f' },      // Dark Goldenrod
      { name: 'United Kingdom', value: 68207114, color: '#efc375' },// Cornflower Blue
      { name: 'Russia', value: 145912025, color: '#9f635a' },      // Saddle Brown
      { name: 'Turkey', value: 84339067, color: '#d3b68c' },      // Medium Spring Green
      { name: 'Resto do Mundo', value: 7800000000 - (59308690 + 83166711 + 34813867 + 45195777 + 25687041 + 212559417 + 38005238 + 1444216107 + 51780579 + 331893745 + 65273511 + 1393409038 + 273523621 + 60244639 + 125836021 + 128932753 + 68207114 + 145912025 + 84339067), color: '#A9A9A9' } // Dark Gray
    ];

    const dataPatentes = [
      { name: 'South Africa', value: 135180, color: '#c4b5c2' }, // Dodger Blue
      { name: 'Germany', value: 23592, color: '#dea768' },      // Tomato
      { name: 'Saudi Arabia', value: 2684, color: '#e67a70' },  // Lime Green
      { name: 'Argentina', value: 1949, color: '#a4b7a1' },     // Gold
      { name: 'Australia', value: 16407, color: '#b7dcda' },    // Blue Violet
      { name: 'Brazil', value: 23546, color: '#859f82' },       // Forest Green
      { name: 'Canada', value: 18125, color: '#6b7894' },       // Orange Red
      { name: 'China', value: 798347, color: '#c3868b' },       // Crimson
      { name: 'South Korea', value: 135180, color: '#b65141' }, // Dark Turquoise
      { name: 'United States', value: 323410, color: '#7999b4' },// Steel Blue
      { name: 'France', value: 12421, color: '#edd07a' },       // Slate Blue
      { name: 'India', value: 30490, color: '#c9835e' },        // Dark Orange
      { name: 'Indonesia', value: 9970, color: '#a4a3bf' },     // Light Sea Green
      { name: 'Italy', value: 7348, color: '#afa82d ' },          // Medium Violet Red
      { name: 'Japan', value: 201420, color: '#b5636e' },       // Deep Pink
      { name: 'Mexico', value: 9698, color: '#62949f' },        // Dark Goldenrod
      { name: 'United Kingdom', value: 10578, color: '#efc375' },// Cornflower Blue
      { name: 'Russia', value: 23315, color: '#9f635a' },       // Saddle Brown
      { name: 'Turkey', value: 3449, color: '#d3b68c' },        // Medium Spring Green
      { name: 'Resto do Mundo', value: 51439, color: '#A9A9A9' },// Dark Gray
    ];


    data.sort((a, b) => a.value - b.value);
    dataBrazil.sort((a, b) => a.value - b.value);
    dataPie.sort((a, b) => a.value - b.value);
    dataComercio.sort((a, b) => a.value - b.value);
    dataPopulacao.sort((a, b) => a.value - b.value);
    dataPatentes.sort((a, b) => a.value - b.value);

    function isMobile() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      return /android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
    }

    const mapOption = {
      visualMap: {
        show: false,
        left: 'right',
        top: 'center',
        min: 1,
        max: 20,
        inRange: {
          color: [
            '#c4b5c2', '#dea768', '#e67a70', '#a4b7a1', '#b7dcda',
            '#859f82', '#6b7894', '#c3868b', '#b65141', '#7999b4',
            '#edd07a', '#c9835e', '#a4a3bf', '#afa82d ', '#b5636e',
            '#62949f', '#efc375', '#9f635a', '#d3b68c', '#859f82'
          ]
        },
        // text: ['High', 'Low'],
        calculable: true
      },
      series: [
        {
          itemStyle: {
            emphasis: {
              areaColor: null,
              label: {
                // fontSize: 8,
                color: '#000',
              },

            }
          },
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
            '#c4b5c2', '#dea768', '#e67a70', '#a4b7a1', '#b7dcda',
            '#859f82', '#6b7894', '#c3868b', '#b65141', '#7999b4',
            '#edd07a', '#c9835e', '#a4a3bf', '#afa82d ', '#b5636e',
            '#62949f', '#efc375', '#9f635a', '#d3b68c', '#859f82'
          ]
        },
        // text: ['High', 'Low'],
        calculable: true
      },
      series: [
        {
          itemStyle: {
            emphasis: {
              areaColor: null,
              label: {
                // fontSize: 8,
                color: '#000',
              },

            }
          },
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

    // Create D3 hierarchy and pack layout
    const root = d3.hierarchy({ children: dataPie })
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value);

    d3.pack()
      .size([500, 500])
      .padding(0)(root); // Adjust padding as needed

    // Extract bubble data
    const bubbleData = root.leaves().map(node => ({
      name: node.data.name,
      value: node.value,
      color: node.data.color,
      x: node.x,
      y: node.y,
      r: node.r
    }));


    const bubbleOption = {
      xAxis: { show: false },
      yAxis: { show: false },
      animationDurationUpdate: 1000,
      series: [
        {
          id: 'population',
          universalTransition: true,
          type: 'scatter',
          data: bubbleData.map(item => ({
            value: [item.x, item.y, item.r], // x, y, radius
            name: item.name,
            color: item.color
          })),
          symbolSize: function (data) {
            return data[2] * 2.5
          },
          label: {
            show: true,
            formatter: function (param) {
              return param.data.name;
            },
            position: 'inside',
            color: '#fff',
            fontSize: 10,
          },
          itemStyle: {
            color: function (param) {
              return param.data.color || '#000';
            }
          },
          emphasis: {
            focus: 'series',
            label: {
              show: true,
              formatter: function (param) {
                return param.data.name;
              }
            }
          }
        }
      ]
    };

    const barComercio = {
      animationDurationUpdate: 1000,
      legend: {
        top: isMobile() ? '50' : '10',
        left: 'center',
        data: [
          'Brazil',
          'South Africa',
          'Germany',
          'Saudi Arabia',
          'Argentina',
          'Australia',
          'Canada',
          'China',
          'South Korea',
          'United States',
          'France',
          'India',
          'Indonesia',
          'Italy',
          'Japan',
          'Mexico',
          'United Kingdom',
          'Russia',
          'Turkey',
          'Resto do Mundo'
        ]
      },
      series: [
        {
          id: 'population',
          universalTransition: true,
          type: 'pie',
          radius: isMobile() ? '50%' : '70%',
          data: dataComercio.map((item) => ({
            value: item.value,
            name: item.name,
            itemStyle: { color: item.color },
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    const barPopulacao = {
      legend: {
        top: isMobile() ? '50' : '10',
        left: 'center'
      },
      series: [
        {
          id: 'population',
          universalTransition: true,
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 30,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: dataPopulacao.map((item) => ({
            value: item.value,
            name: item.name,
            itemStyle: { color: item.color }
          }))
        }
      ]
    };

    const rootPatentes = d3.hierarchy({ children: dataPatentes })
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value);

    d3.pack()
      .size([500, 500])
      .padding(5)(rootPatentes); // Adjust padding as needed

    // Extract bubble data
    const bubbleDataPatentes = rootPatentes.leaves().map(node => ({
      name: node.data.name,
      value: node.value,
      color: node.data.color,
      x: node.x,
      y: node.y,
      r: node.r
    }));


    const bubbleOptionPatentes = {
      xAxis: { show: false },
      yAxis: { show: false },
      animationDurationUpdate: 1000,
      series: [
        {
          id: 'population',
          universalTransition: true,
          type: 'scatter',
          data: bubbleDataPatentes.map(item => ({
            value: [item.x, item.y, item.r], // x, y, radius
            name: item.name,
            color: item.color
          })),
          symbolSize: function (data) {
            return data[2] * 2.5; // Radius scaling for visibility
          },
          label: {
            show: true,
            formatter: function (param) {
              return param.data.name;
            },
            position: 'inside',
            color: '#fff',
            fontSize: 10,
          },
          itemStyle: {
            color: function (param) {
              return param.data.color || '#000';
            }
          },
          emphasis: {
            focus: 'series',
            label: {
              show: true,
              formatter: function (param) {
                return param.data.name;
              }
            }
          }
        }
      ]
    };


    switch (chartType) {
      case 'bar':
        option = bubbleOption;
        break;
      case 'barComercio':
        option = barComercio;
        break;
      case 'barPopulacao':
        option = barPopulacao;
        break;
      case 'bubbleOptionPatentes':
        option = bubbleOptionPatentes;
        break;
      case 'mapBrazil':
        option = mapBrazil;
        break;
      case 'map':
        option = mapOption;
        break;
      default:
        option = mapOption;
    }
    myChart.setOption(option, true);
  }, [chartType]);

  return <>
    <div ref={chartRef} className="svg-map" style={{ opacity: opacity, transition: 'opacity 1s', zIndex: 5 }} />
  </>
};

export default SvgMap;