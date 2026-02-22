"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const offlineCards = [
  {
    title: "프리미엄 팝업스토어",
    sections: [
      {
        heading: "자카르타",
        items: ["Grand Indonesia", "Central Park Mall", "PIK Avenue"],
      },
      {
        heading: "수라바야",
        items: ["Tunjungan Plaza", "Ciputra World"],
      },
      {
        heading: "발리",
        items: ["Beachwalk", "Seminyak Village"],
      },
    ],
    extras: [
      "기획→설치→운영→철수 풀 매니지먼트",
      "현지 통역사 상주 지원",
      "평균 팝업 기간: 2-4주",
    ],
  },
  {
    title: "상설 리테일 입점",
    sections: [
      {
        heading: "시나르마스 계열",
        items: ["유통채널 우선 입점"],
      },
      {
        heading: "K-뷰티",
        items: ["Guardian", "Watsons", "Sociolla"],
      },
      {
        heading: "K-푸드",
        items: ["Ranch Market", "Kem Chicks", "Grand Lucky"],
      },
      {
        heading: "편의점",
        items: ["2만+ 점포 네트워크"],
      },
    ],
    extras: [],
  },
  {
    title: "체험형 마케팅 이벤트",
    sections: [
      {
        heading: "시식회 (K-푸드)",
        items: ["프리미엄 슈퍼마켓 내 시식 부스"],
      },
      {
        heading: "뷰티 체험 (K-뷰티)",
        items: ["메이크업 클래스", "피부 진단"],
      },
      {
        heading: "팬미팅/사인회",
        items: ["인플루언서 콜라보 오프라인 이벤트"],
      },
      {
        heading: "한류 페스티벌",
        items: ["부스 참여"],
      },
    ],
    extras: [],
  },
];

export default function OfflineSection() {
  return (
    <section id="offline" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-slightly-lighter">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-radial-cyan opacity-15 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 2 · 마케팅 & 브랜딩"
            title="오프라인 팝업 & 리테일 입점"
            subtitle="온라인을 넘어, 인도네시아 현장에서 브랜드를 체험하게 합니다"
            icon="🏬"
            align="center"
          />
        </ScrollReveal>

        {/* ── 3-column card grid ──────────────────────────────── */}
        <div className="mt-16">
          <StaggerChildren
            staggerDelay={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {offlineCards.map((card, index) => (
              <GlowCard key={card.title} variant="cyan" cornerDots accentBar={index === 0} className="flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="icon-badge icon-badge-cyan">
                    {card.title === "프리미엄 팝업스토어" ? "🏪" : card.title === "상설 리테일 입점" ? "🛍️" : "🎪"}
                  </div>
                  <h4 className="text-lg font-bold text-text-primary">
                    {card.title}
                  </h4>
                </div>

                <div className="flex-1 space-y-4">
                  {card.sections.map((section) => (
                    <div key={section.heading}>
                      <p className="text-sm font-semibold text-brand-cyan mb-1.5">
                        {section.heading}
                      </p>
                      <ul className="space-y-1">
                        {section.items.map((item) => (
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
                    </div>
                  ))}
                </div>

                {/* Extras */}
                {card.extras.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-brand-cyan/20 space-y-1.5">
                    {card.extras.map((extra) => (
                      <p
                        key={extra}
                        className="text-xs text-text-tertiary flex items-start gap-2"
                      >
                        <span className="text-brand-cyan/50 flex-shrink-0">
                          ·
                        </span>
                        {extra}
                      </p>
                    ))}
                  </div>
                )}
              </GlowCard>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
