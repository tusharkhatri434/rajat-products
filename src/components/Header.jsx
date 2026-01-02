import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Certifications', path: '/certifications' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-teal-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <a
              href="https://wa.me/919837065599?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300 font-medium inline-flex items-center"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 rounded-md font-medium transition-colors duration-300 ${
                      isActive(item.path)
                        ? 'bg-teal-50 text-teal-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://wa.me/919837065599?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mx-4 px-5 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300 font-medium text-center"
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

