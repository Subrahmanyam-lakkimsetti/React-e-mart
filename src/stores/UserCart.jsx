import React from 'react';
import { useCart } from './context/CartContext';
import Navbar from './components/Navbar';

const UserCart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  console.log(cartItems);

  return (
    <>
      <Navbar />
      <div>
        <h2 className="y-cart">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : (
          <div>
            {cartItems.map((item) => {
              return (
                <div className="cart-section" key={item.id}>
                  <div className="cart-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.product}</h3>
                    <h2>{item.price}</h2>
                    <h3>{item.model}</h3>
                  </div>
                  <button
                    className="removeBtn"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
            {/* Checkout Button */}
            <button
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                marginTop: '20px',
              }}
              onClick={() => alert('Proceeding to Checkout')}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
