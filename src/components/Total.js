import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Total = () => {
  const { expenses } = useContext(GlobalContext);

  const amounts = expenses.map((expense) => expense.amount);

  const total = amounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div>
      <h4>Total Spent</h4>
      <h1>${total}</h1>
    </div>
  );
};

export default Total;
