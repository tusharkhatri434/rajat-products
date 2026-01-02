import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.08
      }}
      whileHover={{ 
        y: -8,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 25
        }
      }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={`/src/assets/images/${product.id === 'rp-silver' ? 'RP Silver Cadmium Free Alloy' : product.title.replace('RP ', 'RP ')}.png`}
            alt={product.title}
            className="w-full h-full object-contain p-4"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #1f2937 0%, #374151 100%)';
            }}
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="absolute top-4 right-4"
        >
          <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full shadow-lg">
            Premium
          </span>
        </motion.div>

        {/* Animated Border on Hover */}
        <div className="absolute inset-0 border-4 border-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <motion.h3 
          className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-teal-600 transition-colors duration-300"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          {product.title}
        </motion.h3>
        
        <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3 leading-relaxed">
          {product.short_description}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-teal-500 to-transparent mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

        {/* CTA Button */}
        <Link
          to={product.cta.route}
          className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors group/btn"
        >
          <span>{product.cta.label}</span>
          <motion.svg 
            className="w-5 h-5 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </Link>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </motion.div>
  );
}
