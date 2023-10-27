import React from 'react';
import { useParams } from 'react-router-dom';
import './product-detail.css';
import { Link } from 'react-router-dom';
const products = [
  {
    id: 1,
    name: 'Vape 1',
    image: '/vape-device1.jpg',
    description: 'Description of Product 1',
  },
  {
    id: 2,
    name: 'Vape 2',
    image: '/vape-device2.jpg',
    description: 'Description of Product 2',
  },
  {
    id: 3,
    name: 'Vape 3',
    image: '/vape-device3.jpg',
    description: 'Description of Product 3',
  },
  {
    id: 4,
    name: 'Juice 1',
    image: '/juice1.jpg',
    description: 'Description of Juice Product 1',
  },
  {
    id: 5,
    name: 'Juice 2',
    image: '/juice2.jpg',
    description: 'Description of Juice Product 2',
  },
  {
    id: 6,
    name: 'Juice 3',
    image: '/juice3.jpg',
    description: 'Description of Juice Product 3',
  },
];

const ProductDetail = () => {
  const { productName } = useParams();
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

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
          <img src="/logo.png" alt="Logo" className="logo" />

          <div className="search-box">
            <input type="text" placeholder="Search" className="search" />
            <button className="button">Search</button>
          </div>

          <div className="shopping-cart">
          <Link to="/shoppingCart"><button className="button">Shopping Cart</button></Link>
          </div>

          <div className="user-box">
            <button className="button"><Link to="/login">Login</Link></button>
          </div>
        </header>
        <div className="product-detail">
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
