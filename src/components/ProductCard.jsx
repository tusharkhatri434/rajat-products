import { Link } from 'react-router-dom';

export default function ProductCard({ product, index = 0 }) {
  return (
    <div
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 opacity-0 animate-fade-in-up hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 bg-linear-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`/images/${product.imgName}`}
            alt={product.title}
            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-teal-600 transition-colors duration-300">
          {product.title}
        </h3>
        
        <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3 leading-relaxed">
          {product.short_description}
        </p>

        {/* CTA Button */}
        <Link
          to={product.cta.route}
          className="block w-full px-4 py-2.5 bg-teal-600 text-white text-center rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium text-sm hover:scale-105 active:scale-95"
        >
          {product.cta.label}
        </Link>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-linear-to-r from-teal-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
}
