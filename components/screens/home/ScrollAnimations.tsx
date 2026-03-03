import React, { useRef, Children } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}
export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  once = true
}: FadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '-50px'
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 40
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        y: 0
      } :
      {
        opacity: 0,
        y: 40
      }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}>

      {children}
    </motion.div>);

}
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '-50px'
  });
  const containerVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}>

      {children}
    </motion.div>);

}
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}
export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>);

}
interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  once = true
}: ScaleInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '-50px'
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.9
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        scale: 1
      } :
      {
        opacity: 0,
        scale: 0.9
      }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}>

      {children}
    </motion.div>);

}
interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}
export function SlideIn({
  children,
  direction = 'right',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true
}: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '-50px'
  });
  const directionOffset = {
    left: {
      x: -60,
      y: 0
    },
    right: {
      x: 60,
      y: 0
    },
    up: {
      x: 0,
      y: -60
    },
    down: {
      x: 0,
      y: 60
    }
  };
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        x: 0,
        y: 0
      } :
      {
        opacity: 0,
        ...directionOffset[direction]
      }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}>

      {children}
    </motion.div>);

}
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}
export function Parallax({
  children,
  speed = 0.5,
  className = ''
}: ParallaxProps) {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      initial={{
        y: 0
      }}
      style={{
        y: 0
      }}
      className={className}>

      {children}
    </motion.div>);

}
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}
export function TextReveal({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.05
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  const words = text.split(' ');
  const containerVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };
  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        gap: '0.3em'
      }}>

      {words.map((word, index) =>
      <motion.span
        key={index}
        variants={wordVariants}
        style={{
          display: 'inline-block'
        }}>

          {word}
        </motion.span>
      )}
    </motion.span>);

}
interface LineRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  staggerDelay?: number;
}
export function LineReveal({
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
  staggerDelay = 0.15
}: LineRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  const containerVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };
  const lineVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      clipPath: 'inset(100% 0 0 0)'
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0 0 0)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}>

      {lines.map((line, index) =>
      <motion.div
        key={index}
        variants={lineVariants}
        className={lineClassName}>

          {line}
        </motion.div>
      )}
    </motion.div>);

}