'use client';

import { useEffect, useRef } from 'react';

type Dot = {
  x: number;
  y: number;
};

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dots = useRef<Dot[]>([]);
  const mousePosition = useRef<Dot>({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);
  const hue = useRef(200);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initializeDots = () => {
      const DOT_COUNT = 20;
      dots.current = [];
      for (let i = 0; i < DOT_COUNT; i++) {
        dots.current.push({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      }
    };

    setCanvasSize();
    initializeDots();
    
    window.addEventListener('resize', () => {
        setCanvasSize();
        initializeDots();
    });

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      if (!canvas || !ctx) return;

      const easing = 0.25;
      const DOT_COUNT = dots.current.length;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      hue.current = (hue.current + 0.5) % 360;

      dots.current.forEach((dot, index) => {
        let targetX: number;
        let targetY: number;

        if (index === 0) {
          targetX = mousePosition.current.x;
          targetY = mousePosition.current.y;
        } else {
          targetX = dots.current[index - 1].x;
          targetY = dots.current[index - 1].y;
        }

        dot.x += (targetX - dot.x) * easing;
        dot.y += (targetY - dot.y) * easing;

        const size = (DOT_COUNT - index) * 1.5;
        const opacity = 1 - index / DOT_COUNT;
        const currentHue = hue.current + index * 3;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${currentHue}, 100%, 65%, ${opacity})`;
        ctx.arc(dot.x, dot.y, size > 0 ? size : 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
      });

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
      className="pointer-events-none fixed top-0 left-0 w-full h-full"
      style={{ zIndex: 9999 }}
    />
  );
};

export default CursorTrail;