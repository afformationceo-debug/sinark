"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animation/ScrollReveal";

/* ────────────────────────────────────────────────────────────────
   Pipeline data — self-contained
   ──────────────────────────────────────────────────────────────── */

interface ServiceNode {
  icon: string;
  name: string;
  nameEn: string;
}

interface PhaseData {
  icon: string;
  name: string;
  nameEn: string;
  r: number;
  g: number;
  b: number;
  services: ServiceNode[];
}

const phases: PhaseData[] = [
  {
    icon: "🏗️",
    name: "시장진입 준비",
    nameEn: "Market Entry",
    r: 99, g: 102, b: 241,
    services: [
      { icon: "🕌", name: "할랄 인증", nameEn: "Halal Certification" },
      { icon: "📋", name: "인허가", nameEn: "Licensing" },
      { icon: "📦", name: "물류", nameEn: "Logistics" },
    ],
  },
  {
    icon: "📣",
    name: "마케팅 & 브랜딩",
    nameEn: "Marketing",
    r: 6, g: 182, b: 212,
    services: [
      { icon: "🌟", name: "인플루언서", nameEn: "Influencer" },
      { icon: "🏬", name: "오프라인", nameEn: "Offline Retail" },
      { icon: "📱", name: "SNS 관리", nameEn: "SNS Mgmt" },
    ],
  },
  {
    icon: "🛒",
    name: "세일즈 채널",
    nameEn: "Sales Channel",
    r: 16, g: 185, b: 129,
    services: [
      { icon: "🟠", name: "쇼피 입점", nameEn: "Shopee" },
      { icon: "🎵", name: "틱톡샵", nameEn: "TikTok Shop" },
      { icon: "🌐", name: "D2C 웹사이트", nameEn: "D2C Website" },
    ],
  },
  {
    icon: "📈",
    name: "운영 & 성장",
    nameEn: "Operations",
    r: 245, g: 158, b: 11,
    services: [
      { icon: "💬", name: "CS 채널", nameEn: "Customer Service" },
      { icon: "🌏", name: "통번역", nameEn: "Translation" },
      { icon: "📊", name: "데이터 분석", nameEn: "Analytics" },
    ],
  },
];

/* ────────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────────── */

export default function PipelineSection() {
  return (
    <section
      id="pipeline"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden section-slightly-lighter grid-pattern"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Floating geometric decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-24 h-24 rounded-full border border-brand-indigo/8 animate-float-slow" />
        <div className="absolute bottom-[15%] left-[5%] w-14 h-14 rotate-45 border border-brand-cyan/8 animate-float-reverse" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ── Section heading ──────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="풀퍼널 서비스"
            title="원스톱 풀퍼널 파이프라인"
            subtitle="K브랜드의 인도네시아 시장 진출, 처음부터 끝까지"
            align="center"
          />
        </ScrollReveal>

        {/* ── Main Hub Node ────────────────────────────────────── */}
        <ScrollReveal delay={0.15}>
          <div className="mt-16 flex justify-center">
            <div
              className="mx-auto max-w-md w-full text-center rounded-2xl p-8 gradient-border-indigo"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(6,182,212,0.08) 100%)",
                border: "1px solid rgba(99,102,241,0.3)",
                boxShadow:
                  "0 0 60px rgba(99,102,241,0.15), 0 0 120px rgba(99,102,241,0.05)",
              }}
            >
              <div className="text-4xl mb-3">🇰🇷</div>
              <h3 className="text-2xl font-bold gradient-text">
                K-Brand 진출 허브
              </h3>
              <p className="text-text-secondary text-sm mt-1">
                Afformation &times; Sinarmas
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Vertical connector: Hub → Phase row ──────────────── */}
        <ScrollReveal delay={0.25}>
          <div className="flex flex-col items-center py-4">
            <div
              className="w-px h-8"
              style={{
                background:
                  "linear-gradient(180deg, rgba(99,102,241,0.5), rgba(99,102,241,0.2))",
              }}
            />
            <div
              className="w-3 h-3 rotate-45 my-1"
              style={{
                background: "#6366f1",
                boxShadow: "0 0 12px rgba(99,102,241,0.6)",
              }}
            />
            <div
              className="w-px h-8"
              style={{
                background:
                  "linear-gradient(180deg, rgba(99,102,241,0.2), rgba(99,102,241,0.5))",
              }}
            />
          </div>
        </ScrollReveal>

        {/* ── 4 Phase columns (card + connector + services) ──── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((phase, phaseIdx) => (
            <ScrollReveal
              key={phase.nameEn}
              delay={0.3 + phaseIdx * 0.08}
            >
              <div className="flex flex-col">
                {/* Phase hub card */}
                <div
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: `linear-gradient(135deg, rgba(${phase.r},${phase.g},${phase.b},0.2) 0%, rgba(${phase.r},${phase.g},${phase.b},0.08) 100%)`,
                    border: `1px solid rgba(${phase.r},${phase.g},${phase.b},0.4)`,
                    boxShadow: `0 0 30px rgba(${phase.r},${phase.g},${phase.b},0.2)`,
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-3 mx-auto"
                    style={{
                      background: `rgba(${phase.r},${phase.g},${phase.b},0.2)`,
                      border: `1px solid rgba(${phase.r},${phase.g},${phase.b},0.4)`,
                      boxShadow: `0 0 15px rgba(${phase.r},${phase.g},${phase.b},0.15)`,
                    }}
                  >
                    {phase.icon}
                  </div>
                  <h4 className="font-bold text-sm">{phase.name}</h4>
                  <p className="text-text-tertiary text-xs mt-0.5">
                    {phase.nameEn}
                  </p>
                </div>

                {/* Vertical connector: phase card → service nodes */}
                <div className="flex justify-center py-2">
                  <div
                    className="w-px h-6"
                    style={{
                      background: `rgba(${phase.r},${phase.g},${phase.b},0.3)`,
                    }}
                  />
                </div>

                {/* Service nodes */}
                <div className="flex flex-col">
                  {phase.services.map((svc, svcIdx) => (
                    <div key={svc.nameEn}>
                      {/* Connector dot between service nodes */}
                      {svcIdx > 0 && (
                        <div className="flex justify-center py-1">
                          <div
                            className="w-1 h-1 rounded-full"
                            style={{
                              background: `rgba(${phase.r},${phase.g},${phase.b},0.4)`,
                            }}
                          />
                        </div>
                      )}

                      {/* Service node card */}
                      <div
                        className="rounded-xl p-3 flex items-center gap-3"
                        style={{
                          background: `rgba(${phase.r},${phase.g},${phase.b},0.15)`,
                          border: `1px solid rgba(${phase.r},${phase.g},${phase.b},0.3)`,
                        }}
                      >
                        <span className="text-xl flex-shrink-0">
                          {svc.icon}
                        </span>
                        <div>
                          <p className="font-semibold text-sm">{svc.name}</p>
                          <p className="text-text-tertiary text-xs">
                            {svc.nameEn}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Bottom message ──────────────────────────────────── */}
        <ScrollReveal delay={0.7}>
          <p className="mt-12 text-sm text-text-tertiary text-center">
            모든 서비스가 유기적으로 연결된 원스톱 풀퍼널 파이프라인
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
