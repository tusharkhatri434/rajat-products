import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Our Certifications', path: '/certifications' },
    { name: 'Our Infrastructure & Capabilities', path: '/infrastructure' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const products = [
    { name: 'RP Phos', path: '/products/rp-phos' },
    {
      name: 'RP Silver',
      path: '/products/rp-silver',
      subProducts: [
        { name: 'Cadmium Free Alloy', path: '/products/rp-silver' },
        { name: 'Cadmium Bearing Alloy', path: '/products/rp-silver' }
      ]
    },
    { name: 'RP Copper', path: '/products/rp-copper' },
    { name: 'RP Braze', path: '/products/rp-braze' },
    { name: 'RP Weld', path: '/products/rp-weld-92' }
  ];

  return (
    <footer className="bg-white text-black border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info - Left Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <img
                  src="/logo/image.png"
                  alt="Rajat Products"
                  className="max-h-15 w-auto object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>

            {/* Company Description */}
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Located in Meerut's industrial hub, Rajat Products Pvt. Ltd. has been a trusted name in manufacturing high-quality silver & copper phosphorus brazing alloys, welding alloys & zari wire.
            </p>

            {/* Get Your Quote Button */}
            <a
              href="https://wa.me/919837065599?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-dark transition-colors mb-4"
            >
              Get Your Quote
            </a>

            {/* Contact Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:+919837065599"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                aria-label="Phone"
              >
                <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
              </a>
              <a
                href="mailto:Rpalloys2000@gmail.com"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919837065599"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20BA5A] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-primary font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-700 hover:text-primary transition-colors text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-1">
            <h3 className="text-primary font-bold text-lg mb-4">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.path}>
                  <Link
                    to={product.path}
                    className="text-gray-700 hover:text-primary transition-colors text-sm block"
                  >
                    {product.name}
                  </Link>
                  {product.subProducts && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {product.subProducts.map((subProduct, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <Link
                            to={subProduct.path}
                            className="text-gray-600 hover:text-primary transition-colors text-sm"
                          >
                            {subProduct.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-primary font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-4 text-sm">
              {/* Address */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <p className="text-gray-700 leading-relaxed">
                  <a
                    href="https://maps.app.goo.gl/5hiqGJCByr7hh73L8?g_st=ipc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    1, Mohkampur Industrial Complex,<br />
                    Phase - II, Rithani, Meerut, U.P, 250103
                  </a>
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                <div className="text-gray-700">
                  <a href="tel:+919837065599" className="hover:text-primary transition-colors block">+91 98370 65599</a>
                  <a href="tel:+919837002076" className="hover:text-primary transition-colors block">+91 98370 02076</a>
                  <a href="tel:+919457815966" className="hover:text-primary transition-colors block">+91 94578 15966</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:Rpalloys2000@gmail.com"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Rpalloys2000@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-sm text-gray-600">
            © 2026 Rajat Products Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

