import React from 'react';
import Footer from './footer';
import Body from './body';
import { Link } from 'react-router-dom';


function AboutUs() {
  return (
    <div className="container">
      <div className="sidebar">
        <ul className="menu">
          <Link to="/dashboard"><li className="menu-item">Home</li></Link>
          <Link to="/juice"><li className="menu-item">Juice</li></Link>
          <Link to="/vape"><li className="menu-item">Vape</li></Link>
          <Link to="/about-us"><li className="menu-item">About us</li></Link>
        </ul>
      </div>

      <div className="content">
        <header className="header">
          <img src="logo.png" alt="Logo" className="logo" />

          <div className="search-box">
            <input type="text" placeholder="Search" className="search" />
            <button className="button">Search</button>
          </div>

          <div className="shopping-cart">
            <button className="button">Shopping Cart</button>
          </div>

          <div className="user-box">
            <Link to="/login"><button className="button">Login </button></Link>
          </div>
        </header>

        <div>
          <Body />
          <Footer />
        </div>
      </div>
    </div>

  );
}

export default AboutUs;
