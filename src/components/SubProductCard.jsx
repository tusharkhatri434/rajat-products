import AnimatedCard from './AnimatedCard';

export default function SubProductCard({ subProduct, index = 0 }) {
  return (
    <AnimatedCard
      index={index}
      className="group bg-white rounded-xl border-2 border-gray-200 p-4 md:p-6 hover:border-[#3d8aaf] hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden h-full flex flex-col"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#2C7596]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Corner Accent */}
      <div 
        className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-[#3d8aaf] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Badge */}
        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#2C7596]/20 rounded-full flex items-center justify-center mb-2 md:mb-3 group-hover:bg-[#2C7596] transition-all duration-300 group-hover:rotate-12">
          <svg className="w-4 h-4 md:w-6 md:h-6 text-[#2C7596] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        </div>

        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#2C7596] transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
          {subProduct.name}
        </h3>
        
        {subProduct.short_description && (
          <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-3 flex-grow">
            {subProduct.short_description}
          </p>
        )}

        {/* View Specs button would trigger modal */}
        <button className="text-[#2C7596] text-xs md:text-sm font-medium hover:text-[#1f5c7a] transition-colors duration-200 hover:underline mt-auto">
          View Specifications →
        </button>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#3d8aaf] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </AnimatedCard>
  );
}
