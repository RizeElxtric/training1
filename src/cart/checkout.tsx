import React, { useState } from 'react';
import './checkout.css';

interface ShippingInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

interface PaymentInfo {
  cardNumber: string;
  expDate: string;
  cvv: string;
}

const Checkout: React.FC = () => {
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    expDate: '',
    cvv: '',
  });

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    // Perform checkout logic, e.g., submit data to a server
    console.log('Shipping Info:', shippingInfo);
    console.log('Payment Info:', paymentInfo);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="shipping-info">
        <h3>Shipping Information</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={shippingInfo.name}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={shippingInfo.state}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={shippingInfo.zip}
          onChange={handleShippingChange}
        />
      </div>
      <div className="payment-info">
        <h3>Payment Information</h3>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentInfo.cardNumber}
          onChange={handlePaymentChange}
        />
        <input
          type="text"
          name="expDate"
          placeholder="Expiration Date"
          value={paymentInfo.expDate}
          onChange={handlePaymentChange}
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentInfo.cvv}
          onChange={handlePaymentChange}
        />
      </div>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;