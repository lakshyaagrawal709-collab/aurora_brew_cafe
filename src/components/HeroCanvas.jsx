import React, { useEffect, useRef } from 'react';

const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId;

    const resize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.clientWidth : window.innerWidth;
      canvas.height = parent ? parent.clientHeight : window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle system for floating coffee beans & steam dust
    const width = canvas.width || 800;
    const height = canvas.height || 600;

    const beans = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 6 + 4,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.4 + 0.2
    }));

    const steam = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 20 + 8,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -Math.random() * 0.5 - 0.1,
      alpha: Math.random() * 0.1 + 0.02
    }));

    let mouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw steam particles
      steam.forEach(p => {
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.y * 0.01) * 0.2;
        if (p.y < -50) {
          p.y = canvas.height + 50;
          p.x = Math.random() * canvas.width;
        }

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grad.addColorStop(0, `rgba(245, 235, 224, ${p.alpha})`);
        grad.addColorStop(1, 'rgba(245, 235, 224, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw floating roasted coffee beans
      beans.forEach(b => {
        b.y += b.vy;
        b.x += b.vx;
        b.rotation += b.rotSpeed;

        const dx = mouse.x - b.x;
        const dy = mouse.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          b.x -= (dx / dist) * 0.8;
          b.y -= (dy / dist) * 0.8;
        }

        if (b.y < -30) {
          b.y = canvas.height + 30;
          b.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rotation);
        ctx.globalAlpha = b.alpha;

        ctx.fillStyle = '#3d2319';
        ctx.beginPath();
        ctx.ellipse(0, 0, b.radius * 1.3, b.radius * 0.85, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#c9a687';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(-b.radius * 0.9, 0);
        ctx.quadraticCurveTo(0, b.radius * 0.4, b.radius * 0.9, 0);
        ctx.stroke();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default HeroCanvas;
