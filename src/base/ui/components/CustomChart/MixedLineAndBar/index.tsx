import { EChartsOption } from 'echarts';
import ReactECharts from 'echarts-for-react';
import { formatNumber } from 'utils/formatHelper';
import { ChartType } from '../models';

export interface MixedLineAndBarChartProps {
  data: Array<Array<ChartType>>;
  valueName?: string[] | string;
  color?: string[];
  className?: string;
  smooth?: boolean;
  rotateLabel?: boolean;
}

function CustomMixedLineAndBar(props: MixedLineAndBarChartProps) {
  // Lấy data cho yAxis
  const dataAxis = props.data.length === 0 ? [] : props.data[0].length === 0 ? [] : props.data[0].map((i) => i.label);
  //   lấy dữ liệu của bar chart
  const dataBar = props.data.length === 0 ? [] : props.data[0].length === 0 ? [] : props.data[0].map((i) => i.value);
  //   Lấy tên field của bar chart
  const barName = props.data.length === 0 ? '' : props.data[0].length === 0 ? '' : props.data[0][0].name;
  //   Lấy dữ liệu của line chart
  const dataLine = props.data.length === 0 ? [] : props.data[1].length === 0 ? [] : props.data[1].map((i) => i.value);
  //   Lấy tên field của line chart
  const lineName = props.data.length === 0 ? '' : props.data[1].length === 0 ? '' : props.data[1][0].name;
  //  Lấy chiều rộng của màn hình
  const screenWidth = window.screen.width;

  var option: EChartsOption;
  //   Option của chart
  option = {
    color: props.color ? props.color : ['#3CA1BA', '#F3974B'],
    tooltip: {
      trigger: 'axis',

      textStyle: {
        fontFamily: 'montserrat',
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
        '[&>div>:nth-child(1)>:nth-child(2)>div>:nth-child(1)>:nth-child(1)]:!rounded-[1px] ' +
        '[&>div>:nth-child(1)>:nth-child(2)>div>:nth-child(1)>:nth-child(1)]:!w-[19px] ' +
        '[&>div>:nth-child(1)>:nth-child(2)>div>:nth-child(1)>:nth-child(1)]:!h-[12px] ' +
        '[&>div>:nth-child(1)>:nth-child(1)]:!font-semibold ' +
        '[&>div>:nth-child(1)>:nth-child(1)]:!text-textColor',
    },
    legend: {
      textStyle: {
        fontFamily: 'montserrat',
        fontSize: 10,
        color: '#77838F',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: [0, 0.01],
      data: dataAxis,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontFamily: 'montserrat',
        fontSize: 12,
        fontWeight: 400,
        color: '#77838F',
        lineHeight: 12,
        rotate: (screenWidth >= 768) && props.rotateLabel ? 0 : (screenWidth >= 360) && props.rotateLabel ? 50 : 0,
        formatter: function (value: string) {
          if (screenWidth >= 768 && value.length > 10) {
            return value.slice(0, 10) + '...'
          } else if (screenWidth >= 360 && value.length > 10) {
            return value.slice(0, 10) + '...'
          } else {
            return value
          }
        }
      },
    },
    yAxis: [
      {
        type: 'value',
        name: 'Giá trị',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#F2F2F2',
          },
        },
        axisTick: {
          show: false,
        },
        nameTextStyle: {
          color: '#000',
          fontFamily: 'montserrat',
        },
        axisLabel: {
          fontSize: 12,
          fontFamily: 'montserrat',
          fontWeight: 400,
          color: '#77838F',
          lineHeight: 12,
        },
      },
      {
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#F2F2F2',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontSize: 12,
          fontFamily: 'montserrat',
          fontWeight: 400,
          color: props.color && props.color.length ? props.color[1] : ['#3CA1BA', '#F3974B'][1],
          lineHeight: 12,
        },
      },
    ],
    series: [
      {
        name: barName,
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            const valueName = props.valueName ? ' Kho' : ' Ca'
            return formatNumber(Number(value), 0) + valueName;
          },
        },
        label: {
          show: true,
          position: 'inside',
          valueAnimation: true,
          fontFamily: 'montserrat',
          fontSize: 12,
          fontWeight: 400,
          color: '#FFFFFF',
          formatter: function (value) {
            const valueName = props.valueName ? ' Kho' : ' Ca'
            return formatNumber(Number(value.data), 0) + valueName;
          },
        },

        data: dataBar,
      },
      {
        name: lineName,
        type: 'line',
        yAxisIndex: 1,
        symbolSize: 8,
        symbol: 'circle',
        smooth: props.smooth,
        itemStyle: {
          borderColor: '#FFFFFF',
          borderWidth: 1,
        },
        tooltip: {
          valueFormatter: function (value) {
            return formatNumber(Number(value), 0) + ' VNĐ';
          },
        },
        label: {
          show: true,
          position: 'top',
          valueAnimation: true,
          fontFamily: 'montserrat',
          fontSize: 12,
          fontWeight: 400,
          color: '#4A4F57',
          formatter: function (value) {
            return formatNumber(Number(value.data), 0) + ' VNĐ';
          },
        },
        data: dataLine,
      },
    ],
  };
  return <ReactECharts option={option} className={props.className} />;
}

export default CustomMixedLineAndBar;
