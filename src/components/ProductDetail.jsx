import React, { useEffect, useState } from 'react'

const ProductDetail = () => {

  const  [congelado,setCongelado]=useState('null')

  useEffect (()=>{
    congeladoById('0')
    .then(response =>{
      setCongelado(response)
    })
    .catch(error=>{
      console.error(error)
    })
  }) 
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail