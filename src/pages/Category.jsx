import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import {ProductsGarza} from '../json/Products'
import { useParams } from 'react-router-dom'

const Category = () => {
  const {categoriaId} = useParams()

  const productsGarzaFilter = ProductsGarza.filter(product => product.categoria === categoriaId);

  return <ItemListContainer productsData={productsGarzaFilter} />;
};
export default Category