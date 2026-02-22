"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import DiamondConnector from "@/components/ui/DiamondConnector";
import NodeConnector from "@/components/ui/NodeConnector";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const timelineSteps = [
  {
    number: "1",
    title: "사전 컨설팅",
    duration: "2주",
    items: [
      "제품 카테고리 분석",
      "할랄 인증 필요 여부 판단",
      "원료/성분 할랄 적합성 사전 검토",
    ],
  },
  {
    number: "2",
    title: "서류 준비",
    duration: "4주",
    items: [
      "할랄 보증 시스템(SJH) 수립",
      "원료 목록 & 공급처 증빙",
      "제조 공정 문서화",
      "BPJPH 포털 온라인 신청 대행",
    ],
  },
  {
    number: "3",
    title: "심사 & 실사",
    duration: "4-8주",
    items: [
      "LPH 할랄 검사기관 서류 심사",
      "현장 실사(제조 시설 방문)",
      "실사 대응 컨설팅 & 동행",
    ],
  },
  {
    number: "4",
    title: "인증서 발급",
    duration: "2주",
    items: [
      "MUI 파트와 결정(Fatwa)",
      "BPJPH 할랄 인증서 발급",
      "할랄 라벨 디자인 & 패키징 적용",
    ],
  },
  {
    number: "5",
    title: "사후 관리",
    duration: "",
    items: [
      "4년 유효기간 관리",
      "갱신 절차 대행",
      "신규 제품 추가 인증",
    ],
  },
];

export default function HalalSection() {
  return (
    <section id="halal" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-indigo phase-accent-indigo">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial-indigo opacity-20 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 1 · 시장진입 준비"
            title="할랄 인증 원스톱 솔루션"
            subtitle="인도네시아에서 팔려면, 할랄은 필수입니다"
            icon="🕌"
            align="center"
          />
        </ScrollReveal>

        {/* ── Two-column layout ───────────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* LEFT — Vertical Process Timeline (3 cols) */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="flex flex-col">
              {timelineSteps.map((step, idx) => (
                <div key={step.number}>
                  {/* Step row */}
                  <div className="flex items-start gap-4">
                    {/* Step number circle */}
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-indigo/20 border border-brand-indigo/50 flex items-center justify-center shadow-lg shadow-brand-indigo/10">
                      <span className="text-sm font-black text-brand-indigo">
                        {step.number}
                      </span>
                    </div>

                    {/* Content block */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-bold text-text-primary">
                          {step.title}
                        </h4>
                        {step.duration && (
                          <span className="text-xs font-medium text-brand-indigo bg-brand-indigo/10 px-2 py-0.5 rounded-full">
                            {step.duration}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-1">
                        {step.items.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-text-secondary flex items-start gap-2"
                          >
                            <span className="text-brand-indigo/60 mt-1 flex-shrink-0">
                              ›
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Vertical dashed connector between steps */}
                  {idx < timelineSteps.length - 1 && (
                    <div className="border-l-2 border-dashed border-brand-indigo/30 h-10 ml-[21px]" />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* RIGHT — 3 Info Cards stacked (2 cols) */}
          <div className="lg:col-span-2">
            <StaggerChildren staggerDelay={0.15} className="flex flex-col gap-6">
              {/* Card 1: 두 가지 인증 경로 */}
              <GlowCard variant="indigo">
                <h4 className="text-lg font-bold text-text-primary mb-4">
                  두 가지 인증 경로
                </h4>

                <div className="space-y-4">
                  {/* Standard */}
                  <div className="bg-brand-indigo/5 rounded-lg p-3">
                    <p className="text-sm font-semibold text-brand-indigo mb-1">
                      직접 인증 (Standard)
                    </p>
                    <ul className="text-xs text-text-secondary space-y-0.5">
                      <li>BPJPH에 직접 신청</li>
                      <li>소요 3-6개월</li>
                      <li>비용 중</li>
                    </ul>
                  </div>

                  {/* MRA */}
                  <div className="bg-brand-indigo/5 rounded-lg p-3">
                    <p className="text-sm font-semibold text-brand-indigo mb-1">
                      MRA 간소화 (SHLN)
                    </p>
                    <ul className="text-xs text-text-secondary space-y-0.5">
                      <li>한국 할랄 기관 인증 → 인도네시아 등록</li>
                      <li>소요 1-3개월</li>
                      <li>비용 저</li>
                    </ul>
                  </div>
                </div>
              </GlowCard>

              {/* Card 2: 2025 규제 업데이트 */}
              <GlowCard variant="indigo">
                <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                  <span>⚠️</span>
                  2025 규제 업데이트
                </h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-amber font-bold flex-shrink-0">
                      ·
                    </span>
                    <span>
                      <strong className="text-text-primary">Decree 221/2025</strong>{" "}
                      (시행일: 2025.12.15)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-amber font-bold flex-shrink-0">
                      ·
                    </span>
                    <span>
                      <strong className="text-text-primary">CL 7/2025</strong>{" "}
                      의무 라벨링
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-amber font-bold flex-shrink-0">
                      ·
                    </span>
                    <span>
                      식품/음료 데드라인:{" "}
                      <strong className="text-brand-amber">2026.10.17</strong>까지
                      인증 필수
                    </span>
                  </li>
                </ul>
              </GlowCard>

              {/* Card 3: 카테고리별 필수 여부 */}
              <GlowCard variant="indigo">
                <h4 className="text-lg font-bold text-text-primary mb-3">
                  카테고리별 필수 여부
                </h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">✅</span>
                    <span>
                      <strong className="text-text-primary">필수:</strong> 식품,
                      음료, 화장품, 의약품, 생활화학제품
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">⚠️</span>
                    <span>
                      <strong className="text-text-primary">2026부터:</strong>{" "}
                      패션, 가전, 서비스
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">❌</span>
                    <span>
                      <strong className="text-text-primary">비할랄 가능:</strong>{" "}
                      하람 원료 명시 시 &quot;Non-Halal&quot; 라벨 의무 부착
                    </span>
                  </li>
                </ul>
              </GlowCard>
            </StaggerChildren>
          </div>
        </div>

        {/* ── Bottom connector ────────────────────────────────── */}
        <div className="mt-12 flex flex-col items-center gap-2">
          <NodeConnector variant="dashed" color="indigo" vertical />
          <DiamondConnector color="indigo" size="md" animated />
        </div>
      </div>
    </section>
  );
}
