import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Item from './Item';

import { GlobalContext } from '../context/GlobalState';

const Items = () => {
  const { recent } = useContext(GlobalContext);

  return (
    <div>
      <Link to="/history" style={{ textDecoration: 'none', color: '#000' }}>
        <h3>
          Recent <span>View More</span>
        </h3>
      </Link>

      <ul className="list">
        {recent.slice(0, 3).map((rec) => (
          <Item key={rec.id} item={rec} />
        ))}
      </ul>
    </div>
  );
};

export default Items;
