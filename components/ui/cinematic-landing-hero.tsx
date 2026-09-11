"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  /* Environment Overlays */
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image:
          linear-gradient(to right, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  /* Ambient background: slow-drifting glow blobs + rising light particles,
     so the very first frame (before any scroll) isn't just flat text on
     black. Pure CSS/GPU-friendly (transform + opacity only). */
  .ambient-layer {
      position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 1;
  }

  .ambient-glow {
      position: absolute; border-radius: 50%; filter: blur(70px); will-change: transform, opacity;
  }

  .ambient-glow-1 {
      width: 44vw; height: 44vw; max-width: 640px; max-height: 640px; top: -12%; left: -10%;
      background: radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--color-accent, #e60000) 55%, transparent), transparent 70%);
      animation: ambientDrift1 20s ease-in-out infinite;
  }

  .ambient-glow-2 {
      width: 40vw; height: 40vw; max-width: 580px; max-height: 580px; bottom: -14%; right: -8%;
      background: radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.4), transparent 70%);
      animation: ambientDrift2 24s ease-in-out infinite;
  }

  .ambient-glow-3 {
      width: 28vw; height: 28vw; max-width: 440px; max-height: 440px; top: 42%; left: 50%;
      background: radial-gradient(circle, rgba(22, 44, 109, 0.5), transparent 70%);
      animation: ambientPulse 10s ease-in-out infinite;
  }

  @keyframes ambientDrift1 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(4%, 6%) scale(1.08); }
  }

  @keyframes ambientDrift2 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-5%, -5%) scale(1.1); }
  }

  @keyframes ambientPulse {
      0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
      50% { opacity: 0.65; transform: translate(-50%, -50%) scale(1.15); }
  }

  .ambient-particle {
      position: absolute; bottom: -5%; border-radius: 50%;
      background: rgba(255, 255, 255, 0.55);
      box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.35);
      animation-name: ambientFloat; animation-timing-function: linear; animation-iteration-count: infinite;
      will-change: transform, opacity;
  }

  @keyframes ambientFloat {
      0% { transform: translateY(0) translateX(0); opacity: 0; }
      12% { opacity: 0.8; }
      88% { opacity: 0.4; }
      100% { transform: translateY(-115vh) translateX(var(--drift, 20px)); opacity: 0; }
  }

  /* -------------------------------------------------------------------
     PHYSICAL SKEUOMORPHIC MATERIALS (Restored 3D Depth)
  ---------------------------------------------------------------------- */

  /* OUTSIDE THE CARD: Theme-aware text (Shadow in Light Mode, Glow in Dark Mode) */
  .text-3d-matte {
      color: var(--color-foreground);
      text-shadow:
          0 10px 30px color-mix(in srgb, var(--color-foreground) 20%, transparent),
          0 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, var(--color-foreground) 0%, color-mix(in srgb, var(--color-foreground) 40%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0); /* Hardware acceleration to prevent WebKit clipping bug */
      filter:
          drop-shadow(0px 10px 20px color-mix(in srgb, var(--color-foreground) 15%, transparent))
          drop-shadow(0px 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent));
  }

  /* INSIDE THE CARD: Hardcoded Silver/White for the dark background, deep rich shadows */
  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8))
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  /* Deep Physical Card with Dynamic Mouse Lighting */
  .premium-depth-card {
      background: linear-gradient(145deg, #162C6D 0%, #0A101D 100%);
      box-shadow:
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.2),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.04);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  /* Realistic iPhone Mockup Hardware */
  .iphone-bezel {
      background-color: #111;
      box-shadow:
          inset 0 0 0 2px #52525B,
          inset 0 0 0 7px #000,
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7);
      transform-style: preserve-3d;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow:
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }

  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
      background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
      box-shadow:
          0 10px 20px rgba(0,0,0,0.3),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      box-shadow:
          0 0 0 1px rgba(255, 255, 255, 0.1),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  /* Physical Tactile Buttons */
  .btn-modern-light, .btn-modern-dark {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-modern-light {
      background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%);
      color: #0F172A;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active {
      transform: translateY(1px);
      background: linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1), inset 0 3px 6px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.02);
  }
  .btn-modern-dark {
      background: linear-gradient(180deg, #27272A 0%, #18181B 100%);
      color: #FFFFFF;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.6), 0 12px 24px -4px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:hover {
      transform: translateY(-3px);
      background: linear-gradient(180deg, #3F3F46 0%, #27272A 100%);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.15), 0 6px 12px -2px rgba(0,0,0,0.7), 0 20px 32px -6px rgba(0,0,0,1), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:active {
      transform: translateY(1px);
      background: #18181B;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.05), inset 0 3px 8px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(0,0,0,0.5);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`;

interface HeroBadge {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

interface HeroWidget {
  icon: React.ReactNode;
  accent: "blue" | "emerald";
}

interface HeroCta {
  label: string;
  sublabel?: string;
  href: string;
  icon?: React.ReactNode;
}

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  metricValue?: number;
  metricLabel?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  avatarInitials?: string;
  dashboardLabel?: string;
  dashboardEyebrow?: string;
  badges?: [HeroBadge, HeroBadge];
  widgets?: [HeroWidget, HeroWidget];
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
}

const DEFAULT_BADGES: [HeroBadge, HeroBadge] = [
  { icon: <span aria-hidden="true">🔥</span>, title: "1 Year Streak", subtitle: "Milestone unlocked" },
  { icon: <span aria-hidden="true">🤝</span>, title: "Sponsor Update", subtitle: "Shared successfully" },
];

const DEFAULT_WIDGETS: [HeroWidget, HeroWidget] = [
  {
    accent: "blue",
    icon: (
      <svg className="w-4 h-4 text-blue-400 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    accent: "emerald",
    icon: (
      <svg className="w-4 h-4 text-emerald-400 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const ARROW_ICON = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// Fixed (not random) so server- and client-rendered markup match exactly.
const AMBIENT_PARTICLES = [
  { left: 6, size: 3, duration: 16, delay: -2, drift: 30 },
  { left: 14, size: 5, duration: 22, delay: -9, drift: -20 },
  { left: 22, size: 2, duration: 14, delay: -4, drift: 15 },
  { left: 31, size: 4, duration: 19, delay: -12, drift: -35 },
  { left: 40, size: 3, duration: 17, delay: -1, drift: 20 },
  { left: 49, size: 6, duration: 24, delay: -15, drift: -15 },
  { left: 57, size: 2, duration: 15, delay: -7, drift: 25 },
  { left: 65, size: 4, duration: 21, delay: -10, drift: -25 },
  { left: 73, size: 3, duration: 18, delay: -3, drift: 18 },
  { left: 81, size: 5, duration: 23, delay: -18, drift: -30 },
  { left: 88, size: 2, duration: 13, delay: -6, drift: 12 },
  { left: 94, size: 4, duration: 20, delay: -13, drift: -18 },
];

// Static (non-animated) phone mockup used by the mobile hero - same visual
// as the desktop card's mockup, but with the metric already at its resolved
// value instead of being driven by the (desktop-only) pinned GSAP timeline.
function StaticPhoneMockup({
  metricValue,
  metricLabel,
  avatarInitials,
  dashboardEyebrow,
  dashboardLabel,
  widgets,
}: {
  metricValue: number;
  metricLabel: string;
  avatarInitials: string;
  dashboardEyebrow: string;
  dashboardLabel: string;
  widgets: [HeroWidget, HeroWidget];
}) {
  return (
    <div className="relative w-[240px] h-[500px] mx-auto rounded-[2.6rem] iphone-bezel flex flex-col">
      <div className="absolute top-[100px] -left-[3px] w-[3px] h-[22px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
      <div className="absolute top-[135px] -left-[3px] w-[3px] h-[38px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
      <div className="absolute top-[185px] -left-[3px] w-[3px] h-[38px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
      <div className="absolute top-[145px] -right-[3px] w-[3px] h-[60px] hardware-btn rounded-r-md z-0 scale-x-[-1]" aria-hidden="true" />

      <div className="absolute inset-[6px] bg-[#050914] rounded-[2.2rem] overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,1)] text-white z-10">
        <div className="absolute inset-0 screen-glare z-40 pointer-events-none" aria-hidden="true" />

        <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[86px] h-[24px] bg-black rounded-full z-50 flex items-center justify-end px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
        </div>

        <div className="relative w-full h-full pt-10 px-4 pb-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col">
              <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-bold mb-1">{dashboardEyebrow}</span>
              <span className="text-lg font-bold tracking-tight text-white drop-shadow-md">{dashboardLabel}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 text-neutral-200 flex items-center justify-center font-bold text-xs border border-white/10 shadow-lg shadow-black/50">{avatarInitials}</div>
          </div>

          <div className="relative w-36 h-36 mx-auto flex items-center justify-center mb-6 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
            <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
              <circle cx="72" cy="72" r="52" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
              <circle
                cx="72" cy="72" r="52" fill="none" stroke="#3B82F6" strokeWidth="10"
                strokeLinecap="round" strokeDasharray={327} strokeDashoffset={49}
                style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
              />
            </svg>
            <div className="text-center z-10 flex flex-col items-center">
              <span className="text-3xl font-extrabold tracking-tighter text-white">{metricValue}</span>
              <span className="text-[7px] text-blue-200/50 uppercase tracking-[0.1em] font-bold mt-0.5">{metricLabel}</span>
            </div>
          </div>

          <div className="space-y-2.5">
            {widgets.map((widget, i) => (
              <div key={i} className="widget-depth rounded-2xl p-2.5 flex items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center mr-2.5 border shadow-inner shrink-0",
                    widget.accent === "blue"
                      ? "bg-gradient-to-br from-blue-500/20 to-blue-600/5 border-blue-400/20"
                      : "bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 border-emerald-400/20"
                  )}
                >
                  {widget.icon}
                </div>
                <div className="flex-1">
                  <div className="h-2 w-16 bg-neutral-300 rounded-full mb-1.5 shadow-inner" />
                  <div className="h-1.5 w-10 bg-neutral-600 rounded-full shadow-inner" />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/20 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
        </div>
      </div>
    </div>
  );
}

export function CinematicHero({
  brandName = "Sobers",
  tagline1 = "Track the journey,",
  tagline2 = "not just the days.",
  cardHeading = "Accountability, redefined.",
  cardDescription = <><span className="text-white font-semibold">Sobers</span> empowers sponsors and sponsees in 12-step recovery programs with structured accountability, precise sobriety tracking, and beautiful visual timelines.</>,
  metricValue = 365,
  metricLabel = "Days Sober",
  ctaHeading = "Start your recovery.",
  ctaDescription = "Join thousands of others in the 12-step program and take control of your timeline today.",
  avatarInitials = "JS",
  dashboardLabel = "Journey",
  dashboardEyebrow = "Today",
  badges = DEFAULT_BADGES,
  widgets = DEFAULT_WIDGETS,
  primaryCta = { label: "Download on the App Store", sublabel: "Download on the", href: "#" },
  secondaryCta = { label: "Get it on Google Play", sublabel: "Get it on", href: "#" },
  className,
  ...props
}: CinematicHeroProps) {

  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  // 1. High-Performance Mouse Interaction Logic (Using requestAnimationFrame)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;

      cancelAnimationFrame(requestRef.current);

      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  },[]);

  // 2. Complex Cinematic Scroll Timeline (desktop only - see effect 3 for mobile)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    // Defensive: guards against orphaned ScrollTrigger/pin instances from a
    // prior mount surviving a dev Fast-Refresh (a known source of the pinned
    // scroll appearing "stuck" and then jumping once the stale pin releases).
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], { autoAlpha: 0 });
      gsap.set(".cta-wrapper", { autoAlpha: 0, scale: 0.8, filter: "blur(30px)" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3500",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to([".hero-text-wrapper", ".bg-grid-theme", ".ambient-layer"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
        )
        .fromTo(".phone-widget", { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
        .to(".progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(".counter-val", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
        .fromTo(".floating-badge", { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 }, { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
        .fromTo(".card-left-text", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .fromTo(".card-right-text", { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
        .to({}, { duration: 2.5 })
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .set(".cta-wrapper", { autoAlpha: 1 })
        .to({}, { duration: 1.5 })
        .to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text", ".card-right-text"], {
          scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
        })
        // Responsive card pullback sizing
        .to(".main-card", {
          width: isMobile ? "92vw" : "85vw",
          height: isMobile ? "92vh" : "85vh",
          borderRadius: isMobile ? "32px" : "40px",
          ease: "expo.inOut",
          duration: 1.8
        }, "pullback")
        .to(".cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });

    }, containerRef);

    return () => ctx.revert();
  },[metricValue]);

  // 3. Mobile: no scroll-jacking. The pinned/scrubbed sequence above is known
  // to behave poorly on phones (address-bar resize mid-scroll, touch-momentum
  // fighting the scrub), so mobile instead gets simple, normal-flow
  // scroll-into-view reveals - same content, no pin, no forced extra scroll.
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    // Defensive: same reasoning as the desktop effect above - clear any
    // ScrollTrigger instances left behind by a stale prior mount before
    // creating this instance's own.
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".m-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden md:h-screen md:flex md:items-center md:justify-center bg-background text-foreground font-sans antialiased", className)}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />

      {/* Desktop: the full pinned/scrubbed cinematic sequence (effect #2).
          display:contents keeps every child's `absolute` positioning working
          exactly as before, relative to this component's root. Hidden (and
          never mounted into layout) below md - see the mobile block after it. */}
      <div className="hidden md:contents">
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />
      <div className="ambient-layer" aria-hidden="true">
        <div className="ambient-glow ambient-glow-1" />
        <div className="ambient-glow ambient-glow-2" />
        <div className="ambient-glow ambient-glow-3" />
        {AMBIENT_PARTICLES.map((p, i) => (
          <span
            key={i}
            className="ambient-particle"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              ["--drift" as string]: `${p.drift}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* BACKGROUND LAYER: Hero Texts */}
      <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform transform-style-3d">
        <h1 className="text-track gsap-reveal text-3d-matte text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-2">
          {tagline1}
        </h1>
        <h1 className="text-days gsap-reveal text-silver-matte text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter">
          {tagline2}
        </h1>
      </div>

      {/* BACKGROUND LAYER 2: Tactile CTA Buttons */}
      <div className="cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 gsap-reveal pointer-events-auto will-change-transform">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-silver-matte">
          {ctaHeading}
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed">
          {ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href={primaryCta.href} aria-label={primaryCta.label} className="btn-modern-light flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            {primaryCta.icon ?? <span className="transition-transform group-hover:translate-x-1">{ARROW_ICON}</span>}
            <div className="text-left">
              {primaryCta.sublabel && (
                <div className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase mb-[-2px]">{primaryCta.sublabel}</div>
              )}
              <div className="text-xl font-bold leading-none tracking-tight">{primaryCta.label}</div>
            </div>
          </a>
          <a href={secondaryCta.href} aria-label={secondaryCta.label} className="btn-modern-dark flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background">
            {secondaryCta.icon ?? <span className="transition-transform group-hover:translate-x-1">{ARROW_ICON}</span>}
            <div className="text-left">
              {secondaryCta.sublabel && (
                <div className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-[-2px]">{secondaryCta.sublabel}</div>
              )}
              <div className="text-xl font-bold leading-none tracking-tight">{secondaryCta.label}</div>
            </div>
          </a>
        </div>
      </div>

      {/* FOREGROUND LAYER: The Physical Deep Blue Card */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          {/* DYNAMIC RESPONSIVE GRID: Flex-col on mobile to force order, Grid on desktop */}
          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">

            {/* 1. TOP (Mobile) / RIGHT (Desktop): BRAND NAME */}
            <div className="card-right-text gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
              <h2 className="text-5xl md:text-6xl lg:text-[3.75rem] font-black uppercase tracking-tighter text-card-silver-matte lg:mt-0 break-words text-center lg:text-right">
                {brandName}
              </h2>
            </div>

            {/* 2. MIDDLE (Mobile) / CENTER (Desktop): IPHONE MOCKUP */}
            <div className="mockup-scroll-wrapper order-2 lg:order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10" style={{ perspective: "1000px" }}>

              {/* Inner wrapper for safe CSS scaling that doesn't conflict with GSAP */}
              <div className="relative w-full h-full flex items-center justify-center transform scale-[0.65] md:scale-85 lg:scale-100">

                {/* The iPhone Bezel */}
                <div
                  ref={mockupRef}
                  className="relative w-[280px] h-[580px] rounded-[3rem] iphone-bezel flex flex-col will-change-transform transform-style-3d"
                >
                  {/* Physical Hardware Buttons */}
                  <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]" aria-hidden="true" />

                  {/* Inner Screen Container */}
                  <div className="absolute inset-[7px] bg-[#050914] rounded-[2.5rem] overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,1)] text-white z-10">
                    <div className="absolute inset-0 screen-glare z-40 pointer-events-none" aria-hidden="true" />

                    {/* Dynamic Island Notch */}
                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                    </div>

                    {/* App Interface */}
                    <div className="relative w-full h-full pt-12 px-5 pb-8 flex flex-col">
                      <div className="phone-widget flex justify-between items-center mb-8">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold mb-1">{dashboardEyebrow}</span>
                          <span className="text-xl font-bold tracking-tight text-white drop-shadow-md">{dashboardLabel}</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/5 text-neutral-200 flex items-center justify-center font-bold text-sm border border-white/10 shadow-lg shadow-black/50">{avatarInitials}</div>
                      </div>

                      <div className="phone-widget relative w-44 h-44 mx-auto flex items-center justify-center mb-8 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
                        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                          <circle cx="88" cy="88" r="64" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="12" />
                          <circle className="progress-ring" cx="88" cy="88" r="64" fill="none" stroke="#3B82F6" strokeWidth="12" />
                        </svg>
                        <div className="text-center z-10 flex flex-col items-center">
                          <span className="counter-val text-4xl font-extrabold tracking-tighter text-white">0</span>
                          <span className="text-[8px] text-blue-200/50 uppercase tracking-[0.1em] font-bold mt-0.5">{metricLabel}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {widgets.map((widget, i) => (
                          <div key={i} className="phone-widget widget-depth rounded-2xl p-3 flex items-center">
                            <div
                              className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center mr-3 border shadow-inner",
                                widget.accent === "blue"
                                  ? "bg-gradient-to-br from-blue-500/20 to-blue-600/5 border-blue-400/20"
                                  : "bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 border-emerald-400/20"
                              )}
                            >
                              {widget.icon}
                            </div>
                            <div className="flex-1">
                              <div className="h-2 w-20 bg-neutral-300 rounded-full mb-2 shadow-inner" />
                              <div className="h-1.5 w-12 bg-neutral-600 rounded-full shadow-inner" />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/20 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                    </div>
                  </div>
                </div>

                {/* Floating Glass Badges */}
                <div className="floating-badge absolute flex top-6 lg:top-12 left-[-15px] lg:left-[-80px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-blue-500/20 to-blue-900/10 flex items-center justify-center border border-blue-400/30 shadow-inner">
                    <span className="text-base lg:text-xl drop-shadow-lg">{badges[0].icon}</span>
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">{badges[0].title}</p>
                    <p className="text-blue-200/50 text-[10px] lg:text-xs font-medium">{badges[0].subtitle}</p>
                  </div>
                </div>

                <div className="floating-badge absolute flex bottom-12 lg:bottom-20 right-[-15px] lg:right-[-80px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-indigo-500/20 to-indigo-900/10 flex items-center justify-center border border-indigo-400/30 shadow-inner">
                    <span className="text-base lg:text-lg drop-shadow-lg">{badges[1].icon}</span>
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">{badges[1].title}</p>
                    <p className="text-blue-200/50 text-[10px] lg:text-xs font-medium">{badges[1].subtitle}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* 3. BOTTOM (Mobile) / LEFT (Desktop): ACCOUNTABILITY TEXT */}
            <div className="card-left-text gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full lg:max-w-none px-4 lg:px-0">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-5 tracking-tight">
                {cardHeading}
              </h3>
              {/* HIDDEN ON MOBILE (added hidden md:block) */}
              <p className="hidden md:block text-blue-100/70 text-sm md:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none">
                {cardDescription}
              </p>
            </div>

          </div>
        </div>
      </div>
      </div>
      {/* end desktop-only tree */}

      {/* Mobile: simple, normal-flow scroll reveals - no pin, no scrub. */}
      <div className="md:hidden">
        <section className="relative overflow-hidden min-h-[42vh] flex flex-col items-center justify-center px-4 py-10 text-center">
          <div className="film-grain" aria-hidden="true" />
          <div className="ambient-layer" aria-hidden="true">
            <div className="ambient-glow ambient-glow-1" />
            <div className="ambient-glow ambient-glow-2" />
            <div className="ambient-glow ambient-glow-3" />
            {AMBIENT_PARTICLES.map((p, i) => (
              <span
                key={i}
                className="ambient-particle"
                style={{
                  left: `${p.left}%`,
                  width: p.size,
                  height: p.size,
                  animationDuration: `${p.duration}s`,
                  animationDelay: `${p.delay}s`,
                  ["--drift" as string]: `${p.drift}px`,
                } as React.CSSProperties}
              />
            ))}
          </div>
          <div className="m-reveal relative z-10">
            <h1 className="text-3d-matte text-4xl font-bold tracking-tight mb-1.5">{tagline1}</h1>
            <h1 className="text-silver-matte text-4xl font-extrabold tracking-tighter">{tagline2}</h1>
          </div>
        </section>

        <section className="m-reveal premium-depth-card relative mx-4 rounded-[28px] px-5 pt-6 pb-6 overflow-hidden">
          <div className="card-sheen" aria-hidden="true" />
          <h2 className="relative text-3xl font-black uppercase tracking-tighter text-card-silver-matte text-center mb-4 break-words">
            {brandName}
          </h2>

          <div className="relative mx-auto" style={{ width: 204, height: 425 }}>
            <div className="absolute inset-0 origin-top scale-[0.85]">
              <StaticPhoneMockup
                metricValue={metricValue}
                metricLabel={metricLabel}
                avatarInitials={avatarInitials}
                dashboardEyebrow={dashboardEyebrow}
                dashboardLabel={dashboardLabel}
                widgets={widgets}
              />
            </div>

            <div className="absolute flex top-1 left-0 floating-ui-badge rounded-xl p-2 items-center gap-2 z-30 max-w-[150px]">
              <div className="w-6 h-6 rounded-full bg-gradient-to-b from-blue-500/20 to-blue-900/10 flex items-center justify-center border border-blue-400/30 shadow-inner shrink-0">
                <span className="text-xs drop-shadow-lg">{badges[0].icon}</span>
              </div>
              <div>
                <p className="text-white text-[10px] font-bold tracking-tight leading-tight">{badges[0].title}</p>
                <p className="text-blue-200/50 text-[8px] font-medium leading-tight">{badges[0].subtitle}</p>
              </div>
            </div>

            <div className="absolute flex bottom-4 right-0 floating-ui-badge rounded-xl p-2 items-center gap-2 z-30 max-w-[150px]">
              <div className="w-6 h-6 rounded-full bg-gradient-to-b from-indigo-500/20 to-indigo-900/10 flex items-center justify-center border border-indigo-400/30 shadow-inner shrink-0">
                <span className="text-xs drop-shadow-lg">{badges[1].icon}</span>
              </div>
              <div>
                <p className="text-white text-[10px] font-bold tracking-tight leading-tight">{badges[1].title}</p>
                <p className="text-blue-200/50 text-[8px] font-medium leading-tight">{badges[1].subtitle}</p>
              </div>
            </div>
          </div>

          <h3 className="relative text-white text-xl font-bold text-center mt-3 mb-2 tracking-tight">{cardHeading}</h3>
          <p className="relative text-blue-100/70 text-sm leading-relaxed text-center">{cardDescription}</p>
        </section>

        <section className="m-reveal px-4 pt-10 pb-14 text-center">
          <h2 className="text-2xl font-bold mb-3 tracking-tight text-silver-matte">{ctaHeading}</h2>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{ctaDescription}</p>
          <div className="flex flex-col gap-3">
            <a href={primaryCta.href} aria-label={primaryCta.label} className="btn-modern-light flex items-center justify-center gap-3 px-6 py-3.5 rounded-[1.25rem]">
              {primaryCta.icon ?? ARROW_ICON}
              <div className="text-left">
                {primaryCta.sublabel && (
                  <div className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase mb-[-2px]">{primaryCta.sublabel}</div>
                )}
                <div className="text-lg font-bold leading-none tracking-tight">{primaryCta.label}</div>
              </div>
            </a>
            <a href={secondaryCta.href} aria-label={secondaryCta.label} className="btn-modern-dark flex items-center justify-center gap-3 px-6 py-3.5 rounded-[1.25rem]">
              {secondaryCta.icon ?? ARROW_ICON}
              <div className="text-left">
                {secondaryCta.sublabel && (
                  <div className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-[-2px]">{secondaryCta.sublabel}</div>
                )}
                <div className="text-lg font-bold leading-none tracking-tight">{secondaryCta.label}</div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
