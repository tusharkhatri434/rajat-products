import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  to, 
  variant = 'primary', 
  onClick,
  className = '',
  external = false 
}) {
  const baseStyles = 'px-6 py-3 rounded-md font-medium transition-all duration-300 inline-block text-center';
  
  const variants = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-teal-600'
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const MotionComponent = motion(to ? Link : 'button');

  return (
    <MotionComponent
      to={to}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </MotionComponent>
  );
}

