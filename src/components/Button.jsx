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
    primary: 'bg-[#2C7596] text-white hover:bg-[#355a6d] shadow-md hover:shadow-lg',
    secondary: 'bg-white text-[#2C7596] border-2 border-[#2C7596] hover:bg-gray-50',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#2C7596]'
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
