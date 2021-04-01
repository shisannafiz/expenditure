import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Item = ({ item }) => {
  const { deleteItem } = useContext(GlobalContext);

  return (
    <li className={item.category}>
      {item.name} <span>${Math.abs(item.amount)}</span>
      <button onClick={() => deleteItem(item.id)} className="delete-btn">
        X
      </button>
    </li>
  );
};

export default Item;
