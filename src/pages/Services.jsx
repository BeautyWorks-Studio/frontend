// src/pages/Services.jsx
import React, { useState } from 'react';

export default function Services() {
  const services = [
    {
      title: "Hair Services",
      description:
        "From styling to treatments, our professional hair services include haircuts, coloring, blowouts, and more to keep your hair looking stunning.",
      image: "/assets/haircare.jpeg", // Updated to assets
    },
    {
      title: "Skin Care",
      description:
        "Revitalize your skin with our facials, exfoliation, and deep-cleansing treatments designed to leave your skin healthy and glowing.",
      image: "/assets/skincare.jpeg", // Updated to assets
    },
    {
      title: "Nail Services",
      description:
        "Pamper your hands and feet with our manicures, pedicures, and nail art. We use high-quality products for long-lasting beauty.",
      image: "/assets/nailcare.jpeg", // Updated to assets
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} on ${formData.date} for ${formData.service}`);
    setFormData({ name: '', service: '', date: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Services Section */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-md transition p-5 flex flex-col items-center text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-md mb-4 object-cover w-full h-40"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="mt-12 bg-white rounded-lg shadow p-6 max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Book an Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              >
                <option value="">Select a service</option>
                {services.map((service, idx) => (
                  <option key={idx} value={service.title}>{service.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg py-2 transition"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
