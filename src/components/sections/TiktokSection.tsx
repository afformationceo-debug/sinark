"use client";

import {
  Play,
  Users,
  TrendingUp,
  Radio,
  Store,
  Video,
  Target,
} from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animation/ScrollReveal";
import TabPanel from "@/components/ui/TabPanel";

const topStats = [
  { value: "1.27억", label: "인도네시아 사용자", icon: Users },
  { value: "3x", label: "숏폼 구매 전환율", icon: TrendingUp },
  { value: "급성장", label: "라이브 커머스 매출", icon: Radio },
];

const tabs = [
  { id: "shop", label: "TikTok Shop", icon: <Store className="w-4 h-4" /> },
  { id: "live", label: "라이브커머스", icon: <Video className="w-4 h-4" /> },
  { id: "ads", label: "TikTok Ads", icon: <Target className="w-4 h-4" /> },
];

const tabContent: Record<string, { title: string; items: string[] }> = {
  shop: {
    title: "셀러 온보딩 & 숏폼 콘텐츠",
    items: [
      "현지 법인/크로스보더 셋업",
      "TikTok Seller Center 등록",
      "상품 카탈로그 등록 & 가격 전략 수립",
      "15-60초 바이럴 영상 제작",
      "트렌드 사운드 활용 & 후킹 구조 기획",
      "GRWM/루틴/비포에프터 포맷",
    ],
  },
  live: {
    title: "라이브 커머스 운영",
    items: [
      "주 2-3회 라이브 방송",
      "전문 호스트 배정",
      "실시간 할인/쿠폰 운영",
      "라이브 전용 상품 기획",
      "어필리에이트 프로그램 관리 (5-20% 커미션)",
    ],
  },
  ads: {
    title: "광고 & 성과 분석",
    items: [
      "GMV 추적 & 크리에이터 ROI 분석",
      "ROAS 최적화",
      "Spark Ads (크리에이터 콘텐츠 광고화)",
      "In-Feed / TopView 광고 운영",
      "Branded Hashtag Challenge 기획",
    ],
  },
};

const phoneScreenHighlights = [
  { label: "숏폼 콘텐츠", sub: "15-60s 바이럴 영상" },
  { label: "라이브 방송", sub: "주 2-3회 운영" },
  { label: "TikTok Shop", sub: "Seller Center 연동" },
  { label: "성과 분석", sub: "ROAS 최적화" },
];

export default function TiktokSection() {
  return (
    <section
      id="tiktok"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-emerald"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 3 · 세일즈 채널"
            title="틱톡샵 라이브 커머스"
            subtitle="1.27억 인도네시아 틱톡 사용자, 콘텐츠가 곧 매출입니다"
            icon={<Play className="w-4 h-4" />}
            align="center"
          />
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {topStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} variant="stat" color="emerald">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-xl font-bold font-display text-brand-emerald">
                        {stat.value}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Phone mockup + Tabs 2-column */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Phone Mockup */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-[260px]">
                {/* Phone frame */}
                <div className="rounded-[2.5rem] border-[3px] border-white/10 bg-neutral-900 p-2 shadow-[0_4px_32px_rgba(0,0,0,0.4)]">
                  {/* Notch */}
                  <div className="mx-auto w-24 h-5 bg-neutral-900 rounded-b-xl relative z-10 -mt-[1px]">
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-2 rounded-full bg-neutral-800" />
                  </div>
                  {/* Screen */}
                  <div className="rounded-[2rem] bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 overflow-hidden mt-[-4px]">
                    {/* Screen header */}
                    <div className="px-5 pt-6 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Play className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold text-white/90 tracking-wide">
                          TikTok Shop
                        </span>
                      </div>
                      <p className="text-[10px] text-white/40">
                        K-Brand Services
                      </p>
                    </div>
                    {/* Screen content */}
                    <div className="px-4 pb-6 space-y-3">
                      {phoneScreenHighlights.map((item, idx) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/[0.06] px-3.5 py-2.5"
                        >
                          <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 text-[10px] font-bold flex items-center justify-center">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <p className="text-xs font-semibold text-white/80">
                              {item.label}
                            </p>
                            <p className="text-[10px] text-white/35">
                              {item.sub}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Bottom bar */}
                <div className="mx-auto mt-[-6px] w-28 h-1 rounded-full bg-white/15" />
              </div>
            </div>

            {/* Right: TabPanel */}
            <div className="lg:col-span-8">
              <Card variant="elevated" color="emerald">
                <TabPanel tabs={tabs} color="emerald">
                  {(activeTab) => {
                    const content = tabContent[activeTab];
                    if (!content) return null;
                    return (
                      <div>
                        <h3 className="text-lg font-bold text-text-primary mb-4">
                          {content.title}
                        </h3>
                        <ul className="space-y-2.5">
                          {content.items.map((item) => (
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
                    );
                  }}
                </TabPanel>
              </Card>

              {/* Bottom note */}
              <p className="mt-6 text-sm text-text-secondary leading-relaxed text-center lg:text-left">
                2023년 규제 강화 이후 현지 법인 or Tokopedia 연동 필수 - 저희가
                모두 대행합니다
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
