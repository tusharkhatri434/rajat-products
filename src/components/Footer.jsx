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
    { name: 'RP Aluminium', path: '/products/rp-aluminium' },
    { name: 'Brazing Fluxes', path: '/products/brazing-fluxes' },
    { name: 'Copper Paste', path: '/products/copper-paste' },
    { name: 'Zari Wire', path: '/products/zari-wire' },
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
                href="mailto:connect@rajatproducts.com"
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

          {/* Contact Info — aligned with Contact page */}
          <div className="lg:col-span-1">
            <h3 className="text-primary font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-4 text-sm">
              {/* Address (same as /contact) */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Address</p>
                  <p className="leading-relaxed text-gray-700">
                    <a
                      href="https://www.google.com/maps/place/Rajat+Products+Private+Limited/@28.9470857,77.6713354,17z/data=!3m1!4b1!4m6!3m5!1s0x390c658cac49dadf:0xcb7470652c7240ff!8m2!3d28.9470857!4d77.6713354!16s%2Fg%2F11sx3qbx7_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      19 A & B, Mohkampur Industrial Area<br />
                      Phase- II, Rithani, Meerut, U.P., India, 250103
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <div className="text-gray-700">
                    <a href="tel:+919837065599" className="hover:text-primary transition-colors block">+91 9837065599</a>
                    <a href="tel:+919837002076" className="hover:text-primary transition-colors block">+91 9837002076</a>
                    <a href="tel:+919457815966" className="hover:text-primary transition-colors block">+91 9457815966</a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/919837065599"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    +91 9837065599
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <a
                    href="mailto:connect@rajatproducts.com"
                    className="break-all text-gray-700 hover:text-primary transition-colors"
                  >
                    connect@rajatproducts.com
                  </a>
                </div>
              </div>

              {/* Business hours (same as /contact sidebar) */}
              <div className="flex items-start border-t border-gray-200 pt-4">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="min-w-0 text-gray-700">
                  <p className="font-semibold text-gray-900 mb-2">Business hours</p>
                  <p className="flex justify-between gap-4 border-b border-gray-100 py-1">
                    <span>Mon – Sat</span>
                    <span className="shrink-0 font-medium text-gray-900">9:00 AM – 5:00 PM</span>
                  </p>
                  <p className="flex justify-between gap-4 py-1">
                    <span>Sunday</span>
                    <span className="shrink-0 font-medium text-red-500">Closed</span>
                  </p>
                </div>
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

