import React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';

function App() {
  const InProgress = () => {
    return (
      <h3
        style={{
          fontStyle: 'oblique',
          paddingTop: '20px',
          textAlign: 'center',
        }}
      >
        In Progress. Stay updated for more!!{' '}
      </h3>
    );
  };
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes className='App'>
    //     <Route path="/" element={<Home/>} />
    //     <Route path='/cart' element={<Cart />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<InProgress />} />
        <Route path="/contact" element={<InProgress />} />
      </Routes>
    </>
  );
}

export default App;
