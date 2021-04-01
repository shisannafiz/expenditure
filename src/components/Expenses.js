import React, { useContext, useState, useEffect } from 'react';
import Expense from './Expense';

import { GlobalContext } from '../context/GlobalState';

const Expenses = () => {
  const { expenses, sortExpenses } = useContext(GlobalContext);
  const [direction, setDirection] = useState(false);

  const sortDate = () => {
    let dates;
    if (!direction) {
      dates = expenses.sort(function (a, b) {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
        return 0;
      });
      setDirection(true);
    } else {
      dates = expenses.sort(function (a, b) {
        if (a.date > b.date) {
          return -1;
        }
        if (a.date < b.date) {
          return 1;
        }
        return 0;
      });
      setDirection(false);
    }
    sortExpenses(dates);
  };

  const sortName = () => {
    let names;
    if (!direction) {
      names = expenses.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      setDirection(true);
    } else {
      names = expenses.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
      setDirection(false);
    }
    sortExpenses(names);
  };

  const sortCategory = () => {
    let categories;
    if (!direction) {
      categories = expenses.sort(function (a, b) {
        if (a.category < b.category) {
          return -1;
        }
        if (a.category > b.category) {
          return 1;
        }
        return 0;
      });
      setDirection(true);
    } else {
      categories = expenses.sort(function (a, b) {
        if (a.category > b.category) {
          return -1;
        }
        if (a.category < b.category) {
          return 1;
        }
        return 0;
      });
      setDirection(false);
    }
    sortExpenses(categories);
  };

  const sortAmount = () => {
    let amounts;
    if (!direction) {
      amounts = expenses.sort(function (a, b) {
        if (a.amount < b.amount) {
          return -1;
        }
        if (a.amount > b.amount) {
          return 1;
        }
        return 0;
      });
      setDirection(true);
    } else {
      amounts = expenses.sort(function (a, b) {
        if (a.amount > b.amount) {
          return -1;
        }
        if (a.amount < b.amount) {
          return 1;
        }
        return 0;
      });
      setDirection(false);
    }
    sortExpenses(amounts);
  };

  useEffect(() => {
    sortDate();
  }, []);

  return (
    <div className="container">
      <h3>History</h3>
      <h4 className="sort">
        <span onClick={() => sortDate()}>⥮ &nbsp; Date </span>
        <span onClick={() => sortName()}>&nbsp; &nbsp; &nbsp;Item </span>
        <span onClick={() => sortCategory()}>&nbsp; Category </span>
        <span onClick={() => sortAmount()}> Amount </span>
      </h4>

      <ul className="list expenses">
        {expenses.map((expense) => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
