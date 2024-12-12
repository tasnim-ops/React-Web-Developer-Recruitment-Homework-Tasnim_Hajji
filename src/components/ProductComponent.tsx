import React, { useState } from 'react'

import { useQuery } from '@tanstack/react-query' //import useQuery for request managing

import { fetchProducts } from '../services/productService' //import fetchProduct

const ProductComponent = () => {

  //fetching data
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],       //   query key
    queryFn: fetchProducts,       // fetch the data
  });

  //sort key 
  const [sortKey, setSortKey] = useState<string>("");

  //sort data 
  const sortedData = data?.sort((a: any, b: any) => {
    if (sortKey === "price") return a.price - b.price;
    if (sortKey === "name") return a.title.localeCompare(b.title);
    return 0;
  });


  if (isLoading) {
    return  <p
    style={{
      backgroundColor: "red",
      display: "flex",
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      margin: 0 
    }}
  >
    Loading ...
  </p>
  }

  if (error) {
    return <p>Error!!! something wrong</p>
  }

  return (
    <div>
    <select onChange={(e) => setSortKey(e.target.value)}>
      <option value="">Sort By</option>
      <option value="price">Price</option>
      <option value="name">Name</option>
    </select>
    
    <div className="product-container">
      {sortedData.map((product: any) => (
        <div key={product.id} className="card">
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.price} $</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ProductComponent