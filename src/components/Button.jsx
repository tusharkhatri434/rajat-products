import { Link } from 'react-router-dom';

export default function Button({ 
  children, 
  to, 
  variant = 'primary', 
  onClick,
  className = '',
  external = false 
}) {
  const baseStyles = 'px-3 py-1 rounded-md font-medium transition-all duration-300 inline-block text-center hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-[#355a6d] shadow-md hover:shadow-lg',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-gray-50',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary'
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
