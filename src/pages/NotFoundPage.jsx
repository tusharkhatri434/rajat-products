import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="opacity-0 animate-fade-in-up">
          {/* 404 Illustration */}
          <div className="mb-8 opacity-0 animate-fade-in-up animation-delay-100">
            <div className="text-9xl font-bold text-primary mb-4">404</div>
            <div className="flex justify-center space-x-4 text-6xl">
              <span className="inline-block animate-pulse">
                🔍
              </span>
              <span className="inline-block animate-bounce">
                ❓
              </span>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 opacity-0 animate-fade-in-up animation-delay-200">
            Page Not Found
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto opacity-0 animate-fade-in-up animation-delay-300">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted, or perhaps the URL was typed incorrectly.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-300">
            <Button to="/" variant="primary">
              Go Home
            </Button>
            <Button to="/products" variant="secondary">
              Browse Products
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200 opacity-0 animate-fade-in animation-delay-300">
            <p className="text-sm text-gray-600 mb-4">Or try one of these popular pages:</p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link to="/about" className="text-primary hover:text-[#1f5c7a] font-medium transition-colors duration-200">
                About Us
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/infrastructure" className="text-primary hover:text-[#1f5c7a] font-medium transition-colors duration-200">
                Infrastructure
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/certifications" className="text-primary hover:text-[#1f5c7a] font-medium transition-colors duration-200">
                Certifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
