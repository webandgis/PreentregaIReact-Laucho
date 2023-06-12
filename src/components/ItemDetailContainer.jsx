import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ItemCount from './ItemCount';

const ItemDetailContainer = ({ productsData }) => {
  const [itemCount, setItemCount] = useState(1);

  const itemaddedToCart = (quantity) => {
    console.log('Producto agregado', quantity);
    setItemCount(quantity);
  };

  return (
    <div>
      <ItemCount
        initial={1}
        stock={15}
        setCount={setItemCount}
        onAdd={itemaddedToCart }
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {productsData.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </div>
      
    </div>
  );
};

export default ItemDetailContainer;