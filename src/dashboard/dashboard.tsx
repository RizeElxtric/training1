import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
            <button className="button"><Link to="/login">Login</Link></button>
          </div>
        </header>

        <div className="product-grid">
          <div className="product">
            <img src="juice1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button>Add to Cart</button>
          </div>

          <div className="product">
            <img src="product2.png" alt="Product 2" />
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
            <button>Add to Cart</button>
          </div>

          <div className="product">
            <img src="product3.png" alt="Product 3" />
            <h3>Product 3</h3>
            <p>Description of Product 3</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
