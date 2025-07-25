// src/pages/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Step into your glow era. 
        </h1>
        <p className="text-gray-600 mb-6">
          Because beauty isn’t just a look, it’s a lifestyle.
        </p>
        <Link
          to="/products"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}
