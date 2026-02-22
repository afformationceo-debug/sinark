"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const licensingCards = [
  {
    title: "BPOM 등록 (식약처)",
    sections: [
      {
        heading: "화장품 등록 (Notifikasi)",
        items: [
          "성분 안전성 서류",
          "라벨링 규정 검토",
          "등록번호(NA/NB) 발급",
        ],
      },
      {
        heading: "식품 수입 허가",
        items: [
          "ML 번호",
          "영양성분 표시 검토",
          "인도네시아어 라벨 제작",
        ],
      },
      {
        heading: "건강기능식품",
        items: [
          "추가 임상 자료 제출",
          "특별 카테고리 등록",
        ],
      },
    ],
    duration: "소요기간: 2-4개월",
  },
  {
    title: "수입 라이선스 취득",
    sections: [
      {
        heading: "API-U (수입업자 등록)",
        items: [
          "일반 무역 수입용",
          "연간 수입 계획 제출",
        ],
      },
      {
        heading: "API-P (생산자 수입)",
        items: [
          "생산 원료 수입용",
          "제조 시설 필수",
        ],
      },
      {
        heading: "NIB (사업자등록번호)",
        items: [
          "OSS 시스템 온라인 등록",
          "투자 활동 보고",
        ],
      },
    ],
    duration: "소요기간: 1-3개월",
  },
  {
    title: "PT PMA 법인 설립",
    sections: [
      {
        heading: "외국인 투자 법인 설립",
        items: [
          "최소 자본금 Rp 10억 (~$62,500)",
          "100% 외국인 소유 가능",
        ],
      },
      {
        heading: "KITAS (취업비자) 지원",
        items: [
          "한국인 주재원 비자",
          "연간 갱신 대행",
        ],
      },
      {
        heading: "세무/회계 컨설팅",
        items: [
          "법인세 25% 대응",
          "이전가격 문서 작성",
        ],
      },
    ],
    duration: "소요기간: 4-8주",
  },
];

export default function LicensingSection() {
  return (
    <section id="licensing" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-slightly-lighter">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-radial-indigo opacity-15 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 1 · 시장진입 준비"
            title="인허가 & 수입 라이선스"
            subtitle="인도네시아 시장의 문을 법적으로 열어드립니다"
            icon="📋"
            align="center"
          />
        </ScrollReveal>

        {/* ── 3-column card grid ──────────────────────────────── */}
        <div className="mt-16">
          <StaggerChildren
            staggerDelay={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {licensingCards.map((card) => (
              <GlowCard key={card.title} variant="indigo" animated className="flex flex-col corner-dots corner-dots-indigo">
                <div className="flex items-center gap-3 mb-5">
                  <div className="icon-badge icon-badge-indigo">
                    {card.title === "BPOM 등록 (식약처)" ? "🏥" : card.title === "수입 라이선스 취득" ? "📜" : "🏢"}
                  </div>
                  <h4 className="text-lg font-bold text-text-primary">
                    {card.title}
                  </h4>
                </div>

                <div className="flex-1 space-y-4">
                  {card.sections.map((section) => (
                    <div key={section.heading}>
                      <p className="text-sm font-semibold text-brand-indigo mb-1.5">
                        {section.heading}
                      </p>
                      <ul className="space-y-1">
                        {section.items.map((item) => (
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
                    </div>
                  ))}
                </div>

                {/* Duration tag */}
                <div className="mt-5 pt-4 border-t border-brand-indigo/20">
                  <span className="text-xs font-medium text-brand-indigo bg-brand-indigo/10 px-3 py-1 rounded-full">
                    {card.duration}
                  </span>
                </div>
              </GlowCard>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
