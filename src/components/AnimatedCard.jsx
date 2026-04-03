import { motion, useReducedMotion } from 'framer-motion';
import { SCROLL_REVEAL_EASE, SCROLL_REVEAL_VIEWPORT } from '../utils/scrollMotion';

const MotionDiv = motion.div;

const REVEAL_FROM = {
  'fade-up': { opacity: 0, y: 32 },
  'fade-down': { opacity: 0, y: -32 },
  'fade-left': { opacity: 0, x: -28 },
  'fade-right': { opacity: 0, x: 28 },
  fade: { opacity: 0 },
  'zoom-in': { opacity: 0, y: 26 },
};

/**
 * Reusable AnimatedCard with scroll, hover, and tap animations.
 * @param {'fade-up'|'fade-down'|'fade-left'|'fade-right'|'fade'|'zoom-in'} [props.reveal]
 */
export default function AnimatedCard({ 
  children, 
  index = 0, 
  delay,
  reveal = 'fade-up',
  className = '', 
  onClick,
  disableHover = false,
  disableTap = false,
  ...restProps
}) {
  const prefersReducedMotion = useReducedMotion();
  const staggerDelay = delay !== undefined ? delay : index * 0.1;
  const from = REVEAL_FROM[reveal] ?? REVEAL_FROM['fade-up'];
  const to = { opacity: 1, x: 0, y: 0, scale: 1 };

  if (prefersReducedMotion) {
    return (
      <div data-aos={reveal} className={className} onClick={onClick} {...restProps}>
        {children}
      </div>
    );
  }

  return (
    <MotionDiv
      initial={from}
      whileInView={to}
      data-aos={reveal}
      transition={{
        duration: 0.58,
        delay: staggerDelay,
        ease: SCROLL_REVEAL_EASE,
      }}
      viewport={SCROLL_REVEAL_VIEWPORT}
      
      // Hover: slight lift (no scale — avoids center "bloom" on cards)
      whileHover={!disableHover ? { 
        y: -4,
        transition: { 
          duration: 0.25,
          ease: 'easeOut',
        },
      } : undefined}
      
      whileTap={!disableTap ? { 
        y: 0,
        transition: { 
          duration: 0.12,
        },
      } : undefined}
      
      // Base styles + custom classes
      className={className}
      onClick={onClick}
      
      // Prevent layout shift by using will-change
      style={{ transformOrigin: 'top center', willChange: 'transform, opacity' }}
      
      {...restProps}
    >
      {children}
    </MotionDiv>
  );
}
