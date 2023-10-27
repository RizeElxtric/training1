import React, { useState } from 'react';
import './shoppingCart.css';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ShoppingCart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const products: Product[] = [
    { id: 1, name: 'Juice 1', price: 10 },
    { id: 2, name: 'Juice 2', price: 20 },
    { id: 3, name: 'Juice 3', price: 30 },
    { id: 1, name: 'Vape 1', price: 10 },
    { id: 2, name: 'Vape 2', price: 20 },
    { id: 3, name: 'Vape 3', price: 30 },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce((total, product) => total + product.price, 0);

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
            <Link to="/login"><button className="button">Login</button></Link>
          </div>
        </header>

        <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <span>{product.name}: </span>
            <span>${product.price} </span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${cartTotal}</p>
      </div>
    </div>
        </div>
      </div>
    
  );
};

export default ShoppingCart;