import { motion } from 'framer-motion';

/**
 * Reusable AnimatedCard component with scroll, hover, and tap animations
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {number} props.index - Index for staggered animations (default: 0)
 * @param {number} props.delay - Custom delay in seconds (overrides index-based delay)
 * @param {string} props.className - Additional Tailwind classes
 * @param {Function} props.onClick - Optional click handler
 * @param {boolean} props.disableHover - Disable hover animations (default: false)
 * @param {boolean} props.disableTap - Disable tap animations (default: false)
 */
export default function AnimatedCard({ 
  children, 
  index = 0, 
  delay,
  className = '', 
  onClick,
  disableHover = false,
  disableTap = false,
  ...restProps
}) {
  // Calculate stagger delay: 0.1s per index
  const staggerDelay = delay !== undefined ? delay : index * 0.1;

  return (
    <motion.div
      // Initial state: invisible and slightly below
      initial={{ 
        opacity: 0, 
        y: 40 
      }}
      
      // Animate when scrolled into view
      whileInView={{ 
        opacity: 1, 
        y: 0 
      }}
      
      // Animation configuration
      transition={{
        duration: 0.6,
        delay: staggerDelay,
        ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuad
      }}
      
      // Run animation only once
      viewport={{ 
        once: true,
        margin: "-50px" // Trigger 50px before entering viewport
      }}
      
      // Hover: scale up + increase shadow
      whileHover={!disableHover ? { 
        scale: 1.04,
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      } : undefined}
      
      // Tap: subtle press effect
      whileTap={!disableTap ? { 
        scale: 0.98,
        transition: { 
          duration: 0.15 
        }
      } : undefined}
      
      // Base styles + custom classes
      className={className}
      onClick={onClick}
      
      // Prevent layout shift by using will-change
      style={{ willChange: 'transform, opacity' }}
      
      {...restProps}
    >
      {children}
    </motion.div>
  );
}
