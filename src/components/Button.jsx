import { Link } from 'react-router-dom';

export default function Button({ 
  children, 
  to, 
  variant = 'primary', 
  onClick,
  className = '',
  external = false 
}) {
  const baseStyles = 'px-6 py-3 rounded-md font-medium transition-all duration-300 inline-block text-center hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-teal-600'
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
