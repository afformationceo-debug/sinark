"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const translationServices = [
  {
    title: "비즈니스 미팅 통역",
    items: [
      "한국어 ↔ 인도네시아어 전문 통역사",
      "비즈니스 미팅, 바이어 상담, 정부 미팅",
      "동시통역 / 순차통역 선택",
      "자카르타, 수라바야, 발리 현지 투입",
    ],
  },
  {
    title: "문서 번역",
    items: [
      "계약서, MOU, NDA 법률 문서",
      "마케팅 자료 (브로슈어, 카탈로그)",
      "제품 설명서, 패키지 라벨",
      "정부 제출 서류 공증 번역",
    ],
  },
  {
    title: "이벤트 & 현장 지원",
    items: [
      "팝업스토어 현장 통역",
      "전시회, 박람회 부스 통역",
      "인플루언서 촬영 현장 통역",
      "공장 실사 동행 통역",
    ],
  },
  {
    title: "미디어 로컬라이징",
    items: [
      "마케팅 영상 인도네시아어 자막",
      "소셜 콘텐츠 카피 현지화",
      "홈페이지/앱 텍스트 번역",
      "고객 리뷰 번역 (한국 본사 보고용)",
    ],
  },
];

export default function TranslationSection() {
  return (
    <section id="translation" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-amber">
      {/* Floating geometric shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] right-[6%] w-20 h-20 rounded-full border border-brand-amber/10 animate-float-slow" />
        <div className="absolute bottom-[20%] left-[5%] w-14 h-14 rotate-45 border border-brand-amber/10 animate-float-reverse" />
        <div className="absolute top-[45%] left-[92%] w-3 h-3 rounded-full bg-brand-amber/20 animate-pulse-glow" />
        <div className="absolute top-[70%] right-[88%] w-2 h-2 rounded-full bg-brand-amber/20 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 4 · 운영 & 성장"
            title="전문 통번역 서비스"
            subtitle="언어 장벽 없이, 인도네시아 비즈니스를 진행하세요"
            icon="🌏"
            align="center"
          />
        </ScrollReveal>

        {/* ── 4-card grid ─────────────────────────────────────── */}
        <div className="mt-16">
          <StaggerChildren
            staggerDelay={0.12}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {translationServices.map((service) => (
              <GlowCard key={service.title} variant="amber" accentBar>
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-badge icon-badge-amber">
                    {service.title === "비즈니스 미팅 통역" ? "🗣️" : service.title === "문서 번역" ? "📝" : service.title === "이벤트 & 현장 지원" ? "🎤" : "🎬"}
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
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-amber" />
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
