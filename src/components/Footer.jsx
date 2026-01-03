import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const productCategories = [
    { name: 'RP Phos', path: '/products/rp-phos' },
    { name: 'RP Silver', path: '/products/rp-silver' },
    { name: 'RP Copper', path: '/products/rp-copper' },
    { name: 'RP Braze', path: '/products/rp-braze' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Certifications', path: '/certifications' }
  ];

  const consumables = [
    'Brazing Alloys',
    'Welding Rods',
    'Filler Metals',
    'Copper Alloys',
    'Silver Alloys',
    'Brass Alloys'
  ];

  const certifications = [
    'ISO 14001:2015',
    'ISO 9001:2015',
    'AWS A5.8',
    'EN 1044',
    'DIN 8513'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4 brightness-200">
              <Logo />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Leading the industry since 1989. Delivering world-class brazing alloys that set new standards in quality, consistency, and reliability across metallurgical applications worldwide.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://wa.me/919837065599" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a 
                href="mailto:Rpalloys2000@gmail.com" 
                className="text-gray-400 hover:text-[#2C7596] transition-colors"
                aria-label="Email"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a 
                href="https://maps.app.goo.gl/5hiqGJCByr7hh73L8?g_st=ipc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#2C7596] transition-colors"
                aria-label="Location"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#2C7596] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Product Categories</h3>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.path}>
                  <Link
                    to={category.path}
                    className="text-gray-400 hover:text-[#2C7596] transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-medium text-sm mb-3">Consumables</h4>
              <ul className="space-y-2">
                {consumables.slice(0, 3).map((item, index) => (
                  <li key={index} className="text-gray-400 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400">
                  <span className="font-medium text-white">Address:</span><br />
                  <a 
                    href="https://maps.app.goo.gl/5hiqGJCByr7hh73L8?g_st=ipc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#2C7596] transition-colors"
                  >
                    1, Mohkampur Industrial Complex,<br />
                    Phase - II, Rithani,<br />
                    Meerut, U.P, 250103
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-400">
                  <span className="font-medium text-white">Business Hours:</span><br />
                  Mon-Sat: 8:30 AM - 5:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
              <div>
                <p className="text-gray-400">
                  <span className="font-medium text-white">Email:</span><br />
                  <a 
                    href="mailto:Rpalloys2000@gmail.com"
                    className="hover:text-[#2C7596] transition-colors"
                  >
                    Rpalloys2000@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-400">
                  <span className="font-medium text-white">Phone:</span><br />
                  <a href="tel:+919837065599" className="hover:text-[#2C7596] transition-colors">+91 98370 65599</a><br />
                  <a href="tel:+919837002076" className="hover:text-[#2C7596] transition-colors">+91 98370 02076</a><br />
                  <a href="tel:+919457815966" className="hover:text-[#2C7596] transition-colors">+91 94578 15966</a>
                </p>
              </div>
              <div>
                <a 
                  href="https://wa.me/919837065599?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20products." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              © 2026 Rajat Products. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-[#2C7596] text-xs font-medium rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

