export default function SubProductCard({ subProduct, index = 0 }) {
  return (
    <div
      className="group bg-white rounded-xl border-2 border-gray-200 p-4 md:p-6 hover:border-teal-500 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden opacity-0 animate-fade-in-up hover:-translate-y-1"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Corner Accent */}
      <div 
        className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon Badge */}
        <div className="w-8 h-8 md:w-10 md:h-10 bg-teal-100 rounded-full flex items-center justify-center mb-2 md:mb-3 group-hover:bg-teal-600 transition-all duration-300 group-hover:rotate-12">
          <svg className="w-4 h-4 md:w-6 md:h-6 text-teal-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        </div>

        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-teal-600 transition-colors duration-300">
          {subProduct.name}
        </h3>
        
        {subProduct.short_description && (
          <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
            {subProduct.short_description}
          </p>
        )}

        {/* View Specs button would trigger modal */}
        <button className="text-teal-600 text-xs md:text-sm font-medium hover:text-teal-700 transition-colors duration-200 hover:underline">
          View Specifications →
        </button>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
}
