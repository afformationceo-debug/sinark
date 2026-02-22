"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const tiktokServices = [
  {
    title: "셀러 온보딩",
    items: [
      "현지 법인/크로스보더 셋업",
      "TikTok Seller Center 등록",
      "상품 카탈로그 등록",
      "가격 전략 수립",
    ],
  },
  {
    title: "숏폼 콘텐츠 제작",
    items: [
      "15-60초 바이럴 영상",
      "트렌드 사운드 활용",
      "후킹 구조 기획",
      "GRWM/루틴/비포에프터 포맷",
    ],
  },
  {
    title: "라이브 커머스",
    items: [
      "주 2-3회 라이브 방송",
      "전문 호스트 배정",
      "실시간 할인/쿠폰",
      "라이브 전용 상품 기획",
    ],
  },
  {
    title: "성과 분석",
    items: [
      "GMV 추적",
      "크리에이터 ROI 분석",
      "ROAS 최적화",
      "어필리에이트 프로그램 관리 (5-20% 커미션)",
    ],
  },
];

const topStats = [
  { label: "1.27억 사용자", icon: "👥" },
  { label: "Tokopedia 인수로 커머스 강화", icon: "🛒" },
  { label: "숏폼 → 구매 전환율 3배", icon: "📈" },
];

export default function TiktokSection() {
  return (
    <section id="tiktok" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-slightly-lighter">
      <div className="max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 3 · 세일즈 채널"
            title="틱톡샵 라이브 커머스"
            subtitle="1.27억 인도네시아 틱톡 사용자, 콘텐츠가 곧 매출입니다"
            icon="🎵"
            align="center"
          />
        </ScrollReveal>

        {/* ── Top stats banner ────────────────────────────────── */}
        <ScrollReveal delay={0.15}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/15 py-5 px-6">
            {topStats.map((stat, idx) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{stat.icon}</span>
                  <span className="text-sm md:text-base font-semibold text-text-primary">
                    {stat.label}
                  </span>
                </div>
                {idx < topStats.length - 1 && (
                  <span className="hidden sm:block w-1 h-1 rounded-full bg-brand-emerald/60" />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── 2x2 Service cards ───────────────────────────────── */}
        <div className="mt-12">
          <StaggerChildren
            staggerDelay={0.12}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {tiktokServices.map((service) => (
              <GlowCard key={service.title} variant="emerald">
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-badge icon-badge-emerald">
                    {service.title === "셀러 온보딩" ? "🚀" : service.title === "숏폼 콘텐츠 제작" ? "🎬" : service.title === "라이브 커머스" ? "📡" : "📊"}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                    >
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </StaggerChildren>
        </div>

        {/* ── Bottom note ─────────────────────────────────────── */}
        <ScrollReveal delay={0.4}>
          <p className="mt-10 text-center text-sm text-text-secondary leading-relaxed max-w-3xl mx-auto">
            2023년 규제 강화 이후 현지 법인 or Tokopedia 연동 필수 - 저희가 모두 대행합니다
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
