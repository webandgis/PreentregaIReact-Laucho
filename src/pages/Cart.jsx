import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from '../components/ItemCart';
import { Button } from 'react-bootstrap';


const Cart = () => {
  const { cart, totalPrice } = useCartContext(); // Use destructuring to access the cart state

  if (cart.length === 0) {
    return (
      <>
        <p>Carrito Vacío :c</p>
        <Link to="/">Hacer Compras</Link>
      </>
    );
  }

  return (
    <div>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <strong><p style={{textAlign:'center', color:'purple'}}>Precio Total: {totalPrice()} <br /> 
      
     
      <Link to="/checkout">
  <Button
    style={{
      backgroundColor: '#cfbcf3',
      color: 'purple',
      border: 'none',
      fontWeight: 'bold',
      marginTop: '5px',
      marginBottom: '5px',
      marginLeft: '10%',
    }}
  >
    Pagar
  </Button>
</Link>

      </p> </strong> 
      
    </div>
  );
};

export default Cart;
