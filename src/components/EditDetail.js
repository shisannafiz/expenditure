import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const EditDetail = ({ expense }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  const { editDetail } = useContext(GlobalContext);

  useEffect(() => {
    setText(expense.text);
    setCategory(expense.category);
    setAmount(expense.amount);
  }, []);

  const convertDate = (date) => {
    date = date.toDate().toDateString().substring(4, 10);
    return date;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Math.floor(Math.random * 10000000),
      text,
      category,
      amount: +amount,
    };

    editDetail(newExpense);
  };

  return (
    <div>
      {/* <h3>Edit expense</h3> */}
      <form onSubmit={onSubmit} className="editForm">
        <div className="info1">
          <div className="form-control">
            <label htmlFor="text">Date</label>
            <input
              type="text"
              value={convertDate(expense.date)}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="info2">
          <div className="form-control">
            <label htmlFor="text">Item</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              id="category"
              required
            >
              <option value="choose">Choose category..</option>
              <option value="Food">Food</option>
              <option value="Shopping">Shopping</option>
              <option value="Activity">Activity</option>
              <option value="Bill">Bill</option>
            </select>
          </div>
        </div>
        <div className="editButtons">
          <button className="btn delete">Delete</button>
        </div>
        <div className="editButtons">
          <button className="btn edit">Done</button>
        </div>
      </form>
    </div>
  );
};

export default EditDetail;
