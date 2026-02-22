"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/animation/TextReveal";
import ScrollReveal from "@/components/animation/ScrollReveal";
import HeroPipelineGraph from "@/components/sections/HeroPipelineGraph";
import { TRUST_BADGES } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 dot-pattern">
      {/* Subtle single radial gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column: Text (7 cols) */}
          <div className="lg:col-span-7">
            {/* Top badge */}
            <ScrollReveal delay={0.1}>
              <Badge className="mb-8">
                <span className="mr-1.5 inline-block w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                Afformation &times; Sinarmas Group
              </Badge>
            </ScrollReveal>

            {/* Main headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.15] mb-6">
              <TextReveal text="K-브랜드의 인도네시아 진출," className="block mb-2" delay={0.3} />
              <span className="gradient-text block">
                <TextReveal text="처음부터 끝까지 설계합니다." delay={0.8} />
              </span>
            </h1>

            {/* Subtitle */}
            <ScrollReveal delay={1.4}>
              <p className="text-[15px] md:text-base text-text-secondary max-w-xl leading-relaxed mb-10">
                2.8억 소비자 시장. 할랄인증부터 쇼피 운영까지,
                <br className="hidden sm:block" />
                검증된 풀퍼널 파트너십.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={1.6}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button variant="primary" href="#contact">
                  무료 상담 신청
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button variant="secondary" href="#pipeline">
                  풀퍼널 서비스 보기
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </div>
            </ScrollReveal>

            {/* Trust badges row */}
            <ScrollReveal delay={1.8}>
              <div className="flex flex-wrap items-center gap-3">
                {TRUST_BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs text-text-tertiary border border-white/6 bg-white/[0.02]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald/70" />
                    {badge}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right column: SVG mini pipeline graph (5 cols) */}
          <div className="lg:col-span-5 hidden md:flex items-center justify-center">
            <ScrollReveal delay={0.6}>
              <HeroPipelineGraph />
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-text-tertiary/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-text-tertiary/50 animate-scroll" />
        </div>
        <span className="text-[11px] text-text-tertiary tracking-wider uppercase">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
