import React from 'react';
import {BarChart} from '@mui/x-charts';
import {TopFiveReport} from "../services/interfaces.ts";


interface ChartProps {
  data?: TopFiveReport[];
}

const BestPracticeChart: React.FC<ChartProps> = ({data}) => {

  return (
    <>
      {
        data ? <BarChart
          title={'Top 5 PL accounts'}
          series={[{data: data.map(i => i.totalAmount)}]}
          xAxis={[{
            data: data.map(i => i.bestPracticeName),
            scaleType: 'band',
            tickLabelStyle: {angle: -90, textAnchor: 'start'}
          }]}
          width={500}
          height={500}
        /> : null
      }
    </>


  );
};

export default BestPracticeChart;
