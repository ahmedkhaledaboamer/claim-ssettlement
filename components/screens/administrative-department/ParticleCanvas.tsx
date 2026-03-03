'use client';
import { useEffect, useRef } from 'react';
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  targetAlpha: number;
}
// Light theme colors - pastels and soft tones
const COLORS = [
'#0E7490',
'#06B6D4',
'#22D3EE',
'#D97706',
'#94A3B8',
'#64748B' // slate darker
];
export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({
    x: 0,
    y: 0
  });
  const animationRef = useRef<number | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(60, Math.floor(window.innerWidth / 25));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: Math.random() * 0.15 + 0.05,
          targetAlpha: Math.random() * 0.15 + 0.05
        });
      }
      particlesRef.current = particles;
    };
    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    };
    const drawConnections = () => {
      const particles = particlesRef.current;
      const maxDistance = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(14, 116, 144, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };
    const updateParticle = (particle: Particle) => {
      // Mouse interaction
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 150) {
        const force = (150 - distance) / 150;
        particle.vx -= dx / distance * force * 0.01;
        particle.vy -= dy / distance * force * 0.01;
      }
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      // Boundary check
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      // Damping
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      // Alpha pulsing
      if (Math.random() < 0.01) {
        particle.targetAlpha = Math.random() * 0.15 + 0.05;
      }
      particle.alpha += (particle.targetAlpha - particle.alpha) * 0.02;
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw connections first
      drawConnections();
      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    resizeCanvas();
    createParticles();
    animate();
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: 0.4
      }} />);


}