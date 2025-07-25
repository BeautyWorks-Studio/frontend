import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">✕</button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-3">
                <img src={item.src} alt={item.name} className="h-12 w-12 object-cover rounded" />
                <div>
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-gray-500 text-xs">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t space-y-3">
        <div className="flex items-center justify-between font-semibold">
          <span>Total:</span>
          <span>${total}</span>
        </div>
        <a
          href="/checkout"
          className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Go to Checkout
        </a>
      </div>
    </div>
  );
}
