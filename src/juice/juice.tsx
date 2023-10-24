import React from 'react';
import { Link } from 'react-router-dom';
const Juice = () => {
  return (
    <div className="container">

      <div className="sidebar">
        <ul className="menu">
          <li className="menu-item"><Link to="/dashboard">Home</Link></li>
          <li className="menu-item"><Link to="/juice">Juice</Link></li>
          <li className="menu-item"><Link to="/vape">Vape</Link></li>
          <li className="menu-item">About</li>
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
            <button className="button">Login</button>
          </div>

        </header>

        <div className="juice-grid">

          <div className="juice">
            <img src="juice1.jpg" alt="Juice 1" />
            <h3>juice 1</h3>
            <p>Description of juice 1</p>
            <button>Add to Cart</button>
          </div>

          <div className="juice">
            <img src="juice2.jpg" alt="Juice 2" />
            <h3>juice 2</h3>
            <p>Description of juice 2</p>
            <button>Add to Cart</button>
          </div>

          <div className="juice">
            <img src="juice3.jpg" alt="Juice 3" />
            <h3>juice 3</h3>
            <p>Description of juice 3</p>
            <button>Add to Cart</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Juice;
