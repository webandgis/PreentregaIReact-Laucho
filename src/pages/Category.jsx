import React, { useState, useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer'
import {ProductsGarza} from '../json/Products'
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const Category = () => {
  const {categoriaId} = useParams()

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, 'products');
    getDocs(productCollection).then((snapshot) => {
      const productsGarzaFilter= snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })
      
      );
       setProductsData 
       (productsGarzaFilter.filter(product => product.categoria === categoriaId));
    });
    

  }, []);


  
  return <ItemListContainer productsData={productsData} />;
};
export default Category
