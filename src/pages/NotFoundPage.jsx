import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Illustration */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-9xl font-bold text-teal-600 mb-4">404</div>
            <div className="flex justify-center space-x-4 text-6xl">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔍
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                ❓
              </motion.span>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 mb-8 max-w-lg mx-auto"
          >
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted, or perhaps the URL was typed incorrectly.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button to="/" variant="primary">
              Go Home
            </Button>
            <Button to="/products" variant="secondary">
              Browse Products
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-600 mb-4">Or try one of these popular pages:</p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link to="/about" className="text-teal-600 hover:text-teal-700 font-medium">
                About Us
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/infrastructure" className="text-teal-600 hover:text-teal-700 font-medium">
                Infrastructure
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/certifications" className="text-teal-600 hover:text-teal-700 font-medium">
                Certifications
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

