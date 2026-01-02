import { Link } from 'react-router-dom';

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        {/* Logo Icon */}
        <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg shadow-lg flex items-center justify-center transform transition-transform hover:scale-105">
          <div className="text-white font-bold">
            <span className="text-2xl">R</span>
            <span className="text-xl">P</span>
          </div>
        </div>
        {/* Small accent dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full border-2 border-white"></div>
      </div>
      
      {/* Company Name */}
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-bold text-gray-900 tracking-tight">RAJAT</span>
        <span className="text-sm font-semibold text-teal-600 tracking-wide">PRODUCTS</span>
      </div>
    </Link>
  );
}

