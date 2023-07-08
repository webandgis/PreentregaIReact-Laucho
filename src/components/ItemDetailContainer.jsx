import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import ProductCard from './ProductCard';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetailContainer = ({ productsData }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(productsData[0], quantity); 
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center', textAlign: 'center', marginBottom: '5px' }}>
        {productsData.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
        {goToCart ? (
          <Link to='/cart'>Ir al Carrito</Link>
        ) : (
          <ItemCount initial={0} stock={15} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
