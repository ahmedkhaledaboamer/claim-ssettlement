import { useAnimation, useInView, type Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function useScrollReveal(margin: string = '-100px') {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: margin as any });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return { ref, controls, variants, isInView };
}