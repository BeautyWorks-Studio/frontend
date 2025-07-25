// src/pages/Admin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock products and users (initial)
const initialProducts = [
  { id: 1, name: "Product 1", price: 29.99 },
  { id: 2, name: "Product 2", price: 39.99 },
];

const initialUsers = [
  { id: 1, username: "john_doe", email: "john@example.com" },
  { id: 2, username: "jane_doe", email: "jane@example.com" },
];

export default function Admin() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  const [products, setProducts] = useState(initialProducts);
  const [users, setUsers] = useState(initialUsers);

  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (adminPassword === "admin123") {   // hardcoded admin password
      setIsAdmin(true);
    } else {
      alert("Invalid admin password");
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProductName || !newProductPrice) return;
    const newProduct = {
      id: products.length + 1,
      name: newProductName,
      price: parseFloat(newProductPrice),
    };
    setProducts([...products, newProduct]);
    setNewProductName("");
    setNewProductPrice("");
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleRemoveUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        >
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-3"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Manage Products */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Manage Products</h2>
        <form onSubmit={handleAddProduct} className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            className="border px-3 py-2 rounded flex-1"
          />
          <input
            type="number"
            placeholder="Price"
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
            className="border px-3 py-2 rounded w-32"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add
          </button>
        </form>

        <ul className="bg-white rounded shadow divide-y">
          {products.map((p) => (
            <li key={p.id} className="p-4 flex justify-between items-center">
              <span>{p.name} - ${p.price.toFixed(2)}</span>
              <button
                onClick={() => handleRemoveProduct(p.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Manage Users */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
        <ul className="bg-white rounded shadow divide-y">
          {users.map((u) => (
            <li key={u.id} className="p-4 flex justify-between items-center">
              <span>{u.username} ({u.email})</span>
              <button
                onClick={() => handleRemoveUser(u.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
