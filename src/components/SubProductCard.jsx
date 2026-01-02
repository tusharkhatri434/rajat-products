import { motion } from 'framer-motion';

export default function SubProductCard({ subProduct, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.06
      }}
      whileHover={{ 
        scale: 1.03,
        y: -6,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 25
        }
      }}
      className="group bg-white rounded-xl border-2 border-gray-200 p-4 md:p-6 hover:border-teal-500 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Corner Accent */}
      <motion.div 
        className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon Badge */}
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-8 h-8 md:w-10 md:h-10 bg-teal-100 rounded-full flex items-center justify-center mb-2 md:mb-3 group-hover:bg-teal-600 transition-colors duration-300"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6 text-teal-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        </motion.div>

        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-teal-600 transition-colors duration-300">
          {subProduct.name}
        </h3>
        
        {subProduct.short_description && (
          <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
            {subProduct.short_description}
          </p>
        )}

        {/* Animated Divider */}
        <div className="h-px bg-gradient-to-r from-teal-500 to-transparent mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

        {/* Button */}
        <button className="text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors inline-flex items-center group/btn">
          <span>View Specifications</span>
          <motion.svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </button>
      </div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        }}
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      ></motion.div>
    </motion.div>
  );
}
