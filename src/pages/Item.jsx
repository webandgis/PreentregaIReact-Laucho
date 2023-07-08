import React, { useState, useEffect } from 'react';
import ItemDetailContainer from '../components/ItemDetailContainer';
import {doc,getDoc,getFirestore} from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const Item = () => {
  const [productsData, setProductsData] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productCollection = doc(db, 'products',itemId);
    getDoc(productCollection).then((snapshot) => {
      setProductsData( [{ id: snapshot.id, ...snapshot.data() }] );
    });
  }, [itemId]);

  return <ItemDetailContainer productsData={productsData} />;
};

export default Item;
