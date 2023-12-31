import React from 'react';
import './dashboard/dashboard.css';
import Dashboard from './dashboard/dashboard'
import './juice/juice.css'
import Juice from './juice/juice';
import './vape/vape.css'
import AboutUs from './about-us/about-us';
import Vape from './vape/vape';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/register';
import Cart from './cart/shoppingCart'
import ProductDetail from './product-detail/product-detail';
import './App.css';
import ForgotPassword from './forgotpassword/forgotpassword';
import './about-us/about-us.css'
import './cart/shoppingCart.css'
import './cart/checkout.css'
import './Login/Login.css';
import './Register/register.css';
import './forgotpassword/forgotpassword.css';


function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/juice" element={<Juice />} />
          <Route path="/vape" element={<Vape />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/forgotpassword' element= {<ForgotPassword />}></Route>
          <Route path="/product/:productName" element={<ProductDetail />} />
          <Route path='/shoppingCart' element= {<Cart />}></Route>
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;