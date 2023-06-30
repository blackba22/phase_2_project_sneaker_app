import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductList} />
      </Switch>
    </Router>
  );
};

export default App;
