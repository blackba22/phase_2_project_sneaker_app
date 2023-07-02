import React, { useEffect, useState } from 'react';

const Home = () => {
  const [sneakers, setSneakers] = useState([]);

  const fetchSneakers = async () => {
    try {
      const response = await fetch('https://phase-2-project-json-server-irlz.onrender.com/toys');
      const data = await response.json();
      setSneakers(data);
    } catch (error) {
      console.error('Error fetching sneakers:', error);
    }
  };

  useEffect(() => {
    fetchSneakers();
  }, []);

  return (
    <>
      <h2>Welcome to Brittany's Sneaker Store!</h2>
      {sneakers.map(sneaker => (
        <p key={sneaker.id}>{sneaker.name}</p>
      ))}
    </>
  );
};

export default Home;

