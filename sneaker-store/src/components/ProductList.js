import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    // Fetch products from the server using Axios
    useEffect(() => {
        axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            setProducts(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
      

      return (
        <div>
          <h2>Product List</h2>
          <ul>
          {products.map((product) => (
  <li key={product.id}>{product.title}</li>
))}
          </ul>
        </div>
      );
    };

    export default ProductList;