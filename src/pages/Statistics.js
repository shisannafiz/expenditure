import React, { useContext, useState } from 'react';
import Budget from '../components/Budget';

import { GlobalContext } from '../context/GlobalState';

import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';
import LineChart from '../charts/LineChart';

const Statistics = () => {
  const { expenses } = useContext(GlobalContext);

  const categories = expenses.map((expense) => expense.category);
  const amounts = expenses.map((expense) => expense.amount);

  const data = {
    categories,
    amounts,
  };

  return (
    <div>
      <Budget />
      <h3>
        Charts
        <div className="charts">
          <span className="selected"> Current </span>
          <span>Monthly </span>
          <span>Yearly </span>
          <span>All </span>
        </div>
      </h3>
      <PieChart data={data} />
      <BarChart data={data} />
      <LineChart data={data} />
    </div>
  );
};

export default Statistics;
