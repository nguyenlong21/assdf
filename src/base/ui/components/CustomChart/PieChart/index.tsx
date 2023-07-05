import React, { memo, useState } from 'react';
import { EChartsOption } from 'echarts';
import ReactECharts from 'echarts-for-react';


export interface ChartDataType {
  value: number;
  name: string;
}

export interface PieChartProps {
  data: ChartDataType[];
  color?: string[];
}

function CustomPie({ data, color }: PieChartProps) {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };
  const [windowSize, setWindowSize] = useState(getWindowSize());

  var option: EChartsOption;
  option = {
    //Hiển thị thông tin dữ liệu khi trỏ chuột lên
    tooltip: {
      trigger: 'item',
      borderColor: '#000',
      borderWidth: 0,
      borderRadius: 2,
      shadowOffsetX: 0,
      shadowOffsetY: 1,
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      textStyle: {
        fontSize: 12,
        fontWeight: 400,
      },
      className:
        'echarts-tooltip echarts-tooltip-dark !rounded-[2px] !p-0 [&>div>:nth-child(1)]:font-montserrat [&>div>:nth-child(1)]:bg-red-500 [&>div>:nth-child(1)]:text-[12px]' +
        ' [&>div>:nth-child(1)]:font-medium [&>div>:nth-child(1)]:bg-[#F6F8FB] [&>div>:nth-child(1)]:leading-[22px] [&>div>:nth-child(1)]:leading-[22px] ' +
        '[&>div>:nth-child(1)]:pt-[3px] [&>div>:nth-child(1)]:flex [&>div>:nth-child(1)]:rounded-t-[2px] [&>div>:nth-child(1)]:h-[31px] [&>div>:nth-child(1)]:items-center [&>div>:nth-child(1)]:pl-[7px] [&>div>:nth-child(1)]:pb-[6px] [&>div>:nth-child(1)]:border-b-[1px] ' +
        '[&>div>:nth-child(2)]:p-[10px] [&>div>:nth-child(2)]:pt-[6px] [&>div>:nth-child(2)]:font-montserrat',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      // containLabel: true,
    },
    // Chú thích tên và màu sắc các danh mục
    legend: {
      type: windowSize.innerWidth > 1024 ? 'plain' : 'scroll',
      top: windowSize.innerWidth > 1024 ? 'center' : '0',
      right: windowSize.innerWidth > 1024 ? '5%' : '0',
      left: windowSize.innerWidth > 1024 ? 'auto' : 'center',
      orient: windowSize.innerWidth > 1024 ? 'vertical' : 'horizontal',
      itemGap: 5,
      textStyle: {
        fontFamily: 'Montserrat',
        fontSize: 10,
        color: '#77838F',
      },
    },
    color: color,
    series: [
      {
        name: 'Aug',
        type: 'pie',
        radius: ['35%', '75%'],
        avoidLabelOverlap: false,
        center: [`${windowSize.innerWidth > 1024 ? '35%' : '50%'}`, '55%'],
        itemStyle: {
          borderRadius: 4,
          borderColor: '#fff',
          borderWidth: 2,
        },
        //Hiện thị tỉ lệ phần trăm từng danh mục
        label: {
          show: true,
          position: windowSize.innerWidth > 1024 ? 'outside' : 'inside',
          fontWeight: 'bold',
          formatter: '{d}%',
        },
        //Định dạng kích thước chữ của tỉ lệ khi hover
        emphasis: {
          label: {
            show: true,
            fontSize: 15,
            fontWeight: 'bold',
          },
        },
        //Đường kẻ nối chỉ số tỉ lệ với lát bánh
        labelLine: {
          show: true,
        },
        data: data,
      },
    ],
  };
  return <ReactECharts option={option} />;
}

export default CustomPie;
