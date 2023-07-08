import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../context/CartContext';
import '../CSS/ItemCart.css';

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className="itemCart">
      <img src={product.img} alt={product.title} />

      <div>
        <strong>
          <p style={{fontSize:'15px',color:'purple'}} > Menú: {product.nombre}</p>
        </strong>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio: {product.precio}</p>
        <p>Subtotal: UY{product.quantity * product.precio}</p>

        <button className='btnItem' onClick={() => removeProduct(product.id)}>
          <FontAwesomeIcon icon={faTrash} style={{fontSize:'15px',color:'purple', alignItems:'center'}} />
        </button>
      </div>
    </div>
  );
};

export default ItemCart;


