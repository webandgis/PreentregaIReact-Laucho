import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemCount from '../components/ItemCount'
import {ProductsGarza} from '../json/Products'
import { useParams } from 'react-router-dom'
const Item = () => {
  const {itemId} = useParams()

  const productsGarzaid = ProductsGarza.filter(product => product.id === parseInt(itemId) );

  return <ItemDetailContainer productsData={productsGarzaid} />;
  return <ItemCount initial={1} stock={15} onAdd= {(setQuantity)=> console.log('Producto agregado',setQuantity)}  />
};
export default Item