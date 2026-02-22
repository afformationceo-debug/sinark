"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import DiamondConnector from "@/components/ui/DiamondConnector";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const stats = [
  { value: "$187억", label: "GMV" },
  { value: "36%", label: "시장 점유율" },
  { value: "1.5억+", label: "월 활성 사용자" },
];

const processSteps = [
  "스토어 셋업",
  "상품 최적화",
  "광고 운영",
  "성과 관리",
];

const detailCards = [
  {
    title: "스토어 셋업",
    items: [
      "Shopee Seller Center 계정 생성",
      "스토어 프로필 디자인",
      "카테고리 전략 수립 & 상품 등록",
      "Shopee Mall 공식 브랜드관 입점 지원",
    ],
  },
  {
    title: "상품 최적화",
    items: [
      "인도네시아어 상품명/설명 SEO 최적화",
      "상품 이미지 현지화",
      "리뷰 관리 전략 (초기 리뷰 확보)",
      "A/B 테스트 (썸네일, 가격, 번들링)",
    ],
  },
  {
    title: "광고 운영",
    items: [
      "Shopee Ads: CPC 키워드 광고",
      "디스커버리 광고 (피드 노출)",
      "쇼피 라이브 정기 방송",
      "프로모션: 2.2~12.12 빅세일, Ramadan, Payday, Flash Sale",
    ],
  },
  {
    title: "성과 관리",
    items: [
      "주간/월간 매출 리포트",
      "ROAS 분석",
      "고객 리뷰 분석 & 대응",
      "경쟁사 모니터링 & 전략 조정",
    ],
  },
];

export default function ShopeeSection() {
  return (
    <section id="shopee" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-emerald phase-accent-emerald">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial-cyan opacity-10 blur-3xl"
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[12%] right-[6%] w-20 h-20 rounded-full border border-brand-emerald/8 animate-float-slow" />
        <div className="absolute bottom-[18%] left-[4%] w-14 h-14 rotate-45 border border-brand-teal/8 animate-float-reverse" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 3 · 세일즈 채널"
            title="쇼피 입점 & 운영"
            subtitle="인도네시아 이커머스 1위, 36% 점유율 쇼피에서 팔아드립니다"
            icon="🛒"
            align="center"
          />
        </ScrollReveal>

        {/* ── Stats Banner ────────────────────────────────────── */}
        <ScrollReveal delay={0.15}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 sm:divide-x sm:divide-brand-emerald/20 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/15 py-6 px-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-8 sm:px-10">
                <p className="text-3xl md:text-4xl font-black font-display text-brand-emerald tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Process Flow ────────────────────────────────────── */}
        <ScrollReveal delay={0.25}>
          <div className="mt-14">
            {/* Desktop: horizontal */}
            <div className="hidden md:flex items-center justify-center gap-0">
              {processSteps.map((step, idx) => (
                <div key={step} className="flex items-center">
                  <div className="bg-brand-emerald/10 border border-brand-emerald/30 rounded-lg px-6 py-3 text-center">
                    <p className="text-sm font-semibold text-text-primary whitespace-nowrap">
                      {step}
                    </p>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="flex items-center mx-2 gap-1">
                      <span className="text-brand-emerald/30 text-xs">──</span>
                      <DiamondConnector color="emerald" size="sm" animated />
                      <span className="text-brand-emerald/30 text-xs">──→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: vertical */}
            <div className="md:hidden flex flex-col items-center gap-0">
              {processSteps.map((step, idx) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="bg-brand-emerald/10 border border-brand-emerald/30 rounded-lg px-6 py-3 text-center w-full max-w-[180px]">
                    <p className="text-sm font-semibold text-text-primary">
                      {step}
                    </p>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="flex flex-col items-center my-1 gap-0.5">
                      <span className="text-brand-emerald/30 text-xs">|</span>
                      <DiamondConnector color="emerald" size="sm" animated />
                      <span className="text-brand-emerald/30 text-xs">↓</span>
                    </div>
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
              <GlowCard key={card.title} variant="emerald" animated cornerDots className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-badge icon-badge-emerald">
                    {card.title === "스토어 셋업" ? "🏗️" : card.title === "상품 최적화" ? "✨" : card.title === "광고 운영" ? "📢" : "📊"}
                  </div>
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
                      <span className="text-brand-emerald/60 mt-0.5 flex-shrink-0">
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
