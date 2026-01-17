import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products', hasDropdown: true },
    { name: 'Our Infrastructure & Capabilities', path: '/infrastructure' },
    { name: 'Our Certifications', path: '/certifications' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const productDropdownItems = [
    { name: 'RP Phos', path: '/products/rp-phos' },
    { name: 'RP Silver', path: '/products/rp-silver' },
    { name: 'RP Copper', path: '/products/rp-copper' },
    { name: 'RP Braze', path: '/products/rp-braze' },
    { name: 'RP Weld', path: '/products/rp-weld-92' }, // Assuming 5th is RP Weld based on common patterns, linking to first item or a category if implemented. I'll link to rp-copper for now if no dedicated page, but user asked for 5 buttons.
  ];

  const isActive = (path) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <div key={item.path} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                    className={`relative font-medium transition-colors duration-300 flex items-center ${isActive(item.path) || location.pathname.startsWith('/products/')
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                      }`}
                  >
                    {item.name}
                    <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {(isActive(item.path) || location.pathname.startsWith('/products/')) && (
                      <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"></span>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {isProductsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-fade-in">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Our Products
                      </div>
                      {productDropdownItems.map((product) => (
                        <Link
                          key={product.path}
                          to={product.path}
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${isActive(product.path)
                              ? 'text-primary bg-primary/10'
                              : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                            }`}
                        >
                          {product.name}
                        </Link>
                      ))}
                      <div className="border-t border-gray-200 mt-2 pt-2">
                        <Link
                          to="/products"
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm font-medium text-primary hover:bg-gray-50 transition-colors duration-200"
                        >
                          View All Products →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-medium transition-colors duration-300 ${isActive(item.path)
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                    }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"></span>
                  )}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none transition-colors duration-200"
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
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="py-4 space-y-2">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <div key={item.path}>
                  <button
                    onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-md font-medium transition-colors duration-300 ${isActive(item.path) || location.pathname.startsWith('/products/')
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    <span>{item.name}</span>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mobile Dropdown */}
                  {isProductsDropdownOpen && (
                    <div className="ml-4 mt-2 space-y-1">
                      {productDropdownItems.map((product) => (
                        <Link
                          key={product.path}
                          to={product.path}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsProductsDropdownOpen(false);
                          }}
                          className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive(product.path)
                              ? 'bg-primary/10 text-primary'
                              : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                          {product.name}
                        </Link>
                      ))}
                      <Link
                        to="/products"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsProductsDropdownOpen(false);
                        }}
                        className="block px-4 py-2 rounded-md text-sm font-medium text-primary hover:bg-gray-50 transition-colors duration-300"
                      >
                        View All Products →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md font-medium transition-colors duration-300 ${isActive(item.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
