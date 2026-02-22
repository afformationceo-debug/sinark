"use client";

import {
  ShoppingBag,
  TrendingUp,
  Percent,
  PieChart,
  Store,
  Megaphone,
  Target,
} from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const stats = [
  {
    value: "$187억",
    label: "GMV",
    icon: TrendingUp,
  },
  {
    value: "36%",
    label: "시장 점유율",
    icon: PieChart,
  },
  {
    value: "1.5억+",
    label: "월 활성 사용자",
    icon: Percent,
  },
];

const storeSetupSteps = [
  { num: "01", text: "Shopee Seller Center 계정 생성" },
  { num: "02", text: "스토어 프로필 디자인" },
  { num: "03", text: "카테고리 전략 수립 & 상품 등록" },
  { num: "04", text: "Shopee Mall 공식 브랜드관 입점 지원" },
  { num: "05", text: "인도네시아어 상품명/설명 SEO 최적화" },
];

const adsDetails = [
  "Shopee Ads: CPC 키워드 광고",
  "디스커버리 광고 (피드 노출)",
  "쇼피 라이브 정기 방송",
  "A/B 테스트 (썸네일, 가격, 번들링)",
];

const campaignStrategies = [
  "프로모션: 2.2~12.12 빅세일, Ramadan, Payday, Flash Sale",
  "주간/월간 매출 리포트 & ROAS 분석",
  "고객 리뷰 분석 & 대응",
  "경쟁사 모니터링 & 전략 조정",
];

export default function ShopeeSection() {
  return (
    <section
      id="shopee"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-emerald"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 3 · 세일즈 채널"
            title="쇼피 입점 & 운영"
            subtitle="인도네시아 이커머스 1위, 36% 점유율 쇼피에서 팔아드립니다"
            icon={<ShoppingBag className="w-4 h-4" />}
            align="center"
          />
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column: 3 stat cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <StaggerChildren staggerDelay={0.1} className="flex flex-col gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} variant="stat" color="emerald">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-text-secondary mb-1">
                          {stat.label}
                        </p>
                        <p className="text-3xl md:text-4xl font-black font-display text-brand-emerald tracking-tight">
                          {stat.value}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-emerald-400" />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </StaggerChildren>
          </div>

          {/* Right column: main service card */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <Card variant="elevated" color="emerald" className="h-full">
                {/* Store setup steps */}
                <div className="mb-8">
                  <div className="flex items-center gap-2.5 mb-5">
                    <Store className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-lg font-bold text-text-primary">
                      스토어 셋업
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {storeSetupSteps.map((step) => (
                      <div
                        key={step.num}
                        className="flex items-start gap-3"
                      >
                        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold flex items-center justify-center">
                          {step.num}
                        </span>
                        <span className="text-sm text-text-secondary leading-relaxed pt-1">
                          {step.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/6 mb-8" />

                {/* Shopee Ads */}
                <div className="mb-8">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Megaphone className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-lg font-bold text-text-primary">
                      Shopee Ads
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {adsDetails.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                      >
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/6 mb-8" />

                {/* Campaign strategy */}
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <Target className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-lg font-bold text-text-primary">
                      캠페인 & 성과 관리
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {campaignStrategies.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                      >
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
