import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import usaJson from './usa.json'; // Adjust the path as necessary

const SvgMap = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    let option;

    myChart.showLoading();
    myChart.hideLoading();
    echarts.registerMap('USA', usaJson, {
      Alaska: {
        left: -131,
        top: 25,
        width: 15
      },
      Hawaii: {
        left: -110,
        top: 28,
        width: 5
      },
      'Puerto Rico': {
        left: -76,
        top: 26,
        width: 2
      }
    });

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

    data.sort((a, b) => a.value - b.value);

    const mapOption = {
      visualMap: {
        left: 'right',
        min: 500000,
        max: 38000000,
        inRange: {
          color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        text: ['High', 'Low'],
        calculable: true
      },
      series: [
        {
          id: 'population',
          type: 'map',
          roam: true,
          map: 'USA',
          animationDurationUpdate: 1000,
          universalTransition: true,
          data: data
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
        data: data.map(item => item.name)
      },
      animationDurationUpdate: 1000,
      series: {
        type: 'bar',
        id: 'population',
        data: data.map(item => item.value),
        universalTransition: true
      }
    };

    let currentOption = mapOption;
    myChart.setOption(mapOption);
    setInterval(() => {
      currentOption = currentOption === mapOption ? barOption : mapOption;
      myChart.setOption(currentOption, true);
    }, 2000);

    option && myChart.setOption(option);
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '500px' }} />;
};

export default SvgMap;

//AQUI2