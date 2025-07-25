// src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Contact Us</h1>
        <p className="text-gray-600 mb-6">
          Have any questions or concerns? Reach out to us using the form below.
        </p>

        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-left font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-left font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-left font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message..."
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
