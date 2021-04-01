import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const { categories, amounts } = data;

  return (
    <div className="chart">
      <Bar
        data={{
          labels: categories.reverse(),
          datasets: [
            {
              label: 'Total Spent',
              data: amounts,
              backgroundColor: ['#600', '#700', '#800', '#A00', '#B00', '#C00'],
              borderColor: '#333',
              borderWidth: 1.5,
            },
          ],
        }}
        options={{
          title: {
            display: false,
            text: 'February',
            fontColor: '#333',
          },
          maintainAspectRatio: false,
        }}
        height={300}
        width={300}
        legend={{
          display: false,
        }}
      />
    </div>
  );
};

export default BarChart;
