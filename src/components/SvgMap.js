import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import worldJson from './world.json';
import "./SvgMap.css";

const SvgMap = ({ chartType }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartType === 'mapInfoBrazil' || chartType === 'mapInfoBrazil2') {
      return; // Skip chart rendering if chartType is 'mapNow'
    }

    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    let option;

    myChart.showLoading();
    myChart.hideLoading();
    echarts.registerMap('WorldMap', worldJson, {});
    echarts.registerMap('brazilMap', worldJson, {});

    const data = [
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
      { name: 'South Africa', value: 100000 },
      { name: 'Germany', value: 2 },
      { name: 'Saudi Arabia', value: 3 },
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
      { name: 'Resto do Mundo', value: 1000000 },
    ];
    const dataComercio = [
      { name: 'South Africa', value: 1 },
      { name: 'Germany', value: 2 },
      { name: 'Saudi Arabia', value: 3 },
      { name: 'Argentina', value: 4 },
      { name: 'Australia', value: 5 },
      { name: 'Brazil', value: 6 },
      { name: 'Canada', value: 7 },
      { name: 'China', value: 8 },
      { name: 'South Korea', value: 9 },
      { name: 'United States', value: 10 },
      { name: 'France', value: 11 },
      { name: 'India', value: 12 },
      { name: 'Indonesia', value: 13 },
      { name: 'Italy', value: 14 },
      { name: 'Japan', value: 15 },
      { name: 'Mexico', value: 16 },
      { name: 'United Kingdom', value: 17 },
      { name: 'Russia', value: 18 },
      { name: 'Turkey', value: 19 },
      { name: 'Resto do Mundo', value: 20 },
    ];
    const dataPopulacao = [
      { name: 'South Africa', value: 59308690 },
      { name: 'Germany', value: 83166711 },
      { name: 'Saudi Arabia', value: 34813867 },
      { name: 'Argentina', value: 45195777 },
      { name: 'Australia', value: 25687041 },
      { name: 'Brazil', value: 212559417 },
      { name: 'Canada', value: 38005238 },
      { name: 'China', value: 1444216107 },
      { name: 'South Korea', value: 51780579 },
      { name: 'United States', value: 331893745 },
      { name: 'France', value: 65273511 },
      { name: 'India', value: 1393409038 },
      { name: 'Indonesia', value: 273523621 },
      { name: 'Italy', value: 60244639 },
      { name: 'Japan', value: 125836021 },
      { name: 'Mexico', value: 128932753 },
      { name: 'United Kingdom', value: 68207114 },
      { name: 'Russia', value: 145912025 },
      { name: 'Turkey', value: 84339067 },
      { name: 'Resto do Mundo', value: 7800000000 - (59308690 + 83166711 + 34813867 + 45195777 + 25687041 + 212559417 + 38005238 + 1444216107 + 51780579 + 331893745 + 65273511 + 1393409038 + 273523621 + 60244639 + 125836021 + 128932753 + 68207114 + 145912025 + 84339067) },
    ];
    const dataPatentes = [
      { name: 'South Africa', value: 11267 },
      { name: 'Germany', value: 23592 },
      { name: 'Saudi Arabia', value: 2684 },
      { name: 'Argentina', value: 1949 },
      { name: 'Australia', value: 16407 },
      { name: 'Brazil', value: 23546 },
      { name: 'Canada', value: 18125 },
      { name: 'China', value: 798347 },
      { name: 'South Korea', value: 135180 },
      { name: 'United States', value: 323410 },
      { name: 'France', value: 12421 },
      { name: 'India', value: 30490 },
      { name: 'Indonesia', value: 9970 },
      { name: 'Italy', value: 7348 },
      { name: 'Japan', value: 201420 },
      { name: 'Mexico', value: 9698 },
      { name: 'United Kingdom', value: 10578 },
      { name: 'Russia', value: 23315 },
      { name: 'Turkey', value: 3449 },
      { name: 'Resto do Mundo', value: 51439 },

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
        min: 500000,
        max: 38000000,
        inRange: {
          color: [
            '#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8',
            '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'
          ]
        },
        text: ['High', 'Low'],
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
        min: 500000,
        max: 38000000,
        inRange: {
          color: [
            '#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8',
            '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'
          ]
        },
        text: ['High', 'Low'],
        calculable: true
      },
      series: [
        {
          id: 'population',
          type: 'map',
          roam: false,
          map: 'brazilMap',
          center: [-52.5, -14], // Coordenadas aproximadas do centro do Brasil
          zoom: 4, // Nível de zoom para focar no Brasil
          animationDurationUpdate: 1000,
          universalTransition: true,
          data: dataBrazil,
          scaleLimit: {
            min: 1,
            max: 10,
          },
        }
      ]
    };

    const barOption = {
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          rotate: 30
        },
        data: dataBar.map(item => item.name)
      },
      animationDurationUpdate: 1000,
      series: {
        type: 'bar',
        id: 'population',
        data: dataBar.map(item => item.value),
        universalTransition: true
      }
    };
    const barComercio = {
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          rotate: 30
        },
        data: dataComercio.map(item => item.name)
      },
      animationDurationUpdate: 1000,
      series: {
        type: 'bar',
        id: 'population',
        data: dataComercio.map(item => item.value),
        universalTransition: true
      }
    };
    const verticalBarPopulacao = {
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
        data: dataPopulacao.map(item => item.value),
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
        data: dataPatentes.map(item => item.value),
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
      case 'verticalBarPopulacao':
        option = verticalBarPopulacao;
        break;
      case 'piePatentes':
        option = piePatentes;
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
    myChart.setOption(option);
  }, [chartType]);

  return <>
    <div ref={chartRef} className="svg-map" />
  </>
};

export default SvgMap;