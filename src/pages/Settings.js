import React from 'react';

const Settings = ({ name, email, date }) => {
  name = 'Shisan Nafiz';
  email = 'shisannafiz@gmail.com';
  date = 'Feb 2021';

  return (
    <div>
      <h3>Settings</h3>
      <h5>Name: {name} </h5>
      <h5>Email: {email} </h5>
      <h5>Since: {date} </h5>
      <br />
      <h5>Total Months: 3</h5>
      <h5>Total Items: 25</h5>
      <br />
      <h5>Total Budget: $2000</h5>
      <h5>Total Spent: $1250</h5>
      <h5>Total Saved: $750</h5>
    </div>
  );
};

export default Settings;
