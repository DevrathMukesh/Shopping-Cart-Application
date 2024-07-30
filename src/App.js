import React from 'react';
import Navbar from './components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      < Navbar />        {/* This will appear on all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/cart" element={<Cart />} /> {/* Cart page route */}
      </Routes>
    </div>
  );
}

export default App;
