import React, { useEffect, useContext } from 'react';
import Budget from '../components/Budget';
import AddExpense from '../components/AddExpense';
import Items from '../components/Items';
import SignOut from '../components/SignOut';

import { GlobalContext } from '../context/GlobalState';
import { auth, firestore } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

const Home = () => {
  const { name, setUserID, setName, setUsed, setRecent } = useContext(
    GlobalContext
  );
  const [user] = useAuthState(auth);

  const getUser = async () => {
    const userRef = firestore.collection('users').doc(`${user.uid}`);
    const userData = await userRef.get();

    if (!userData.exists) {
      const { email, displayName } = user;
      userRef.set({
        displayName,
        email,
        createdAt: new Date(),
      });
    }

    setUserID(user.uid);
    setName(user.displayName);
  };

  const getUsed = async () => {
    let used = 0;
    let date = new Date();
    let year = date.getFullYear();
    let currMonth = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1);
    let nextMonth = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 2);
    let currDate = year + '-' + currMonth + '-00';
    let nextDate = year + '-' + nextMonth + '-00';

    const expensesData = await firestore
      .collection(`users/${user.uid}/items`)
      .where('date', '>=', currDate)
      .where('date', '<', nextDate)
      .get();

    expensesData.docs.map((expense) => {
      used += expense.data().amount;
    });

    setUsed(used);
  };

  const getRecent = async () => {
    let recent = [];
    const recentRef = firestore
      .collection('users')
      .doc(`${user.uid}`)
      .collection('items')
      .orderBy('date', 'desc')
      .limit(3);
    const recentData = await recentRef.get();

    if (!recentData.empty) {
      recentData.docs.map((rec) => {
        recent.push(rec.data());
      });
    }
    setRecent(recent);
  };

  useEffect(() => {
    getUser();
    getUsed();
    getRecent();
  }, []);

  return (
    <div>
      <h5>Good afternoon, {name}.</h5>
      <Budget />
      <AddExpense />
      <Items />
      <SignOut />
    </div>
  );
};

export default Home;
