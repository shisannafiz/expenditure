import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

const Budget = () => {
  const { budget, used } = useContext(GlobalContext);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[new Date().getMonth()];

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div>
      <Link to="/statistics" style={{ textDecoration: 'none', color: '#000' }}>
        <h2>{month} Progress Report</h2>
      </Link>

      <div className="progress">
        <div>
          <h4>Budget</h4>
          <p className="money budget">${numberWithCommas(budget)}</p>
        </div>
        <div>
          <h4>Used</h4>
          <p className="money used">${numberWithCommas(used)}</p>
        </div>
        <div>
          <h4>Available</h4>
          <p className="money available">${numberWithCommas(budget - used)}</p>
        </div>
      </div>
    </div>
  );
};

export default Budget;
