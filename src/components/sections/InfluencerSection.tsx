"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const tiers = [
  {
    tier: "Mega Influencer",
    icon: "👑",
    followers: "100만+",
    price: "$10,000~$50,000/캠페인",
    featured: true,
    items: [
      "브랜드 앰배서더 계약",
      "TV/유튜브 대형 캠페인",
      "브랜드 론칭 이벤트",
    ],
    pricing: "IG 피드 $5,000-15,000 | TikTok $3,000-10,000 | YouTube $8,000-25,000",
  },
  {
    tier: "Macro Influencer",
    icon: "🌟",
    followers: "10만-100만",
    price: "$1,000~$5,000/캠페인",
    featured: false,
    items: [
      "제품 리뷰 & 언박싱",
      "브랜드 콜라보",
      "인스타 릴스/틱톡 숏폼",
      "Shopee Live/TikTok Live 출연",
    ],
    pricing: null,
  },
  {
    tier: "Micro Influencer",
    icon: "💎",
    followers: "1만-10만",
    price: "$100~$500/캠페인",
    featured: false,
    items: [
      "진정성 있는 사용 후기",
      "UGC 대량 생산",
      "시딩 캠페인 100명+",
      "틱톡 챌린지",
    ],
    pricing: null,
  },
];

const campaignSteps = [
  "브랜드 분석",
  "KOL 리스트 추천",
  "섭외 & 계약",
  "브리핑",
  "콘텐츠 제작",
  "발행 & 모니터링",
  "성과 리포트",
];

export default function InfluencerSection() {
  return (
    <section id="influencer" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-cyan phase-accent-cyan">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial-cyan opacity-15 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 2 · 마케팅 & 브랜딩"
            title="메가 인플루언서 네트워크"
            subtitle="1억 2,700만 인도네시아 틱톡 사용자에게 당신의 브랜드를 전달합니다"
            icon="📱"
            align="center"
          />
        </ScrollReveal>

        {/* ── Tier Cards ──────────────────────────────────────── */}
        <div className="mt-16">
          <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <GlowCard
                key={tier.tier}
                variant="cyan"
                className={`flex flex-col ${tier.featured ? "md:scale-105 md:-translate-y-2 ring-1 ring-brand-cyan/30" : ""}`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="icon-badge icon-badge-cyan">
                    {tier.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">
                      {tier.tier}
                    </h4>
                    <p className="text-xs text-brand-cyan font-medium">팔로워 {tier.followers}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-brand-cyan mb-4">
                  {tier.price}
                </p>

                {/* Items */}
                <ul className="flex-1 space-y-1.5 mb-4">
                  {tier.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-text-secondary flex items-start gap-2"
                    >
                      <span className="text-brand-cyan/60 mt-0.5 flex-shrink-0">
                        ›
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Channel pricing (Mega only) */}
                {tier.pricing && (
                  <div className="pt-3 border-t border-brand-cyan/20">
                    <p className="text-xs font-medium text-text-tertiary mb-1">
                      채널별 단가
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {tier.pricing}
                    </p>
                  </div>
                )}
              </GlowCard>
            ))}
          </StaggerChildren>
        </div>

        {/* ── Campaign Process Flow ──────────────────────────── */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16">
            <h4 className="text-center text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-6">
              Campaign Process
            </h4>

            {/* Desktop: horizontal flow */}
            <div className="hidden md:flex items-center justify-center gap-0">
              {campaignSteps.map((step, idx) => (
                <div key={step} className="flex items-center">
                  <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg px-4 py-2.5 text-center">
                    <p className="text-xs font-semibold text-text-primary whitespace-nowrap">
                      {step}
                    </p>
                  </div>
                  {idx < campaignSteps.length - 1 && (
                    <span className="text-brand-cyan/40 mx-1.5 text-sm flex-shrink-0">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: vertical flow */}
            <div className="md:hidden flex flex-col items-center gap-0">
              {campaignSteps.map((step, idx) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg px-5 py-2.5 text-center w-full max-w-[200px]">
                    <p className="text-xs font-semibold text-text-primary">
                      {step}
                    </p>
                  </div>
                  {idx < campaignSteps.length - 1 && (
                    <span className="text-brand-cyan/40 my-1 text-sm">↓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
