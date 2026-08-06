import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export default function ParticleField(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
    };

    let w = 0;
    let h = 0;

    const light = resolvedTheme !== "dark";
    const accent = light ? "5,103,127" : "0,240,255";
    const idleRgb = light ? "82,82,91" : "161,161,170";
    const accentAlpha = light ? 0.7 : 0.85;
    const idleAlpha = light ? 0.45 : 0.35;
    const lineAlpha = light ? 0.14 : 0.16;

    const initParticles = (): void => {
      const count = Math.min(
        80,
        Math.max(30, Math.floor((w * h) / 16000))
      );

      particles = Array.from({ length: count }, (): Particle => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.3 + 0.4,
      }));
    };

    const resize = (): void => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      w = canvas.offsetWidth;
      h = canvas.offsetHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initParticles();
    };

    const onMove = (e: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onLeave = (): void => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const draw = (): void => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;

        const dist = Math.hypot(dx, dy);
        const near = dist < 150 && dist > 0;

        if (near) {
          const force = (150 - dist) / 150;

          p.vx += (dx / dist) * force * 0.05;
          p.vy += (dy / dist) * force * 0.05;
        }

        p.x += p.vx;
        p.y += p.vy;

        p.vx *= 0.95;
        p.vy *= 0.95;

        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        ctx.fillStyle = near
          ? `rgba(${accent}, ${accentAlpha})`
          : `rgba(${idleRgb}, ${idleAlpha})`;

        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];

          const d = Math.hypot(p.x - q.x, p.y - q.y);

          if (d < 95) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);

            ctx.strokeStyle = `rgba(${accent}, ${(1 - d / 95) * lineAlpha})`;
            ctx.lineWidth = 0.5;

            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}