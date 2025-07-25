// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import background from '../assets/Woman.webp'; // Ensure high-resolution image

export default function Home() {
  return (
    <div
      className="relative min-h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl text-center text-white space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Step into Your Glow Era
        </h1>

        <h2 className="text-2xl md:text-3xl font-light italic text-gray-200">
          Because beauty isn’t just a look — it’s a lifestyle.
        </h2>

        <p className="text-md md:text-lg text-gray-300 leading-relaxed">
          Discover the power of self-care, confidence, and natural beauty. 
          At ForeverBeauty Shop, we believe every woman deserves to feel radiant and empowered — every single day.
          From glowing skin to nourishing products, we’re here to help you embrace your most beautiful self.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            to="/products"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Browse Products
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
