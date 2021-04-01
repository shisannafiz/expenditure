import React, { createContext, useReducer, useState } from 'react';
import appReducer from './AppReducer';

import { auth } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

const initialState = {
  // expenses: [],
  // users: [],
  // recent: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [userID, setUserID] = useState('');
  const [name, setName] = useState('NAME');
  const [expenses, setExpenses] = useState([]);
  const [recent, setRecent] = useState([]);
  const [budget, setBudget] = useState(1250);
  const [used, setUsed] = useState(0);

  const addExpense = async (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };

  const editExpense = (expense) => {
    dispatch({ type: 'EDIT_EXPENSE', payload: expense });
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  const sortExpenses = (expenses) => {
    dispatch({ type: 'SORT_EXPENSES', payload: expenses });
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        userID,
        setUserID,
        name,
        setName,
        expenses,
        setExpenses,
        recent,
        setRecent,
        budget,
        setBudget,
        used,
        setUsed,

        // recent: state.recent,
        // exps: state.exps,
        // users: state.users,

        deleteExpense,
        addExpense,
        editExpense,
        sortExpenses,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
