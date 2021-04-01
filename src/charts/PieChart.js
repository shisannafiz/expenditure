import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  const { categories, amounts } = data;

  return (
    <div className="chart">
      <Doughnut
        data={{
          labels: categories,
          datasets: [
            {
              data: amounts,
              backgroundColor: ['#030', '#040', '#050', '#060', '#070', '#555'],
              borderColor: '#eee',
              borderWidth: 1.5,
            },
          ],
        }}
        options={{
          title: {
            display: false,
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

export default PieChart;
