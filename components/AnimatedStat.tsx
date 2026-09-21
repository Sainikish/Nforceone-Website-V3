"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

function AnimatedNumber({
  target,
  duration = 1600,
  delay = 0,
  inView,
}: {
  target: number;
  duration?: number;
  delay?: number;
  inView: boolean;
}) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;

    if (shouldReduceMotion) {
      setValue(target);
      return;
    }

    let raf: number;
    function step(timestamp: number) {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;

      if (elapsed < delay) {
        setValue(0);
        raf = requestAnimationFrame(step);
        return;
      }

      const activeElapsed = elapsed - delay;
      const progress = Math.min(activeElapsed / duration, 1);
      // Smooth cubic out easing for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, delay, shouldReduceMotion]);

  return <>{value}</>;
}

export default function AnimatedStat({
  value,
  duration = 1600,
  delay = 0,
}: {
  value: string;
  duration?: number;
  delay?: number;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const parts = value.split(/(\d+)/g).filter((part) => part !== "");

  return (
    <span ref={containerRef} aria-label={value} style={{ display: "inline-block" }}>
      {parts.map((part, i) =>
        /^\d+$/.test(part) ? (
          <AnimatedNumber
            key={i}
            target={parseInt(part, 10)}
            duration={duration}
            delay={delay}
            inView={inView}
          />
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}
