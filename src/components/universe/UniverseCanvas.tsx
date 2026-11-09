"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  phase: number;
  depth: number;
};

export default function UniverseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerFine = window.matchMedia("(pointer: fine)");
    const particles: Particle[] = [];
    const pointer = { x: -1000, y: -1000, active: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let animationId = 0;
    let lastTime = 0;
    let visible = true;
    let dpr = 1;

    const random = (min: number, max: number) => min + Math.random() * (max - min);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 1.65);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.min(105, Math.max(42, Math.round((width * height) / 10500)));
      while (particles.length < target) {
        particles.push({
          x: random(0, width),
          y: random(0, height),
          vx: random(-0.12, 0.12),
          vy: random(-0.10, 0.10),
          radius: random(0.45, 1.55),
          alpha: random(0.22, 0.78),
          phase: random(0, Math.PI * 2),
          depth: random(0.35, 1),
        });
      }
      particles.length = target;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!pointerFine.matches) return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const draw = (time: number) => {
      if (!visible) return;
      const delta = Math.min((time - (lastTime || time)) / 16.67, 2);
      lastTime = time;
      frame += delta;
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!reducedMotion.matches) {
          p.x += p.vx * delta * p.depth;
          p.y += p.vy * delta * p.depth;
          if (p.x < -8) p.x = width + 8;
          if (p.x > width + 8) p.x = -8;
          if (p.y < -8) p.y = height + 8;
          if (p.y > height + 8) p.y = -8;
        }

        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 125 && distance > 0) {
            const force = (1 - distance / 125) * 0.16;
            p.x += (dx / distance) * force;
            p.y += (dy / distance) * force;
          }
        }

        const twinkle = reducedMotion.matches ? 1 : 0.78 + Math.sin(frame * 0.018 + p.phase) * 0.22;
        const alpha = p.alpha * twinkle;
        context.beginPath();
        context.fillStyle = p.depth > 0.72
          ? `rgba(224, 199, 143, ${alpha})`
          : `rgba(169, 190, 215, ${alpha * 0.72})`;
        context.arc(p.x, p.y, p.radius * (0.8 + p.depth * 0.35), 0, Math.PI * 2);
        context.fill();

        if (p.radius > 1.25 && alpha > 0.5) {
          context.beginPath();
          context.fillStyle = `rgba(224, 199, 143, ${alpha * 0.12})`;
          context.arc(p.x, p.y, p.radius * 4.5, 0, Math.PI * 2);
          context.fill();
        }

        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 112) {
            const opacity = (1 - distance / 112) * 0.105;
            context.beginPath();
            context.strokeStyle = `rgba(199, 164, 93, ${opacity})`;
            context.lineWidth = 0.65;
            context.moveTo(p.x, p.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      }

      if (!reducedMotion.matches) animationId = window.requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      visible = document.visibilityState === "visible";
      if (visible && !reducedMotion.matches) {
        lastTime = 0;
        animationId = window.requestAnimationFrame(draw);
      } else {
        window.cancelAnimationFrame(animationId);
      }
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    if (reducedMotion.matches) draw(0);
    else animationId = window.requestAnimationFrame(draw);

    const onMotionPreference = () => {
      window.cancelAnimationFrame(animationId);
      lastTime = 0;
      if (reducedMotion.matches) draw(0);
      else if (visible) animationId = window.requestAnimationFrame(draw);
    };
    reducedMotion.addEventListener("change", onMotionPreference);

    return () => {
      window.cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMotion.removeEventListener("change", onMotionPreference);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}
