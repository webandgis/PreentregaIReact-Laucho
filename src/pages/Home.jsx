import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import {ProductsGarza} from '../json/Products'
const Home = () => {
  return (
    <div>
        <ItemListContainer productsData={ProductsGarza} />
    </div>
  )
}

export default Home