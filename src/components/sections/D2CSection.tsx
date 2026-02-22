"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/animation/ScrollReveal";

const buildFeatures = [
  "인도네시아 전용 도메인 (.co.id / .id)",
  "인도네시아어 + 영어 다국어 지원",
  "브랜드 아이덴티티 반영 커스텀 디자인",
  "모바일 퍼스트 반응형 (인도네시아 모바일 사용률 73%)",
  "SEO 최적화 (인도네시아 Google + Bing)",
  "제품 카탈로그 & 장바구니 시스템",
  "블로그/매거진 콘텐츠 섹션",
];

const paymentMethods = [
  { category: "E-Wallet", items: "GoPay, OVO, DANA, ShopeePay" },
  { category: "가상계좌", items: "BCA, Mandiri, BNI, BRI" },
  { category: "편의점 결제", items: "Indomaret, Alfamart" },
  { category: "신용카드", items: "Visa, Mastercard" },
];

const integrations = [
  "CRM 연동: 고객 데이터 수집, 이메일 마케팅",
  "Google Analytics / Meta Pixel / TikTok Pixel 설치",
  "WhatsApp 채팅 위젯 통합",
];

export default function D2CSection() {
  return (
    <section id="d2c" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-emerald">
      {/* Floating geometric shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[7%] w-20 h-20 rounded-full border border-brand-emerald/10 animate-float-slow" />
        <div className="absolute bottom-[15%] right-[5%] w-16 h-16 rotate-45 border border-brand-emerald/10 animate-float-reverse" />
        <div className="absolute top-[50%] left-[90%] w-3 h-3 rounded-full bg-brand-emerald/20 animate-pulse-glow" />
        <div className="absolute top-[25%] right-[85%] w-2 h-2 rounded-full bg-brand-emerald/20 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 3 · 세일즈 채널"
            title="인도네시아 전용 브랜드 홈페이지"
            subtitle="마켓플레이스를 넘어, 자사몰에서 브랜드 가치를 높이세요"
            icon="🌐"
            align="center"
          />
        </ScrollReveal>

        {/* ── Two-column layout ───────────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Build service */}
          <ScrollReveal direction="left" delay={0.2}>
            <GlowCard variant="emerald" animated cornerDots className="h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="icon-badge icon-badge-emerald">🛠️</div>
                <h3 className="text-xl font-bold text-text-primary">
                  구축 서비스
                </h3>
              </div>
              <ul className="space-y-3">
                {buildFeatures.map((item) => (
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
          </ScrollReveal>

          {/* Right: Payment & integration */}
          <ScrollReveal direction="right" delay={0.2}>
            <GlowCard variant="emerald" animated cornerDots className="h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="icon-badge icon-badge-emerald">💳</div>
                <h3 className="text-xl font-bold text-text-primary">
                  현지 결제 & 연동
                </h3>
              </div>

              {/* Payment methods */}
              <p className="text-sm font-semibold text-brand-emerald mb-3">
                현지 결제 수단 통합
              </p>
              <div className="space-y-2 mb-6">
                {paymentMethods.map((method) => (
                  <div key={method.category} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                    <span>
                      <span className="text-text-primary font-medium">{method.category}:</span>{" "}
                      {method.items}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-dark-border mb-5" />

              {/* Integrations */}
              <ul className="space-y-3">
                {integrations.map((item) => (
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
