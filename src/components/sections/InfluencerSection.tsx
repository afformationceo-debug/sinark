"use client";

import { Crown, Star, Gem, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const tiers = [
  {
    tier: "Mega Influencer",
    icon: Crown,
    followers: "100만+",
    price: "$10,000~$50,000/캠페인",
    width: "w-full",
    items: [
      "브랜드 앰배서더 계약",
      "TV/유튜브 대형 캠페인",
      "브랜드 론칭 이벤트",
    ],
    pricing:
      "IG 피드 $5,000-15,000 | TikTok $3,000-10,000 | YouTube $8,000-25,000",
  },
  {
    tier: "Macro Influencer",
    icon: Star,
    followers: "10만-100만",
    price: "$1,000~$5,000/캠페인",
    width: "w-full md:w-[90%]",
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
    icon: Gem,
    followers: "1만-10만",
    price: "$100~$500/캠페인",
    width: "w-full md:w-[80%]",
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
    <section
      id="influencer"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-cyan"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 2 · 마케팅 & 브랜딩"
            title="메가 인플루언서 네트워크"
            subtitle="1억 2,700만 인도네시아 틱톡 사용자에게 당신의 브랜드를 전달합니다"
            icon={<ServiceIcon serviceId="influencer" color="cyan" size="sm" />}
            align="center"
          />
        </ScrollReveal>

        {/* Pyramid Tier Cards */}
        <div className="mt-16">
          <StaggerChildren staggerDelay={0.15} className="flex flex-col items-center gap-5">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div key={tier.tier} className={`${tier.width}`}>
                  <Card variant="interactive" color="cyan" className="flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/8 border border-cyan-500/15 flex items-center justify-center">
                        <Icon size={20} strokeWidth={1.5} className="text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-text-primary">
                          {tier.tier}
                        </h4>
                        <p className="text-xs text-cyan-400 font-medium">
                          팔로워 {tier.followers}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-cyan-400 mb-4">
                      {tier.price}
                    </p>

                    <ul className="flex-1 space-y-1.5 mb-4">
                      {tier.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-text-secondary flex items-start gap-2"
                        >
                          <ChevronRight
                            size={14}
                            className="text-cyan-500/60 mt-0.5 flex-shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {tier.pricing && (
                      <div className="pt-3 border-t border-cyan-500/20">
                        <p className="text-xs font-medium text-text-tertiary mb-1">
                          채널별 단가
                        </p>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {tier.pricing}
                        </p>
                      </div>
                    )}
                  </Card>
                </div>
              );
            })}
          </StaggerChildren>
        </div>

        {/* Campaign Process Stepper */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16">
            <h4 className="text-center text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-8">
              Campaign Process
            </h4>

            {/* Desktop: horizontal numbered stepper */}
            <div className="hidden md:flex items-start justify-center relative">
              {/* Connecting line */}
              <div
                className="absolute top-[14px] left-1/2 -translate-x-1/2 h-[2px] bg-cyan-500/20"
                style={{
                  width: `calc(100% - ${100 / campaignSteps.length}%)`,
                }}
              />

              {campaignSteps.map((step, idx) => (
                <div
                  key={step}
                  className="flex-1 flex flex-col items-center relative"
                >
                  {/* Number circle */}
                  <div className="w-7 h-7 rounded-full bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-cyan-400">
                      {idx + 1}
                    </span>
                  </div>
                  {/* Label */}
                  <p className="mt-2.5 text-xs font-medium text-text-secondary text-center whitespace-nowrap">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile: vertical numbered stepper */}
            <div className="md:hidden flex flex-col items-start pl-4 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[17px] top-[14px] bottom-[14px] w-[2px] bg-cyan-500/20" />

              {campaignSteps.map((step, idx) => (
                <div key={step} className="flex items-center gap-3 relative mb-5 last:mb-0">
                  {/* Number circle */}
                  <div className="w-7 h-7 rounded-full bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center z-10 flex-shrink-0">
                    <span className="text-xs font-bold text-cyan-400">
                      {idx + 1}
                    </span>
                  </div>
                  {/* Label */}
                  <p className="text-sm font-medium text-text-secondary">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
