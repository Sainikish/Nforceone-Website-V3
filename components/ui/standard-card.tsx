"use client";
import React, { useRef, useState } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Users, Shield, Zap, LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

const Card: React.FC<CardProps> = ({ title, description, Icon, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = (): void => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative bg-white p-8 md:p-9 rounded-4xl md:rounded-[2.5rem] flex flex-col h-64 md:h-72 w-[calc(100vw-48px)] md:w-95 transition-all duration-500 group"
    >
      <div style={{ transform: "translateZ(50px)" }} className="flex flex-col h-full">
        <div className="mb-5 md:mb-6 w-14 h-14 md:w-16 md:h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-black group-hover:bg-[#e60000] group-hover:text-white transition-all duration-500 ease-out shadow-sm group-hover:shadow-xl">
          <Icon size={28} strokeWidth={1.2} className="md:w-8 md:h-8" />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 md:mb-4 tracking-tight">
          {title}
        </h3>

        <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light line-clamp-3 md:line-clamp-none">
          {description}
        </p>
      </div>

      <div className="absolute inset-0 rounded-4xl md:rounded-[2.5rem] bg-black/5 -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-8 scale-95" />
    </motion.div>
  );
};

interface CardData {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const CARDS: CardData[] = [
  {
    title: "Client-Centered, Engineer-Led",
    description: "Senior engineers work directly with your team, not through a ticket queue.",
    Icon: Users,
  },
  {
    title: "Battle-Tested Architecture",
    description: "Proven engineering patterns and resilient architectures tailored for enterprise scale.",
    Icon: Shield,
  },
  {
    title: "Outcome-Focused Delivery",
    description: "Every engagement is measured against the business results it was meant to produce.",
    Icon: Zap,
  },
];

export function StandardCards(): React.ReactElement {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="bg-white py-6 md:py-8 px-4 md:px-8">
      <div
        ref={sectionRef}
        onMouseMove={handleSectionMouseMove}
        className="max-w-[1300px] mx-auto rounded-[2rem] md:rounded-[2.5rem] bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black flex flex-col items-center justify-center overflow-hidden relative py-8 md:py-10"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden md:block"
          style={{
            background: `radial-gradient(circle 600px at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.06), transparent 80%)`,
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
          aria-hidden="true"
        />

        <main className="flex flex-col items-center justify-center w-full px-4 md:px-6 relative z-20">
          <header className="text-center mb-5 md:mb-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-5 md:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e60000] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">The Difference</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-5 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                The NForceOne Standard.
              </h2>
              <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed px-4">
                We don&apos;t follow trends; we set the benchmark for engineering rigor and delivery speed.
              </p>
            </motion.div>
          </header>

          <div className="relative w-full max-w-[1200px] mx-auto">
            <div
              className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 pt-4 px-4 md:px-6 scroll-smooth justify-center"
              style={{ perspective: "2000px" }}
            >
              {CARDS.map((card, idx) => (
                <div key={card.title} className="snap-center shrink-0">
                  <Card {...card} index={idx} />
                </div>
              ))}
            </div>
          </div>
        </main>

        <style
          dangerouslySetInnerHTML={{
            __html: `.no-scrollbar::-webkit-scrollbar { display: none; }`,
          }}
        />
      </div>
    </div>
  );
}

export default StandardCards;
