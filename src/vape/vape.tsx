import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Vape 1',
    image: 'vape-device1.jpg',
    description: 'Description of Product 1',
  },
  {
    id: 2,
    name: 'Vape 2',
    image: 'vape-device2.jpg',
    description: 'Description of Product 2',
  },
  {
    id: 3,
    name: 'Vape 3',
    image: 'vape-device3.jpg',
    description: 'Description of Product 3',
  },
];
const Vape = () => {
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
          <Link to="/login"><button className="button">Login</button></Link>
          </div>
        </header>

        <div className="product-grid">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <Link to={`/product/${product.name}`}>
              <h3>{product.name}</h3>
            </Link>
            <p>{product.description}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Vape;
