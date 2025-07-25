import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

  const handleProceed = () => {
    alert(`Proceeding to payment for $${total}`);
    clearCart();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-lg">
            Your cart is empty. <a href="/products" className="text-blue-600">Shop now</a>.
          </p>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-4 last:border-b-0"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-500 capitalize">{item.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-900 font-medium">${item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
              <p className="text-xl font-semibold">Total: ${total}</p>
              <button
                onClick={handleProceed}
                className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}