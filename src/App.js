import React from 'react';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import ProductsList from './Components/ProductsList';

import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Header title="Electronics" />
    <ProductsList />
  </div>
);

export default App;

