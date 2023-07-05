import { EChartsOption } from 'echarts';
import ReactECharts from 'echarts-for-react';
import { formatNumber } from 'utils/formatHelper';
import { ChartType } from '../models';

export interface BarChartProps {
  data: Array<Array<ChartType>>;
  color?: string[];
  className?: string;
}

function CustomBarRace(props: BarChartProps) {
  // Lấy data cho yAxis
  const dataAxis = props.data.length === 0 ? [] : props.data[0].length === 0 ? [] : props.data[0].map((i) => i.label);

  var option: EChartsOption;
  option = {
    color: props.color ? props.color : ['#5281BB'],
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
        type: 'none',
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
      bottom: 0,
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 12,
        fontFamily: 'montserrat',
        fontWeight: 400,
        color: '#77838F',
        lineHeight: 12,
      },
    },
    yAxis: {
      type: 'category',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 10,
        fontFamily: 'montserrat',
        fontWeight: 400,
        color: '#77838F',
        lineHeight: 12,
      },

      data: dataAxis,
    },

    series: props.data.length
      ? props.data.map((d) => {
        const dataSeries = d.map((s) => s.value);
        return {
          name: d[0].name,
          type: 'bar',
          data: dataSeries,
          label: {
            show: true,
            position: 'right',
            valueAnimation: true,
            fontFamily: 'montserrat',
            fontSize: 10,
            fontWeight: 600,
            formatter: (p) => `${formatNumber(Number(p.value), 0)}`,
          },
        };
      })
      : [],
  };

  return <ReactECharts option={option} className={props.className} />;
}

export default CustomBarRace;
