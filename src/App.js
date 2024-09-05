import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/homepage/Home';
import SearchPage from './components/pages/searchpage/SearchPage';
import Products from './components/products/Products';
import ProductDetails from './components/productdetails/ProductDetails';
import Cart from './components/cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import supabase from './supabase';
import { useEffect } from 'react';
import { setUser } from './components/slices/userSlice';

function App() {

const dispatch=useDispatch();

const getUser= async()=>{
  const {data,error} = await supabase.auth.getSession();
  if(data.session){
    dispatch(setUser(data.session.user));
  }
}

useEffect(()=>{
  getUser();
},[])

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/searchpage' element={<SearchPage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/productdetails/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
