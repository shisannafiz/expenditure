import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import EditDetail from './EditDetail';

const Expense = ({ expense, check }) => {
  const { deleteItem } = useContext(GlobalContext);
  const [edit, setEdit] = useState(false);

  const convertDate = (date) => {
    const m = date.substring(6, 7);
    const d = date.substring(8, 10);
    const months = [
      'Month',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    // return months[m] + ' ' + d;
    return date.substring(5, 7) + '/' + date.substring(8, 10);
  };

  return (
    <div>
      <li className={expense.category} onClick={() => setEdit(!edit)}>
        <span className="date">{convertDate(expense.date)}</span>
        <div className="middle">
          <span className="text">{expense.name} </span>
          <span className="category">{expense.category} </span>
        </div>
        <span className="amount">${Math.abs(expense.amount)}</span>
        {/* <button onClick={() => deleteItem(expense.id)} className="delete-btn"></button> */}
      </li>
      {edit && <EditDetail item={expense} />}
    </div>
  );
};

export default Expense;
