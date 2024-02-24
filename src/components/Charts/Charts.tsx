import { ReactECharts } from '../../Echarts/ReactECharts';
import { getCurrencyIcon } from '../../utils/getCurrencyIcon';
import { ICurrencyData, typeCurrency } from '../../interfaces/ICurrencyData';

interface IChartsProps {
  data: ICurrencyData[];
  currCurrency: typeCurrency;
}

const Charts: React.FC<IChartsProps> = ({ data, currCurrency }) => {
  const monthList = data.map((el) => el.month);
  const valueList = data.map((el) => el.value);

  const options = {
    title: {
      text: `${currCurrency},  ${getCurrencyIcon(currCurrency)}/₽`,
      textStyle: {
        color: '#002033',
        fontSize: 20,
        fontWeight: 'bold',
      },
    },
    grid: { top: 70, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: monthList,
    },
    yAxis: {
      type: 'value',
      min: Math.min(...valueList),
      max: Math.max(...valueList),
    },
    series: [
      {
        data: data.map((d) => d.value),
        type: 'line',
        smooth: true,
        name: currCurrency,
        lineStyle: {
          width: 3,
          color: '#F38B00',
        },
        itemStyle: {
          color: '#F38B00',
        },
        tooltip: {
          valueFormatter: (value: number) => value + ' ₽',
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <ReactECharts
      option={options}
      style={{ height: '350px', width: '1000px' }}
    />
  );
};

export default Charts;
