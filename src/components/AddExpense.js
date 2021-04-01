import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import { firestore } from '../firebase/config';

const AddExpense = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();

  const { userID, addExpense } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      name,
      category,
      amount: +amount,
      date,
    };

    firestore.collection(`users/${userID}/items`).add(newExpense);
    // addExpense(newExpense);

    setName('');
    setCategory('');
    setAmount(0);
  };

  return (
    <div>
      <h3>Add Expense</h3>
      <form onSubmit={onSubmit}>
        <div className="item-amount">
          <div className="form-control">
            <label htmlFor="text">Item</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name..."
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              value={amount}
              min="0"
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
        </div>

        <div className="category-date">
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              id="category"
              required
            >
              <option value="choose">Choose...</option>
              <option value="Food">Food</option>
              <option value="Shopping">Shopping</option>
              <option value="Activity">Activity</option>
              <option value="Bill">Bill</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="amount">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Pick a date..."
            />
          </div>
        </div>

        <button className="btn">Add Item</button>
      </form>
    </div>
  );
};

export default AddExpense;
