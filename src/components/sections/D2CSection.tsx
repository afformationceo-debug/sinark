"use client";

import {
  Globe,
  CreditCard,
  Globe2,
  Palette,
  Mail,
} from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const browserFeatures = [
  {
    label: "인도네시아 전용 도메인 (.co.id / .id)",
    sub: "모바일 퍼스트 반응형",
  },
  {
    label: "인도네시아어 + 영어 다국어",
    sub: "SEO 최적화 (Google + Bing)",
  },
  {
    label: "제품 카탈로그 & 장바구니",
    sub: "커스텀 브랜드 디자인",
  },
  {
    label: "블로그/매거진 콘텐츠",
    sub: "WhatsApp 채팅 위젯 통합",
  },
];

const featureCards = [
  {
    icon: CreditCard,
    title: "현지 결제 수단 통합",
    description:
      "E-Wallet (GoPay, OVO, DANA, ShopeePay), 가상계좌 (BCA, Mandiri, BNI, BRI), 편의점 결제 (Indomaret, Alfamart), 신용카드 (Visa, Mastercard)",
  },
  {
    icon: Globe2,
    title: "CRM & 애널리틱스 연동",
    description:
      "고객 데이터 수집, 이메일 마케팅. Google Analytics / Meta Pixel / TikTok Pixel 설치",
  },
  {
    icon: Palette,
    title: "브랜드 아이덴티티 디자인",
    description:
      "브랜드 아이덴티티 반영 커스텀 디자인, 모바일 퍼스트 반응형 (인도네시아 모바일 사용률 73%)",
  },
  {
    icon: Mail,
    title: "마케팅 통합",
    description:
      "WhatsApp 채팅 위젯 통합, 블로그/매거진 콘텐츠 섹션, 리뷰 관리 시스템",
  },
];

export default function D2CSection() {
  return (
    <section
      id="d2c"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-slightly-lighter"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 3 · 세일즈 채널"
            title="인도네시아 전용 브랜드 홈페이지"
            subtitle="마켓플레이스를 넘어, 자사몰에서 브랜드 가치를 높이세요"
            icon={<Globe className="w-4 h-4" />}
            align="center"
          />
        </ScrollReveal>

        {/* Browser Mockup */}
        <ScrollReveal delay={0.15}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="rounded-2xl border border-white/8 bg-neutral-900/80 shadow-[0_4px_32px_rgba(0,0,0,0.35)] overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/6 bg-neutral-900">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                {/* URL bar */}
                <div className="flex-1 max-w-md">
                  <div className="rounded-md bg-neutral-800 border border-white/6 px-3 py-1.5 flex items-center gap-2">
                    <Globe className="w-3 h-3 text-white/30 flex-shrink-0" />
                    <span className="text-xs text-white/50 truncate">
                      https://yourbrand.co.id
                    </span>
                  </div>
                </div>
              </div>

              {/* Browser content */}
              <div className="bg-gradient-to-b from-neutral-850 via-neutral-900 to-neutral-950 px-6 md:px-10 py-8 md:py-10">
                {/* Hero area inside browser */}
                <div className="text-center mb-8">
                  <p className="text-xs uppercase tracking-widest text-emerald-400/70 mb-2">
                    Your Brand Indonesia
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-2">
                    브랜드 전용 자사몰
                  </h3>
                  <p className="text-sm text-white/40 max-w-md mx-auto">
                    인도네시아 현지 최적화 D2C 경험
                  </p>
                </div>

                {/* Feature callouts grid inside browser */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {browserFeatures.map((feat, idx) => (
                    <div
                      key={feat.label}
                      className="flex items-start gap-3 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-md bg-emerald-500/15 text-emerald-400 text-[10px] font-bold flex items-center justify-center mt-0.5">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-white/75">
                          {feat.label}
                        </p>
                        <p className="text-xs text-white/35 mt-0.5">
                          {feat.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature cards 2x2 grid */}
        <StaggerChildren
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.title}
                variant="interactive"
                color="emerald"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-text-primary mb-1.5">
                      {card.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
