"use client";

import { Building2, Megaphone, ShoppingCart, TrendingUp } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/animation/TextReveal";
import ScrollReveal from "@/components/animation/ScrollReveal";
import HeroPipelineGraph from "@/components/sections/HeroPipelineGraph";
import { TRUST_BADGES } from "@/lib/constants";

const mobilePipelinePhases = [
  { label: "시장진입", Icon: Building2, color: "indigo", services: ["법인설립", "할랄인증", "수입허가"] },
  { label: "마케팅", Icon: Megaphone, color: "cyan", services: ["인플루언서", "콘텐츠 제작", "SNS 운영"] },
  { label: "세일즈", Icon: ShoppingCart, color: "emerald", services: ["쇼피 입점", "틱톡샵", "오프라인 유통"] },
  { label: "운영", Icon: TrendingUp, color: "amber", services: ["CS 관리", "물류", "성과 분석"] },
];

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

            {/* Mobile pipeline (vertical compact flow) */}
            <ScrollReveal delay={1.8}>
              <div className="md:hidden mb-10">
                <div className="relative pl-5">
                  {/* Vertical connecting line */}
                  <div className="absolute left-[13px] top-3 bottom-3 w-px bg-gradient-to-b from-indigo-500/40 via-cyan-500/40 via-emerald-500/40 to-amber-500/40" />

                  <div className="space-y-3">
                    {mobilePipelinePhases.map((phase) => {
                      const colorMap: Record<string, string> = {
                        indigo: "border-indigo-500/25 bg-indigo-500/[0.04]",
                        cyan: "border-cyan-500/25 bg-cyan-500/[0.04]",
                        emerald: "border-emerald-500/25 bg-emerald-500/[0.04]",
                        amber: "border-amber-500/25 bg-amber-500/[0.04]",
                      };
                      const iconColorMap: Record<string, string> = {
                        indigo: "text-indigo-400",
                        cyan: "text-cyan-400",
                        emerald: "text-emerald-400",
                        amber: "text-amber-400",
                      };
                      const dotColorMap: Record<string, string> = {
                        indigo: "bg-indigo-500",
                        cyan: "bg-cyan-500",
                        emerald: "bg-emerald-500",
                        amber: "bg-amber-500",
                      };
                      return (
                        <div key={phase.label} className="relative flex items-start gap-3">
                          {/* Dot on the line */}
                          <div className={`absolute -left-5 top-3 w-2.5 h-2.5 rounded-full ${dotColorMap[phase.color]} ring-2 ring-[#0a0f1e]`} />
                          {/* Card */}
                          <div className={`flex-1 rounded-lg border ${colorMap[phase.color]} px-3 py-2.5`}>
                            <div className="flex items-center gap-2 mb-1">
                              <phase.Icon size={14} strokeWidth={1.5} className={iconColorMap[phase.color]} />
                              <span className="text-sm font-semibold text-text-primary">{phase.label}</span>
                            </div>
                            <p className="text-xs text-text-tertiary">{phase.services.join(" · ")}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Trust badges row */}
            <ScrollReveal delay={2.0}>
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
