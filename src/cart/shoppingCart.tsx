import React, { useState } from 'react';
import './shoppingCart.css';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ShoppingCart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const products: Product[] = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
    { id: 3, name: 'Product C', price: 30 },
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
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <span>{product.name}</span>
            <span>${product.price}</span>
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
  );
};

export default ShoppingCart;