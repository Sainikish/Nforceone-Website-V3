"use client";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export function AboutBento() {
  return (
    <section className="bg-[#ffffff] py-20 px-6 sm:px-8 border-t border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest text-[#e60000] uppercase mb-2">
            Enterprise Scale & Delivery
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
            About Our Impact
          </h2>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            We help enterprises accelerate release velocity, eliminate defects, and scale with senior US and India engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1: Large 2x2 Feature */}
          <Card className="md:col-span-2 md:row-span-2 bg-[#ffffff] rounded-2xl p-8 sm:p-12 flex flex-col justify-between border border-zinc-200/90 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <svg
              width="377"
              height="368"
              className="w-105 fill-zinc-100/70 absolute -bottom-16 group-hover:rotate-180 duration-2000 ease-in -right-16 pointer-events-none"
              viewBox="0 0 377 368"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M179.692 5.79814C182.635 -1.93287 193.572 -1.93285 196.515 5.79816L229.505 92.466C231.206 96.9342 236.103 99.2928 240.657 97.8366L328.986 69.5929C336.865 67.0735 343.684 75.6242 339.474 82.7452L292.284 162.574C289.851 166.69 291.061 171.99 295.038 174.642L372.192 226.091C379.075 230.68 376.641 241.343 368.449 242.491L276.613 255.369C271.878 256.033 268.489 260.283 268.895 265.047L276.776 357.445C277.479 365.688 267.625 370.433 261.619 364.744L194.293 300.973C190.821 297.686 185.386 297.686 181.914 300.973L114.588 364.744C108.582 370.433 98.7281 365.688 99.4311 357.445L107.312 265.047C107.718 260.283 104.329 256.033 99.5941 255.369L7.7582 242.491C-0.433812 241.343 -2.86746 230.68 4.01488 226.091L81.1687 174.642C85.1465 171.99 86.3561 166.69 83.9231 162.574L36.7325 82.7452C32.523 75.6242 39.342 67.0735 47.2212 69.5929L135.55 97.8366C140.104 99.2928 145.001 96.9342 146.702 92.4659L179.692 5.79814Z" />
            </svg>
            <div className="space-y-6 relative z-10">
              <div className="inline-flex px-4 py-2 rounded-full bg-[#e60000] text-white text-[11px] font-black uppercase tracking-widest shadow-sm">
                US + India Delivery
              </div>
              <h3 className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tighter leading-tight">
                IMPACT WITHOUT
                <br />
                BOUNDARIES.
              </h3>
            </div>
            <div className="mt-12 relative z-10">
              <p className="text-lg text-zinc-600 leading-relaxed max-w-sm">
                Over 20 years of quality engineering leadership, deploying autonomous AI agents and senior embedded teams across mission-critical enterprise systems.
              </p>
            </div>
          </Card>

          {/* Card 2: Growth Metric */}
          <Card className="bg-gradient-to-br from-[#c4272b] to-[#800f12] rounded-2xl p-8 sm:p-10 text-white flex flex-col border-none justify-between shadow-md">
            <span className="text-xs font-black uppercase tracking-widest opacity-90">
              Release Velocity
            </span>
            <div className="space-y-2">
              <span className="text-5xl sm:text-6xl font-black tracking-tighter">450%</span>
              <p className="text-xs text-white/80 font-medium">Regression Cycle Acceleration</p>
              <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              </div>
            </div>
          </Card>

          {/* Card 3: Platform Highlight */}
          <Card className="bg-zinc-950 rounded-2xl p-8 sm:p-10 text-white flex flex-col justify-center gap-4 border border-zinc-800 shadow-md">
            <div className="size-10 rounded-lg bg-[#e60000] flex items-center justify-center text-white font-bold text-sm shadow-sm">
              <div className="size-3.5 bg-white rounded-full" />
            </div>
            <h4 className="text-xl font-bold leading-tight text-white">QForce AI</h4>
            <p className="text-xs text-zinc-400 font-mono tracking-wide">Autonomous QA Engine · V4</p>
          </Card>

          {/* Card 4: Action/Community Banner */}
          <Link
            href="/contact"
            className="md:col-span-2 block group"
          >
            <Card className="rounded-2xl p-6 sm:p-8 border border-zinc-200 flex flex-row items-center justify-between cursor-pointer bg-zinc-900 group-hover:bg-zinc-950 group-hover:border-[#e60000]/60 transition-all duration-300 shadow-sm overflow-hidden">
              <div className="space-y-1.5 relative z-10 transition-colors text-white pr-4">
                <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">
                  Partner with NForceOne
                </h4>
                <p className="text-sm sm:text-base text-zinc-300">
                  Connect with 100+ senior engineers ready to accelerate your delivery.
                </p>
              </div>
              <div className="size-14 sm:size-16 rounded-full shrink-0 flex items-center justify-center text-2xl sm:text-3xl bg-[#e60000] text-white group-hover:bg-[#cc0000] group-hover:scale-105 transition-all duration-300 relative z-10 shadow-md">
                →
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutBento;
