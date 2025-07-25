// src/components/Navbar.jsx
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';
import AuthModal from './AuthModal';

import searchIcon from '../assets/search_icon.png';
import cartIcon from '../assets/cart_icon.png';
import menuIcon from '../assets/menu_icon.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);                 // mobile nav
  const [searchOpen, setSearchOpen] = useState(false);     // search input toggle
  const [productsOpen, setProductsOpen] = useState(false); // products dropdown
  const [servicesOpen, setServicesOpen] = useState(false); // services dropdown
  const [cartOpen, setCartOpen] = useState(false);         // cart drawer
  const [authOpen, setAuthOpen] = useState(false);         // auth modal
  const [user, setUser] = useState(null);                  // simple local login state
  const [searchQuery, setSearchQuery] = useState('');

  const { count } = useCart();
  const navigate = useNavigate();

  // timer to delay closing dropdowns
  const closeTimer = useRef(null);

  const handleLogin = (username) => setUser(username);
  const handleLogout = () => setUser(null);

  const handleEnter = (setFn) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setFn(true);
  };
  const handleLeave = (setFn) => {
    closeTimer.current = setTimeout(() => setFn(false), 1000);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const term = searchQuery.trim();
    if (term) {
      navigate(`/products?search=${encodeURIComponent(term)}`);
      setSearchOpen(false);
    }
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-16">
          {/* LEFT: Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-blue-600">
                ForeverBeauty
              </a>
            </div>

            {/* CENTER: links (ORDER: Home, Products, About, Services, Contact Us) */}
            <div className="hidden md:flex items-center justify-center gap-8 relative">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition">
                Home
              </a>

              {/* Products dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter(setProductsOpen)}
                onMouseLeave={() => handleLeave(setProductsOpen)}
              >
                <a
                  href="/products"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Products
                </a>

                {productsOpen && (
                  <div className="absolute left-0 mt-2 w-52 bg-white border rounded shadow-lg">
                    <a href="/products?category=wigs" className="block px-4 py-2 hover:bg-gray-100">Wigs</a>
                    <a href="/products?category=skincare" className="block px-4 py-2 hover:bg-gray-100">Skincare</a>
                    <a href="/products?category=makeup" className="block px-4 py-2 hover:bg-gray-100">Make‑up</a>
                    <a href="/products?category=hairproducts" className="block px-4 py-2 hover:bg-gray-100">Hair Products</a>
                    <a href="/products?category=brusheselectronics" className="block px-4 py-2 hover:bg-gray-100">Brushes & Electronics</a>
                  </div>
                )}
              </div>

              <a href="/about" className="text-gray-700 hover:text-blue-600 transition">
                About
              </a>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter(setServicesOpen)}
                onMouseLeave={() => handleLeave(setServicesOpen)}
              >
                <a
                  href="/services"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Services
                </a>
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-52 bg-white border rounded shadow-lg">
                    <a href="/services?type=hair" className="block px-4 py-2 hover:bg-gray-100">Hair Services</a>
                    <a href="/services?type=skin" className="block px-4 py-2 hover:bg-gray-100">Skin Care</a>
                    <a href="/services?type=nails" className="block px-4 py-2 hover:bg-gray-100">Nail Services</a>
                  </div>
                )}
              </div>

              <a href="/contact" className="text-gray-700 hover:text-blue-600 transition">
                Contact Us
              </a>
            </div>

            {/* RIGHT: Search + Cart + Login/Logout */}
            <div className="hidden md:flex items-center justify-end gap-4 relative">
              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 hover:bg-gray-100 rounded transition"
                  aria-label="Search"
                >
                  <img src={searchIcon} alt="Search" className="h-6 w-6" />
                </button>

                {searchOpen && (
                  <form
                    onSubmit={handleSearchSubmit}
                    className="absolute right-0 top-10 border rounded px-2 py-1 w-48 shadow bg-white"
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full focus:outline-none"
                      autoFocus
                    />
                  </form>
                )}
              </div>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded transition"
                aria-label="Cart"
              >
                <img src={cartIcon} alt="Cart" className="h-6 w-6" />
                {count > 0 && (
                  <span className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded-full px-1.5">
                    {count}
                  </span>
                )}
              </button>

              {/* Login / Logout */}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-1.5 rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 transition"
                >
                  Logout ({user})
                </button>
              ) : (
                <button
                  onClick={() => setAuthOpen(true)}
                  className="px-4 py-1.5 rounded-md border border-gray-300 hover:bg-gray-100 transition"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden col-span-2 justify-self-end">
              <button
                onClick={() => setOpen(!open)}
                className="p-2 inline-flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <img src={menuIcon} alt="Menu" className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden border-t">
            <div className="px-4 py-3 space-y-3">
              <a href="/" className="block text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="/products" className="block text-gray-700 hover:text-blue-600 transition">Products</a>
              <a href="/about" className="block text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="/services" className="block text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="/contact" className="block text-gray-700 hover:text-blue-600 transition">Contact Us</a>

              <div className="flex items-center gap-3 pt-3">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="flex-1 px-4 py-2 rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 transition"
                  >
                    Logout ({user})
                  </button>
                ) : (
                  <button
                    onClick={() => setAuthOpen(true)}
                    className="flex-1 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
                  >
                    Login
                  </button>
                )}
                <button
                  onClick={() => setCartOpen(true)}
                  className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  <img src={cartIcon} alt="Cart" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
}

