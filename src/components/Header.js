import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
        <h1>Expenditure </h1>
      </Link>
      <Link
        to="/settings"
        style={{ textDecoration: 'none', color: '#000', fontSize: '27px' }}
      >
        ⚙
      </Link>
    </div>
  );
};

export default Header;
