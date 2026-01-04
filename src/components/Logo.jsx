import { Link } from 'react-router-dom';

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/logo/image.png" 
        alt="Rajat Products" 
        className="max-h-14 rounded-sm object-contain transition-transform hover:scale-105"
      />
    </Link>
  );
}

