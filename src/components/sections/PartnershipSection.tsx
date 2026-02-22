"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import DiamondConnector from "@/components/ui/DiamondConnector";
import NodeConnector from "@/components/ui/NodeConnector";
import ScrollReveal from "@/components/animation/ScrollReveal";

const afformationBullets = [
  "2021년 창립, 마케팅 기술 혁신",
  "누적 100억+ 병원 매출 기여 실적",
  "AI 기반 인플루언서 발굴 솔루션 (ScoutManager)",
  "대만·일본·영미권 해외 마케팅 운영 경험",
  "LLM 기반 풀퍼널 마케팅 자동화 기술 보유",
  "다국어 콘텐츠 제작 & 현지화 전문",
];

const sinarmasBullets = [
  "1970년 설립, 50년+ 역사",
  "7대 사업 부문 운영 (펄프&제지, 금융, 부동산, 식품, 통신, 에너지, 헬스케어)",
  "수십만 명 직접/간접 고용",
  "인도네시아 GDP 기여 핵심 기업군",
];

export default function PartnershipSection() {
  return (
    <section id="partnership" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-slightly-lighter">
      {/* Floating geometric decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[5%] w-20 h-20 rounded-full border border-brand-indigo/10 animate-float-slow" />
        <div className="absolute bottom-[20%] right-[8%] w-16 h-16 rotate-45 border border-brand-amber/10 animate-float-reverse" />
        <div className="absolute top-[60%] left-[85%] w-3 h-3 rounded-full bg-brand-indigo/20 animate-pulse-glow" />
        <div className="absolute top-[30%] right-[90%] w-2 h-2 rounded-full bg-brand-amber/20 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="최강의 조합"
            title="Afformation &times; Sinarmas Group"
            subtitle="K브랜드 전문 마케팅 테크 &times; 인도네시아 최대 인프라"
            align="center"
          />
        </ScrollReveal>

        {/* ── Two-column layout with center connector ─────────── */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-center">
          {/* Left card – Afformation */}
          <ScrollReveal direction="left" delay={0.2}>
            <GlowCard variant="indigo" animated className="h-full">
              <h3 className="text-2xl font-bold gradient-text mb-1">
                Afformation
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                마케팅 테크 전문 기업
              </p>

              <div className="h-px bg-dark-border mb-5" />

              <ul className="space-y-3 mb-6">
                {afformationBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                  >
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-indigo" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-lg bg-dark-surface/60 border border-dark-border/50 px-4 py-3">
                <p className="text-xs text-text-tertiary">
                  <span className="text-brand-indigo font-semibold">핵심 역량:</span>{" "}
                  마케팅 전략 / AI 자동화 / 글로벌 운영
                </p>
              </div>
            </GlowCard>
          </ScrollReveal>

          {/* Center connector */}
          <ScrollReveal delay={0.4} className="flex flex-col lg:flex-row items-center justify-center gap-2 py-6 lg:py-0 lg:px-4">
            {/* Mobile: vertical layout */}
            <div className="flex lg:hidden flex-col items-center gap-2">
              <NodeConnector variant="dashed" color="indigo" vertical className="!h-[40px]" />
              <DiamondConnector color="indigo" size="sm" animated />
              <div className="w-12 h-12 rounded-full bg-brand-indigo/20 border border-brand-indigo/40 flex items-center justify-center shadow-lg shadow-brand-indigo/20">
                <span className="text-xl font-black text-brand-indigo">&times;</span>
              </div>
              <DiamondConnector color="amber" size="sm" animated />
              <NodeConnector variant="dashed" color="amber" vertical className="!h-[40px]" />
            </div>

            {/* Desktop: horizontal layout */}
            <div className="hidden lg:flex items-center gap-2">
              <NodeConnector variant="dashed" color="indigo" vertical={false} />
              <DiamondConnector color="indigo" size="sm" animated />
              <div className="w-12 h-12 rounded-full bg-brand-indigo/20 border border-brand-indigo/40 flex items-center justify-center shadow-lg shadow-brand-indigo/20">
                <span className="text-xl font-black text-brand-indigo">&times;</span>
              </div>
              <DiamondConnector color="amber" size="sm" animated />
              <NodeConnector variant="dashed" color="amber" vertical={false} />
            </div>
          </ScrollReveal>

          {/* Right card – Sinarmas Group */}
          <ScrollReveal direction="right" delay={0.2}>
            <GlowCard variant="amber" animated className="h-full">
              <h3 className="text-2xl font-bold gradient-text-amber mb-1">
                Sinarmas Group
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                인도네시아 최대 재벌 그룹
              </p>

              <div className="h-px bg-dark-border mb-5" />

              <ul className="space-y-3 mb-6">
                {sinarmasBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                  >
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-amber" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-lg bg-dark-surface/60 border border-dark-border/50 px-4 py-3">
                <p className="text-xs text-text-tertiary">
                  <span className="text-brand-amber font-semibold">핵심 역량:</span>{" "}
                  인도네시아 유통망 / 정부 네트워크 / 현지 인프라
                </p>
              </div>
            </GlowCard>
          </ScrollReveal>
        </div>

        {/* ── Bottom banner ───────────────────────────────────── */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16">
            <GlowCard variant="purple" animated className="text-center py-8 px-6">
              <p className="text-base md:text-lg font-medium text-text-secondary leading-relaxed">
                <span className="gradient-text font-bold">K브랜드 전문 마케팅 테크</span>
                {" "}&times;{" "}
                <span className="gradient-text-amber font-bold">인도네시아 최대 인프라</span>
                <br className="hidden sm:block" />
                <span className="mt-2 block text-text-primary">
                  = 당신의 브랜드를 위한 최강 진출 파트너십
                </span>
              </p>
            </GlowCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
