'use client';

import { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; age: number }[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const hue = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      points.current.push({ x: e.clientX, y: e.clientY, age: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      hue.current = (hue.current + 1) % 360;

      for (let i = 0; i < points.current.length; i++) {
        const point = points.current[i];
        point.age += 1;

        const opacity = 1 - point.age / 50;
        if (opacity <= 0) {
          continue;
        }

        const radius = 20 - (point.age / 50) * 15;
        
        ctx.beginPath();
        ctx.fillStyle = `hsla(${hue.current + i * 3}, 100%, 70%, ${opacity})`;
        ctx.arc(point.x, point.y, radius > 0 ? radius : 1, 0, Math.PI * 2);
        ctx.fill();
      }

      points.current = points.current.filter(p => p.age < 50);
      
      animationFrameId.current = requestAnimationFrame(draw);
    };
    
    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0"
      style={{ zIndex: 9999 }}
    />
  );
};

export default CursorTrail;