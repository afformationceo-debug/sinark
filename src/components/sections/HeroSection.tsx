"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/animation/TextReveal";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { TRUST_BADGES } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* ── Background radial gradient blob ─────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial-indigo opacity-30 blur-3xl"
      />

      {/* ── Ambient particles ───────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute top-[12%] left-[8%] w-1 h-1 rounded-full bg-brand-indigo/60 animate-pulse-glow" />
        <span className="absolute top-[28%] left-[72%] w-1.5 h-1.5 rounded-full bg-brand-cyan/50 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
        <span className="absolute top-[55%] left-[18%] w-1 h-1 rounded-full bg-brand-emerald/40 animate-pulse-glow" style={{ animationDelay: "1.2s" }} />
        <span className="absolute top-[70%] left-[85%] w-1.5 h-1.5 rounded-full bg-brand-amber/50 animate-pulse-glow" style={{ animationDelay: "0.8s" }} />
        <span className="absolute top-[40%] left-[90%] w-1 h-1 rounded-full bg-brand-indigo/40 animate-pulse-glow" style={{ animationDelay: "1.6s" }} />
        <span className="absolute top-[80%] left-[35%] w-1 h-1 rounded-full bg-brand-cyan/30 animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <span className="absolute top-[15%] left-[50%] w-0.5 h-0.5 rounded-full bg-brand-purple/50 animate-pulse-glow" style={{ animationDelay: "0.3s" }} />
        <span className="absolute top-[65%] left-[60%] w-1 h-1 rounded-full bg-brand-emerald/50 animate-pulse-glow" style={{ animationDelay: "1.8s" }} />
      </div>

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Top badge */}
        <ScrollReveal delay={0.1}>
          <Badge className="mb-8">
            <span className="mr-1.5 inline-block w-2 h-2 rounded-full bg-brand-indigo animate-pulse-glow" />
            Afformation &times; Sinarmas Group
          </Badge>
        </ScrollReveal>

        {/* Main headline */}
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          <TextReveal text="인도네시아 2.8억 시장," className="block mb-2" delay={0.3} />
          <span className="gradient-text block">
            <TextReveal text="당신의 브랜드로 지배하라" delay={0.8} />
          </span>
        </h1>

        {/* Subtitle */}
        <ScrollReveal delay={1.4}>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
            계약부터 할랄인증, 물류, 마케팅, 쇼피·틱톡샵, CS까지
            <br className="hidden sm:block" />
            원스톱 풀퍼널로 K브랜드의 인도네시아 시장 진출을 완성합니다.
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={1.6}>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary" href="#contact">
              무료 상담 신청
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button variant="secondary" href="#pipeline">
              풀퍼널 서비스 보기
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>
        </ScrollReveal>

        {/* Trust badges row */}
        <ScrollReveal delay={1.8}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs text-text-tertiary border border-dark-border/50 bg-dark-surface/50"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald/70" />
                {badge}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-text-tertiary/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-text-tertiary/60 animate-scroll" />
        </div>
        <span className="text-xs text-text-tertiary tracking-wider uppercase">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
