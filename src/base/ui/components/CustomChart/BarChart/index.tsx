import React from 'react';
import { EChartsOption } from 'echarts';
import ReactECharts, { EChartsReactProps } from 'echarts-for-react';
import { formatNumber } from 'utils/formatHelper';

export interface ChartDataType {
  name: string;
  data: number[];
}

export interface BarChartProps {
  data: ChartDataType[];
  valueName?: string[] | string;
  label?: string[];
  color?: string[];
  className?: string;
  rotateLabel?: boolean;
}

function CustomBar(props: BarChartProps) {
  var option: EChartsOption;

  const screenWidth = window.screen.width;

  option = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 12,
      },
      borderRadius: 3,
      borderWidth: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 1,
      shadowBlur: 3,
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#C5DFEB',
          fontFamily: 'montserrat',
          fontSize: 10,
          fontWeight: 400,
        },
      },
      className:
        '[&>div>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(1)]:!rounded-[1px] ' +
        '[&>div>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(1)]:!w-[19px] ' +
        '[&>div>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(1)]:!h-[12px] ' +
        '[&>div>:nth-child(1)>:nth-child(1)]:!font-semibold ' +
        '[&>div>:nth-child(1)>:nth-child(1)]:!text-textColor',
    },
    color: props.color ? props.color : ['#5AC29C', '#5281BB'],
    legend: {
      itemGap: 5,
      textStyle: {
        fontFamily: 'montserrat',
        fontSize: 10,
        color: '#77838F',
      },
    },
    toolbox: {
      show: false,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        axisLabel: {
          interval: 'auto',
          hideOverlap: true,
          fontSize: 12,
          fontFamily: 'montserrat',
          fontWeight: 400,
          color: '#77838F',
          lineHeight: 12,
          rotate: (
            screenWidth >= 768 && props.rotateLabel ? 25 :
              screenWidth >= 360 && props.rotateLabel ? 50 :
                screenWidth >= 768 ? 0 :
                  screenWidth >= 360 ? 50 : 0),
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: props.label,
      },
    ],
    yAxis: [
      {
        name: 'Giá trị',
        type: 'value',
        axisLabel: { fontFamily: 'montserrat', fontSize: 12, fontWeight: 400, lineHeight: 20, color: '#77838F' },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        nameTextStyle: {
          fontFamily: 'montserrat',
          fontSize: 12,
          fontWeight: 400,
          lineHeight: 20,
          color: '#000',
        },
      },
    ],

    series: props.data.map((i) => {
      return {
        name: i.name,
        type: 'bar',
        data: i.data,
        label: {
          show: true,
          position: 'top',
          fontFamily: 'montserrat',
          fontSize: 10,
          fontWeight: 'bold',
          formatter: function (value) {
            const valueName = props.valueName ? ' $ ' : ' '
            return formatNumber(Number(value.data), 0) + valueName;
          },
        },
      };
    }),
  };

  return <ReactECharts option={option} className={props.className} />;
}

export default CustomBar;
