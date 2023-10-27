import React from 'react';
import Footer from './footer';
import Body from './body';
import { Link } from 'react-router-dom';


function AboutUs() {
  return (
    <div className="container">
      <div className="sidebar">
        <ul className="menu">
          <li className="menu-item"><Link to="/dashboard">Home</Link></li>
          <li className="menu-item"><Link to="/juice">Juice</Link></li>
          <li className="menu-item"><Link to="/vape">Vape</Link></li>
          <li className="menu-item"><Link to="/about-us">About</Link></li>
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
            <Link to="/shoppingCart"><button className="button">Shopping Cart</button></Link>
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
