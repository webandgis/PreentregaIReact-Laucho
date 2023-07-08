import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
  const {totalProducts} = useCartContext()
  return (
    <div
      style={{
        display: 'flex',
        width: '30px',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'purple',
      }}
    >
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span> {totalProducts ()|| ''} </span>
      </Link>
    </div>
  );
};

export default CartWidget;
