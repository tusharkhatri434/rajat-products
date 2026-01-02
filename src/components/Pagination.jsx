import { motion } from 'framer-motion';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 my-8">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-md ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-teal-600 hover:bg-teal-50'
        }`}
        aria-label="Previous page"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-1">
        {pages.map((page) => (
          <motion.button
            key={page}
            onClick={() => handlePageChange(page)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-10 h-10 rounded-md font-medium transition-all duration-200 ${
              page === currentPage
                ? 'bg-teal-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {page}
          </motion.button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-md ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-teal-600 hover:bg-teal-50'
        }`}
        aria-label="Next page"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

