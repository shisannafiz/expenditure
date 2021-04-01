import React, { useContext, useEffect } from 'react';
import Total from '../components/Total';
import Expenses from '../components/Expenses';

import { GlobalContext } from '../context/GlobalState';
import { auth, firestore } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

const History = () => {
  const { setExpenses } = useContext(GlobalContext);
  const [user] = useAuthState(auth);

  const getExpenses = async () => {
    let expenses = [];
    const expensesRef = firestore.collection(`users/${user.uid}/items`);

    const expensesData = await expensesRef.get();

    if (!expensesData.empty) {
      expensesData.docs.map((expense) => {
        expenses.push(expense.data());
      });
    }
    setExpenses(expenses);
  };

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div>
      <Total />
      <Expenses />
    </div>
  );
};

export default History;
