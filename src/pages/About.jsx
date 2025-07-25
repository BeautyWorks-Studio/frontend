// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-10">
          Welcome to <span className="text-blue-600 font-semibold">MyLogo</span>, your go-to beauty shop where style meets quality. 
          We offer premium products and personalized services designed to make you feel confident and beautiful.
        </p>

        {/* Section: Our Story */}
        <div className="bg-white rounded-lg shadow p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600">
            We started as a small local beauty store with a simple mission: to provide high-quality beauty products that 
            bring out the best in everyone. Over the years, our passion for beauty and care has grown, allowing us to offer 
            a wide variety of products, from luxurious wigs and makeup to skincare essentials.
          </p>
        </div>

        {/* Section: Our Mission */}
        <div className="bg-white rounded-lg shadow p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to empower individuals by providing top-notch products and exceptional services. We believe beauty 
            is more than skin deep — it’s about feeling confident and expressing yourself.
          </p>
        </div>

        {/* Section: Why Choose Us */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Premium quality products sourced from trusted brands.</li>
            <li>Personalized beauty services tailored to your needs.</li>
            <li>Dedicated customer support and fast delivery.</li>
            <li>Exclusive deals and promotions for our customers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
