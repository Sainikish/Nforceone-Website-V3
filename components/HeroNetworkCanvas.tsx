"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import styles from "./HeroNetworkCanvas.module.css";

export type CanvasVariant = "sphere" | "grid" | "orbit";

interface Point {
  sx: number;
  sy: number;
  z: number;
  accent: boolean;
}

const CURSOR_DISTANCE = 170;

function drawCursorReach(
  ctx: CanvasRenderingContext2D,
  points: Point[],
  mouse: { x: number; y: number }
) {
  for (const p of points) {
    const dx = p.sx - mouse.x;
    const dy = p.sy - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < CURSOR_DISTANCE) {
      ctx.strokeStyle = `rgba(230, 0, 0, ${(1 - dist / CURSOR_DISTANCE) * 0.55})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(p.sx, p.sy);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
  }
}

function drawNode(ctx: CanvasRenderingContext2D, p: Point) {
  const depth = (p.z + 1) / 2;
  const size = p.accent ? 2.6 : 1.3 + depth * 0.9;
  ctx.beginPath();
  ctx.fillStyle = p.accent
    ? `rgba(230, 0, 0, ${0.55 + depth * 0.4})`
    : `rgba(255, 255, 255, ${0.25 + depth * 0.45})`;
  ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
  ctx.fill();
}

export default function HeroNetworkCanvas({ variant = "sphere" }: { variant?: CanvasVariant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };

    let width = 0;
    let height = 0;
    let cx = 0;
    let cy = 0;
    let radius = 0;
    let angle = 0;
    let time = 0;
    let rafId = 0;

    function resize() {
      const rect = parent!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      cx = width / 2;
      cy = height / 2;
      radius = Math.min(width, height) * 0.42;
    }

    // ---- Sphere: rotating Fibonacci-sphere wireframe ----
    const sphereBase = (() => {
      const count = 90;
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      const pts: { x: number; y: number; z: number; accent: boolean }[] = [];
      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = goldenAngle * i;
        pts.push({
          x: Math.cos(theta) * radiusAtY,
          y,
          z: Math.sin(theta) * radiusAtY,
          accent: i % 13 === 0,
        });
      }
      return pts;
    })();

    function drawSphere() {
      const tilt = 0.35;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);

      const projected: Point[] = sphereBase
        .map((p) => {
          const x = p.x * cosA + p.z * sinA;
          const zRot = -p.x * sinA + p.z * cosA;
          const y = p.y * cosT - zRot * sinT;
          const z = p.y * sinT + zRot * cosT;
          return { sx: cx + x * radius, sy: cy + y * radius, z, accent: p.accent };
        })
        .filter((p) => p.z > -0.15);

      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dist = Math.hypot(a.sx - b.sx, a.sy - b.sy);
          if (dist < radius * 0.42) {
            const depth = (a.z + b.z) / 2;
            ctx!.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, 0.04 + depth * 0.16)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.sx, a.sy);
            ctx!.lineTo(b.sx, b.sy);
            ctx!.stroke();
          }
        }
      }

      return projected;
    }

    // ---- Grid: flat rotating circuit lattice ----
    const gridBase = (() => {
      const span = 12;
      const pts: { x: number; y: number; accent: boolean }[] = [];
      let i = 0;
      for (let gx = -span; gx <= span; gx++) {
        for (let gy = -span; gy <= span; gy++) {
          const x = gx / span;
          const y = gy / span;
          if (Math.hypot(x, y) <= 1) {
            pts.push({ x, y, accent: i % 17 === 0 });
            i++;
          }
        }
      }
      return pts;
    })();
    const gridSpacing = 1 / 12;

    function drawGrid() {
      const cosA = Math.cos(angle * 0.5);
      const sinA = Math.sin(angle * 0.5);

      const projected: Point[] = gridBase.map((p) => {
        const x = p.x * cosA - p.y * sinA;
        const y = p.x * sinA + p.y * cosA;
        return { sx: cx + x * radius, sy: cy + y * radius, z: 0, accent: p.accent };
      });

      const threshold = gridSpacing * radius * 1.5;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dist = Math.hypot(a.sx - b.sx, a.sy - b.sy);
          if (dist < threshold) {
            const pulse = 0.05 + 0.05 * Math.sin(time * 1.6 + i * 0.3);
            ctx!.strokeStyle = `rgba(255, 255, 255, ${Math.max(0.02, pulse)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.sx, a.sy);
            ctx!.lineTo(b.sx, b.sy);
            ctx!.stroke();
          }
        }
      }

      return projected;
    }

    // ---- Orbit: concentric rotating rings ----
    const rings = [
      { count: 6, fraction: 0.32, speed: 0.011 },
      { count: 9, fraction: 0.52, speed: 0.007 },
      { count: 12, fraction: 0.74, speed: 0.0045 },
      { count: 16, fraction: 0.98, speed: 0.0027 },
    ];
    const ringAngles = rings.map(() => 0);

    function drawOrbit() {
      for (const ring of rings) {
        ctx!.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.arc(cx, cy, radius * ring.fraction, 0, Math.PI * 2);
        ctx!.stroke();
      }

      const projected: Point[] = [];
      const leads: Point[] = [];

      rings.forEach((ring, ringIndex) => {
        ringAngles[ringIndex] += ring.speed;
        for (let i = 0; i < ring.count; i++) {
          const theta = ringAngles[ringIndex] + (i / ring.count) * Math.PI * 2;
          const sx = cx + Math.cos(theta) * radius * ring.fraction;
          const sy = cy + Math.sin(theta) * radius * ring.fraction;
          const point: Point = { sx, sy, z: 0, accent: i === 0 };
          projected.push(point);
          if (i === 0) leads.push(point);
        }
      });

      for (let i = 0; i < leads.length - 1; i++) {
        ctx!.strokeStyle = "rgba(255, 255, 255, 0.12)";
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.moveTo(leads[i].sx, leads[i].sy);
        ctx!.lineTo(leads[i + 1].sx, leads[i + 1].sy);
        ctx!.stroke();
      }

      return projected;
    }

    function draw(animate: boolean) {
      ctx!.clearRect(0, 0, width, height);

      let points: Point[];
      if (variant === "grid") points = drawGrid();
      else if (variant === "orbit") points = drawOrbit();
      else points = drawSphere();

      if (animate) drawCursorReach(ctx!, points, mouse);
      for (const p of points) drawNode(ctx!, p);
    }

    function loop() {
      angle += variant === "sphere" ? 0.0022 : 0.0016;
      time += 1 / 60;
      draw(true);
      rafId = requestAnimationFrame(loop);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function handleResize() {
      resize();
      draw(false);
    }

    resize();

    if (shouldReduceMotion) {
      draw(false);
    } else {
      loop();
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [shouldReduceMotion, variant]);

  return <canvas ref={canvasRef} aria-hidden="true" className={styles.canvas} />;
}
