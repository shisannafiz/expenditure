import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  const { categories, amounts } = data;

  const sum = () => {};

  return (
    <div className="chart">
      <Line
        data={{
          labels: ['1', '2', '3', '4'],
          datasets: [
            {
              data: [1000, 1000, 1000, 1000],
              // backgroundColor: ['#fff'],
              borderColor: '#444477',
              borderWidth: 2,
            },
            {
              data: [150, 325, 500, 900],
              // backgroundColor: ['#9dc8e9'],
              borderColor: '#444477',
              borderWidth: 2,
              label: 'Weeks',
            },
            { fill: false },
          ],
        }}
        options={{
          title: {
            display: false,
          },

          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                ticks: {},
              },
            ],
          },
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

export default LineChart;
