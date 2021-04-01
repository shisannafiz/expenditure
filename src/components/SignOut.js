import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import { auth } from '../firebase/config';

const SignOut = () => {
  const { setUserID, setName, setBudget, setUsed, setExpenses } = useContext(
    GlobalContext
  );

  const clearAll = () => {
    setUserID('');
    setName('');
    setBudget(0);
    setUsed(0);
    setExpenses([]);
    auth.signOut();
  };

  return (
    auth.currentUser && (
      <div>
        <button onClick={clearAll} className="btn">
          Sign Out
        </button>
      </div>
    )
  );
};

export default SignOut;
