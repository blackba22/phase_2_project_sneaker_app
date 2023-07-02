import React from 'react';

const Home = () => {
  const testDeployedAPI = async () => {
let apiResults = await fetch('https://phase-2-project-json-server-irlz.onrender.com/toys')
.then(res => res.json())
.then(data => data)
.catch(() => (console.log('did not work')))
console.table(apiResults)
  };

  useEffect(testDeployedAPI, []);

  return <h2>Welcome to Brittany's Sneaker Store!</h2>;
};

export default Home;
