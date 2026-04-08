import { motion, useReducedMotion } from 'framer-motion';
import { SCROLL_REVEAL_EASE, SCROLL_REVEAL_VIEWPORT } from '../utils/scrollMotion';

const MotionDiv = motion.div;

/**
 * Scroll-triggered reveal (AOS-style naming). Subtle motion via whileInView.
 * Use data-aos-style `animation` values: fade-up, fade-down, fade-left, fade-right, fade, zoom-in.
 * (zoom-in is fade + slight lift — no scale, avoids the "pop from center" effect.)
 */
const PRESETS = {
  'fade-up': { opacity: 0, y: 22 },
  'fade-down': { opacity: 0, y: -22 },
  'fade-left': { opacity: 0, x: -28 },
  'fade-right': { opacity: 0, x: 28 },
  fade: { opacity: 0 },
  'zoom-in': { opacity: 0, y: 18 },
};

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.52,
  className = '',
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const from = PRESETS[animation] ?? PRESETS['fade-up'];
  const to = { opacity: 1, x: 0, y: 0, scale: 1 };

  if (prefersReducedMotion) {
    return (
      <div className={className} data-aos={animation} {...props}>
        {children}
      </div>
    );
  }

  return (
    <MotionDiv
      initial={from}
      whileInView={to}
      viewport={SCROLL_REVEAL_VIEWPORT}
      transition={{ duration, delay, ease: SCROLL_REVEAL_EASE }}
      className={className}
      data-aos={animation}
      style={{ transformOrigin: 'top center', willChange: 'transform, opacity' }}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}
