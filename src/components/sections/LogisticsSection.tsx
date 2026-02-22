"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const detailCards = [
  {
    number: "01",
    title: "국제 물류 & 통관",
    items: [
      "해상/항공 운송",
      "HS 코드 분류 & 관세율 최적화",
      "통관 서류 대행",
      "보세창고 활용",
    ],
  },
  {
    number: "02",
    title: "온라인 풀필먼트 (B2C)",
    items: [
      "자카르타/반둥 풀필먼트 센터",
      "48시간 출고 SLA",
      "쇼피/틱톡샵 API 연동",
      "J&T/SiCepat 배송",
    ],
  },
  {
    number: "03",
    title: "오프라인 유통 (B2B)",
    items: [
      "Ranch Market, Kem Chicks",
      "Indomaret (21,000+)",
      "Guardian, Watsons",
    ],
  },
  {
    number: "04",
    title: "재고 관리 & 리포팅",
    items: [
      "실시간 재고 모니터링",
      "리오더 자동 알림",
      "월간 리포트",
    ],
  },
];

const flowNodes = [
  { label: "한국 공장/브랜드", icon: "🏭" },
  { label: "국제 운송", icon: "🚢" },
  { label: "자카르타 물류센터", icon: "🏗️" },
];

const branchNodes = [
  { label: "온라인 풀필먼트", icon: "📦" },
  { label: "오프라인 유통", icon: "🏪" },
  { label: "리테일 입점", icon: "🛍️" },
];

export default function LogisticsSection() {
  return (
    <section id="logistics" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-indigo grid-pattern">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-gradient-radial-indigo opacity-15 blur-3xl"
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-14 h-14 rounded-full border border-brand-indigo/8 animate-float-slow" />
        <div className="absolute bottom-[18%] right-[6%] w-10 h-10 rotate-45 border border-brand-purple/8 animate-float-reverse" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 1 · 시장진입 준비"
            title="온/오프라인 물류 인프라 구축"
            subtitle="한국에서 인도네시아 고객 손까지, 완벽한 물류 체인"
            icon="📦"
            align="center"
          />
        </ScrollReveal>

        {/* ── Logistics Flow Diagram ──────────────────────────── */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16">
            {/* Top flow: horizontal on md+, vertical on mobile */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
              {flowNodes.map((node, idx) => (
                <div key={node.label} className="flex flex-col md:flex-row items-center gap-3 md:gap-0">
                  <GlowCard
                    variant="indigo"
                    hover={false}
                    className="!p-4 text-center min-w-[160px]"
                  >
                    <span className="text-2xl block mb-1">{node.icon}</span>
                    <p className="text-sm font-semibold text-text-primary whitespace-nowrap">
                      {node.label}
                    </p>
                  </GlowCard>
                  {idx < flowNodes.length - 1 && (
                    <>
                      {/* Desktop arrow */}
                      <span className="hidden md:block text-brand-indigo/60 font-mono text-lg px-3 tracking-widest">
                        ───→
                      </span>
                      {/* Mobile arrow */}
                      <span className="md:hidden text-brand-indigo/60 font-mono text-lg tracking-widest">
                        ↓
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Branching connector */}
            <div className="flex justify-center my-6">
              <div className="border-l-2 border-dashed border-brand-indigo/30 h-10" />
            </div>

            {/* Branch nodes */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {branchNodes.map((node, idx) => (
                <div key={node.label} className="flex items-center gap-4">
                  <GlowCard
                    variant="indigo"
                    hover={false}
                    className="!p-3 text-center min-w-[140px]"
                  >
                    <span className="text-xl block mb-1">{node.icon}</span>
                    <p className="text-xs font-semibold text-text-primary whitespace-nowrap">
                      {node.label}
                    </p>
                  </GlowCard>
                  {idx < branchNodes.length - 1 && (
                    <span className="hidden sm:block text-brand-indigo/30 text-lg">
                      |
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── 2x2 Detail Cards ────────────────────────────────── */}
        <div className="mt-14">
          <StaggerChildren
            staggerDelay={0.12}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {detailCards.map((card) => (
              <GlowCard key={card.title} variant="indigo" accentBar className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-black text-brand-indigo bg-brand-indigo/15 border border-brand-indigo/30 w-8 h-8 rounded-lg flex items-center justify-center font-mono shadow-sm shadow-brand-indigo/10">
                    {card.number}
                  </span>
                  <h4 className="text-lg font-bold text-text-primary">
                    {card.title}
                  </h4>
                </div>
                <ul className="space-y-1.5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-text-secondary flex items-start gap-2"
                    >
                      <span className="text-brand-indigo/60 mt-0.5 flex-shrink-0">
                        ›
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
