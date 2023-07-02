import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://phase-2-project-json-server-irlz.onrender.com/toys');
        setToys(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {toys.map((toy) => (
          <li key={toy.id}>{toy.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

