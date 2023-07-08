import React, { useState, useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Home = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, 'products');
    getDocs(productCollection).then((snapshot) => {
      setProductsData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div>
      <ItemListContainer productsData={productsData} />
      
    </div>
  );
};

export default Home;
