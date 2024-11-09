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
      { name: 'África do Sul', value: 1, color: '#c4b5c2' },
      { name: 'Alemanha', value: 2, color: '#dea768' },
      { name: 'Arabia Saudita', value: 3, color: '#e67a70' },
      { name: 'Argentina', value: 4, color: '#a4b7a1' },
      { name: 'Australia', value: 5, color: '#b7dcda' },
      { name: 'Brasil', value: 6, color: '#859f82' },
      { name: 'Canada', value: 7, color: '#6b7894' },
      { name: 'China', value: 8, color: '#c3868b' },
      { name: 'Coreia do Sul', value: 9, color: '#b65141' },
      { name: 'EUA', value: 10, color: '#7999b4' },
      { name: 'França', value: 11, color: '#edd07a' },
      { name: 'India', value: 12, color: '#c9835e' },
      { name: 'Indonesia', value: 13, color: '#a4a3bf' },
      { name: 'Italia', value: 14, color: '#afa82d ' },
      { name: 'Japao', value: 15, color: '#b5636e' },
      { name: 'Mexico', value: 16, color: '#62949f' },
      { name: 'Reino Unido', value: 17, color: '#efc375' },
      { name: 'Russia', value: 18, color: '#9f635a' },
      { name: 'Turquia', value: 19, color: '#d3b68c' },
      { name: 'Rio de Janeiro', value: 20, color: '#859f82' },
    ];

    const dataBrazil = [
      { name: 'África do Sul', value: 4822023 },
      { name: 'Alemanha', value: 731449 },
      { name: 'Arabia Saudita', value: 6553255 },
      { name: 'Argentina', value: 2949131 },
      { name: 'Australia', value: 38041430 },
      { name: 'Brasil', value: 5187582 },
      { name: 'Canada', value: 3590347 },
      { name: 'China', value: 917092 },
      { name: 'Coreia do Sul', value: 632323 },
      { name: 'EUA', value: 19317568 },
      { name: 'França', value: 9919945 },
      { name: 'India', value: 1392313 },
      { name: 'Indonesia', value: 1595728 },
      { name: 'Italia', value: 12875255 },
      { name: 'Japao', value: 6537334 },
      { name: 'Mexico', value: 3074186 },
      { name: 'Reino Unido', value: 2885905 },
      { name: 'Russia', value: 4380415 },
      { name: 'Turquia', value: 4601893 },
      { name: 'Rio de Janeiro', value: 20 }
    ];

    const dataPie = [
      { name: 'África do Sul', value: 0.6, color: '#c4b5c2' },  // Dodger Blue
      { name: 'Alemanha', value: 3.1, color: '#dea768' },       // Tomato
      { name: 'Arábia Saudita', value: 1.3, color: '#e67a70' },  // Lime Green
      { name: 'Argentina', value: 0.7, color: '#a4b7a1' },      // Gold
      { name: 'Austrália', value: 1.0, color: '#b7dcda' },     // Blue Violet
      { name: 'Brasil', value: 2.3, color: '#859f82' },        // Forest Green
      { name: 'Canadá', value: 1.3, color: '#6b7894' },        // Orange Red
      { name: 'China', value: 19.0, color: '#c3868b' },        // Crimson
      { name: 'Coreia do Sul', value: 1.6, color: '#b65141' },   // Dark Turquoise
      { name: 'EUA', value: 15.5, color: '#7999b4' },           // Steel Blue
      { name: 'França', value: 2.1, color: '#edd07a' },        // Slate Blue
      { name: 'Índia', value: 7.9, color: '#c9835e' },         // Dark Orange
      { name: 'Indonésia', value: 2.5, color: '#a4a3bf' },     // Light Sea Green
      { name: 'Itália', value: 1.8, color: '#afa82d ' },       // Medium Violet Red
      { name: 'Japão', value: 3.6, color: '#b5636e' },         // Deep Pink
      { name: 'México', value: 1.9, color: '#62949f' },        // Dark Goldenrod
      { name: 'Reino Unido', value: 2.2, color: '#efc375' },   // Cornflower Blue
      { name: 'Rússia', value: 2.9, color: '#9f635a' },        // Saddle Brown
      { name: 'Turquia', value: 2.1, color: '#d3b68c' },       // Medium Spring Green
      { name: 'União Africana', value: 4.4, color: '#9400D3' }, // Dark Violet
      { name: 'União Europeia', value: 7.2, color: '#FF69B4' }, // Hot Pink
      { name: 'Resto do Mundo', value: 15.2, color: '#A9A9A9' }, // Dark Gray (placeholder for the rest)
    ];

    const dataComercio = [
      { name: 'África do Sul', value: 0.5, color: '#c4b5c2' },      // Dodger Blue
      { name: 'Alemanha', value: 6.35, color: '#dea768' },          // Tomato
      { name: 'Arábia Saudita', value: 1.15, color: '#e67a70' },    // Lime Green
      { name: 'Argentina', value: 0.35, color: '#a4b7a1' },         // Gold
      { name: 'Austrália', value: 1.45, color: '#b7dcda' },         // Blue Violet
      { name: 'Brasil', value: 1.2, color: '#859f82' },             // Forest Green
      { name: 'Canadá', value: 2.35, color: '#6b7894' },            // Orange Red
      { name: 'China', value: 12.5, color: '#c3868b' },             // Crimson
      { name: 'Coreia do Sul', value: 2.8, color: '#b65141' },      // Dark Turquoise
      { name: 'EUA', value: 10.75, color: '#7999b4' },              // Steel Blue
      { name: 'França', value: 2.85, color: '#edd07a' },            // Slate Blue
      { name: 'Índia', value: 2.3, color: '#c9835e' },              // Dark Orange
      { name: 'Indonésia', value: 1.05, color: '#a4a3bf' },         // Light Sea Green
      { name: 'Itália', value: 2.65, color: '#afa82d' },            // Medium Violet Red
      { name: 'Japão', value: 3.25, color: '#b5636e' },             // Deep Pink
      { name: 'México', value: 2.35, color: '#62949f' },            // Dark Goldenrod
      { name: 'Reino Unido', value: 2.65, color: '#efc375' },       // Cornflower Blue
      { name: 'Rússia', value: 1.5, color: '#9f635a' },             // Saddle Brown
      { name: 'Turquia', value: 1.2, color: '#d3b68c' },            // Medium Spring Green
      { name: 'União Europeia', value: 14.05, color: '#FF69B4' },   // Hot Pink
      { name: 'União Africana', value: 1.75, color: '#9400D3' },    // Dark Violet
      { name: 'Resto do Mundo', value: 25, color: '#A9A9A9' }     // Dark Gray
    ];

    const dataPopulacao = [
      { name: 'África do Sul', value: 0.8, color: '#c4b5c2' }, // Dodger Blue
      { name: 'Alemanha', value: 1.0, color: '#dea768' },      // Tomato
      { name: 'Arabia Saudita', value: 0.4, color: '#e67a70' }, // Lime Green
      { name: 'Argentina', value: 0.6, color: '#a4b7a1' },    // Gold
      { name: 'Australia', value: 0.3, color: '#b7dcda' },    // Blue Violet
      { name: 'Brasil', value: 2.5, color: '#859f82' },      // Forest Green
      { name: 'Canada', value: 0.5, color: '#6b7894' },       // Orange Red
      { name: 'China', value: 17.2, color: '#c3868b' },      // Crimson
      { name: 'Coreia do Sul', value: 0.6, color: '#b65141' },  // Dark Turquoise
      { name: 'EUA', value: 4.1, color: '#7999b4' },// Steel Blue
      { name: 'França', value: 0.8, color: '#edd07a' },       // Slate Blue
      { name: 'India', value: 17.6, color: '#c9835e' },     // Dark Orange
      { name: 'Indonesia', value: 3.4, color: '#a4a3bf' },   // Light Sea Green
      { name: 'Italia', value: 0.7, color: '#afa82d ' },        // Medium Violet Red
      { name: 'Japao', value: 1.5, color: '#b5636e' },       // Deep Pink
      { name: 'Mexico', value: 1.6, color: '#62949f' },      // Dark Goldenrod
      { name: 'Reino Unido', value: 0.8, color: '#efc375' },// Cornflower Blue
      { name: 'Russia', value: 1.7, color: '#9f635a' },      // Saddle Brown
      { name: 'União Europeia', value: 0, color: '#d3b68c' },      // Medium Spring Green
      { name: 'União Africana', value: 0, color: '#d3b68c' },      // Medium Spring Green
      { name: 'Turquia', value: 1.1, color: '#d3b68c' },      // Medium Spring Green
      { name: 'Resto do Mundo', value: 44.2, color: '#A9A9A9' } // Dark Gray
    ];

    const dataPatentes = [
      { name: 'África do Sul', value: 135180, color: '#c4b5c2', percent: '9.18' }, // Dodger Blue
      { name: 'Alemanha', value: 23592, color: '#dea768', percent: '1.60' },      // Tomato
      { name: 'Arabia Saudita', value: 2684, color: '#e67a70', percent: '0.18' },  // Lime Green
      { name: 'Argentina', value: 1949, color: '#a4b7a1', percent: '0.13' },     // Gold
      { name: 'Australia', value: 16407, color: '#b7dcda', percent: '1.11' },    // Blue Violet
      { name: 'Brasil', value: 23546, color: '#859f82', percent: '1.60' },       // Forest Green
      { name: 'Canada', value: 18125, color: '#6b7894', percent: '1.23' },       // Orange Red
      { name: 'China', value: 798347, color: '#c3868b', percent: '54.21' },       // Crimson
      { name: 'Coreia do Sul', value: 135180, color: '#b65141', percent: '9.18' }, // Dark Turquoise
      { name: 'EUA', value: 323410, color: '#7999b4', percent: '21.97' },// Steel Blue
      { name: 'França', value: 12421, color: '#edd07a', percent: '0.84' },       // Slate Blue
      { name: 'India', value: 30490, color: '#c9835e', percent: '2.07' },        // Dark Orange
      { name: 'Indonesia', value: 9970, color: '#a4a3bf', percent: '0.68' },     // Light Sea Green
      { name: 'Italia', value: 7348, color: '#afa82d ', percent: '0.50' },          // Medium Violet Red
      { name: 'Japao', value: 201420, color: '#b5636e', percent: '13.68' },       // Deep Pink
      { name: 'Mexico', value: 9698, color: '#62949f', percent: '0.66' },        // Dark Goldenrod
      { name: 'Reino Unido', value: 10578, color: '#efc375', percent: '0.72' },// Cornflower Blue
      { name: 'Russia', value: 23315, color: '#9f635a', percent: '1.58' },       // Saddle Brown
      { name: 'Turquia', value: 3449, color: '#d3b68c', percent: '0.23' },        // Medium Spring Green
      { name: 'Resto do Mundo', value: 51439, color: '#A9A9A9', percent: '3.50' },// Dark Gray
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
                fontFamily: "Libre Baskerville",
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
                fontFamily: "Libre Baskerville",
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
            percent: item.value,
            color: item.color
          })),
          symbolSize: function (data) {
            return data[2] * 2.5
          },
          label: {
            show: true,
            formatter: function (param) {
              return param.data.name + '\n\n' + param.data.percent + '%';
            },
            position: 'inside',
            color: '#000000',
            fontSize: 10,
            fontFamily: "Libre Baskerville",
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
                return param.data.name + '\n\n' + param.data.percent + '%';
              },
              fontSize: 14,
            }
          }
        }
      ]
    };

    const barComercio = {
      animationDurationUpdate: 1000,
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
          label: {
            formatter: function (param) {
              return param.data.name;
            },
            position: 'outside',
            fontFamily: "Libre Baskerville",
            fontSize: 10
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
            label: {
              formatter: function (param) {
                return param.data.value + '%';
              },
              fontSize: 15
            },
          },
        },
      ],
    };

    const barPopulacao = {
      animationDurationUpdate: 1000,
      // legend: {
      //   top: isMobile() ? '50' : '10',
      //   left: 'center',
      //   data: [
      //     'Brasil',
      //     'África do Sul',
      //     'Alemanha',
      //     'Arabia Saudita',
      //     'Argentina',
      //     'Australia',
      //     'Canada',
      //     'China',
      //     'Coreia do Sul',
      //     'EUA',
      //     'França',
      //     'India',
      //     'Indonesia',
      //     'Italia',
      //     'Japao',
      //     'Mexico',
      //     'Reino Unido',
      //     'Russia',
      //     'Turquia',
      //     'Resto do Mundo'
      //   ]
      // },
      series: [
        {
          id: 'population',
          universalTransition: true,
          type: 'pie',
          radius: isMobile() ? '50%' : '70%',
          data: dataPopulacao.map((item) => ({
            value: item.value,
            name: item.name,
            itemStyle: { color: item.color },
          })),
          label: {
            formatter: function (param) {
              return param.data.name;
            },
            position: 'outside',
            fontFamily: "Libre Baskerville",
            fontSize: 10
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
            label: {
              formatter: function (param) {
                return param.data.value + '%';
              },
              fontSize: 15
            },
          },
        },
      ],
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
      percent: node.data.percent,
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
            color: item.color,
            percent: item.percent,
          })),
          symbolSize: function (data) {
            return data[2] * 2.5; // Radius scaling for visibility
          },
          label: {
            show: true,
            formatter: function (param) {
              return param.data.name + '\n\n' + param.data.percent + '%';
            },
            position: 'inside',
            color: '#000000',
            fontSize: 10,
            fontFamily: "Libre Baskerville",
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
                return param.data.name + '\n\n' + param.data.percent + '%';
              },
              fontSize: 14,
            },

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