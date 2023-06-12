import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, setCount, onAdd }) => {
  const [count, setQuantity] = useState(1);

  const addShop = () => {
    if (count < stock) {
      setQuantity(count + 1);
    }
  };

  const returnShop = () => {
    if (count > 1) {
      setQuantity(count - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Control">
        <Button
          style={{
            backgroundColor: '#cfbcf3',
            color: 'purple',
            border: 'none',
            marginLeft:'10%',
            fontWeight: 'bold',
          }}
          variant="primary"
          onClick={returnShop}
        >
          -
        </Button>
        <h3  style={{ display: 'inline-block', margin: '0 10px',alignItems:'center'}}>
          {count}
        </h3>
        <Button
          style={{
            backgroundColor: '#cfbcf3',
            color: 'purple',
            border: 'none',
            fontWeight: 'bold',
          }}
          variant="primary"
          onClick={addShop}
        >
          +
        </Button>
        <div>
          <Button
            style={{
              backgroundColor: '#cfbcf3',
              marginLeft:'9.3%',
              color: 'purple',
              border: 'none',
              fontWeight: 'bold',
            }}
            variant="primary"
            onClick={() => onAdd(count)}
            disabled={!stock}
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;



