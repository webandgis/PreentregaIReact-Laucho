import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useCartContext } from '../context/CartContext';

const ItemCount = ({ initial, stock, onAdd }) => {
  const { cart, addProduct } = useCartContext();
  const [count, setCount] = React.useState(parseInt(initial));

  const addShop = () => {
    setCount(count + 1);
  };

  const returnShop = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="Counter">
      <div className="Control">
        <Button
          style={{
            backgroundColor: '#cfbcf3',
            color: 'purple',
            border: 'none',
            marginLeft: '10%',
            fontWeight: 'bold',
          }}
          disabled={count <= 1}
          variant="primary"
          onClick={returnShop}
        >
          -
        </Button>
        <h3 style={{ display: 'inline-block', margin: '0 10px', alignItems: 'center' }}>
          {count}
        </h3>
        <Button
          style={{
            backgroundColor: '#cfbcf3',
            color: 'purple',
            border: 'none',
            fontWeight: 'bold',
          }}
          disabled={count >= stock}
          variant="primary"
          onClick={addShop}
        >
          +
        </Button>
        <div>
          <Button
            style={{
              backgroundColor: '#cfbcf3',
              marginLeft: '9.3%',
              color: 'purple',
              border: 'none',
              fontWeight: 'bold',
            }}
            variant="primary"
            disabled={stock <= 0}
            onClick={() => onAdd(count)}
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
