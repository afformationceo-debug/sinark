"use client";

import { useState } from "react";
import { GitCommitHorizontal, Route, AlertTriangle, CheckCircle2, XCircle, Info } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import ScrollReveal from "@/components/animation/ScrollReveal";
import TabPanel from "@/components/ui/TabPanel";

const timelineSteps = [
  {
    number: 1,
    title: "사전 컨설팅",
    duration: "2주",
    items: [
      "제품 카테고리 분석",
      "할랄 인증 필요 여부 판단",
      "원료/성분 할랄 적합성 사전 검토",
    ],
  },
  {
    number: 2,
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
    number: 3,
    title: "심사 & 실사",
    duration: "4-8주",
    items: [
      "LPH 할랄 검사기관 서류 심사",
      "현장 실사(제조 시설 방문)",
      "실사 대응 컨설팅 & 동행",
    ],
  },
  {
    number: 4,
    title: "인증서 발급",
    duration: "2주",
    items: [
      "MUI 파트와 결정(Fatwa)",
      "BPJPH 할랄 인증서 발급",
      "할랄 라벨 디자인 & 패키징 적용",
    ],
  },
  {
    number: 5,
    title: "사후 관리",
    duration: "",
    items: [
      "4년 유효기간 관리",
      "갱신 절차 대행",
      "신규 제품 추가 인증",
    ],
  },
];

const tabData = [
  {
    id: "routes",
    label: "인증 경로",
    icon: <Route size={14} />,
  },
  {
    id: "updates",
    label: "규제 업데이트",
    icon: <AlertTriangle size={14} />,
  },
  {
    id: "categories",
    label: "카테고리별",
    icon: <Info size={14} />,
  },
];

export default function HalalSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      id="halal"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-indigo"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 1 · 시장진입 준비"
            title="할랄 인증 원스톱 솔루션"
            subtitle="인도네시아에서 팔려면, 할랄은 필수입니다"
            icon={<ServiceIcon serviceId="halal" color="indigo" size="sm" />}
            align="center"
          />
        </ScrollReveal>

        {/* Horizontal Timeline (desktop) / Vertical Timeline (mobile) */}
        <ScrollReveal delay={0.15}>
          <div className="mt-16">
            {/* Desktop: horizontal timeline */}
            <div className="hidden md:block">
              {/* Timeline bar with steps */}
              <div className="relative flex items-start justify-between">
                {/* Connecting line */}
                <div className="absolute top-[22px] left-[28px] right-[28px] h-[2px] bg-indigo-500/20" />

                {timelineSteps.map((step) => (
                  <div
                    key={step.number}
                    className="relative flex flex-col items-center flex-1 group"
                    onMouseEnter={() => setActiveStep(step.number)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    {/* Number circle */}
                    <div className="relative z-10 w-11 h-11 rounded-full border border-indigo-500/40 bg-indigo-500/10 flex items-center justify-center transition-colors duration-200 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/60">
                      <span className="text-sm font-bold text-indigo-400">
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <p className="mt-3 text-sm font-semibold text-text-primary text-center">
                      {step.title}
                    </p>

                    {/* Duration badge */}
                    {step.duration && (
                      <span className="mt-1.5 text-xs font-medium text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full">
                        {step.duration}
                      </span>
                    )}

                    {/* Hover detail list */}
                    {activeStep === step.number && (
                      <div className="absolute top-full mt-4 w-52 bg-surface-secondary border border-indigo-500/15 rounded-xl p-4 z-20">
                        <ul className="space-y-1.5">
                          {step.items.map((item) => (
                            <li
                              key={item}
                              className="text-[13px] text-text-secondary flex items-start gap-2"
                            >
                              <span className="text-indigo-400/60 mt-0.5 flex-shrink-0">
                                <GitCommitHorizontal size={12} />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Always-visible items below timeline */}
              <div className="mt-10 grid grid-cols-5 gap-4">
                {timelineSteps.map((step) => (
                  <div key={step.number} className="px-1">
                    <ul className="space-y-1">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className="text-[13px] text-text-secondary flex items-start gap-1.5"
                        >
                          <span className="text-indigo-400/50 mt-[3px] flex-shrink-0">
                            ›
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: vertical timeline */}
            <div className="md:hidden flex flex-col">
              {timelineSteps.map((step, idx) => (
                <div key={step.number}>
                  <div className="flex items-start gap-4">
                    {/* Number circle */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-indigo-500/40 bg-indigo-500/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-indigo-400">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base font-bold text-text-primary">
                          {step.title}
                        </h4>
                        {step.duration && (
                          <span className="text-xs font-medium text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                            {step.duration}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-1">
                        {step.items.map((item) => (
                          <li
                            key={item}
                            className="text-[15px] text-text-secondary flex items-start gap-2"
                          >
                            <span className="text-indigo-400/50 mt-0.5 flex-shrink-0">
                              ›
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Vertical connector */}
                  {idx < timelineSteps.length - 1 && (
                    <div className="border-l-2 border-dashed border-indigo-500/20 h-8 ml-[19px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* TabPanel for info cards */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14">
            <TabPanel tabs={tabData} color="indigo">
              {(activeTab) => {
                if (activeTab === "routes") {
                  return (
                    <div className="space-y-5">
                      <h4 className="text-lg font-bold text-text-primary">
                        두 가지 인증 경로
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Standard */}
                        <div className="bg-indigo-500/[0.04] border border-indigo-500/10 rounded-xl p-5">
                          <p className="text-sm font-semibold text-indigo-400 mb-2">
                            직접 인증 (Standard)
                          </p>
                          <ul className="text-[15px] text-text-secondary space-y-1">
                            <li>BPJPH에 직접 신청</li>
                            <li>소요 3-6개월</li>
                            <li>비용 중</li>
                          </ul>
                        </div>

                        {/* MRA */}
                        <div className="bg-indigo-500/[0.04] border border-indigo-500/10 rounded-xl p-5">
                          <p className="text-sm font-semibold text-indigo-400 mb-2">
                            MRA 간소화 (SHLN)
                          </p>
                          <ul className="text-[15px] text-text-secondary space-y-1">
                            <li>한국 할랄 기관 인증 → 인도네시아 등록</li>
                            <li>소요 1-3개월</li>
                            <li>비용 저</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (activeTab === "updates") {
                  return (
                    <div>
                      <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                        <AlertTriangle size={18} className="text-amber-400" />
                        2025 규제 업데이트
                      </h4>
                      <ul className="space-y-3 text-[15px] text-text-secondary">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold flex-shrink-0 mt-0.5">
                            ·
                          </span>
                          <span>
                            <strong className="text-text-primary">Decree 221/2025</strong>{" "}
                            (시행일: 2025.12.15)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold flex-shrink-0 mt-0.5">
                            ·
                          </span>
                          <span>
                            <strong className="text-text-primary">CL 7/2025</strong>{" "}
                            의무 라벨링
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold flex-shrink-0 mt-0.5">
                            ·
                          </span>
                          <span>
                            식품/음료 데드라인:{" "}
                            <strong className="text-amber-400">2026.10.17</strong>까지
                            인증 필수
                          </span>
                        </li>
                      </ul>
                    </div>
                  );
                }

                if (activeTab === "categories") {
                  return (
                    <div>
                      <h4 className="text-lg font-bold text-text-primary mb-4">
                        카테고리별 필수 여부
                      </h4>
                      <ul className="space-y-3 text-[15px] text-text-secondary">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>
                            <strong className="text-text-primary">필수:</strong> 식품,
                            음료, 화장품, 의약품, 생활화학제품
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                          <span>
                            <strong className="text-text-primary">2026부터:</strong>{" "}
                            패션, 가전, 서비스
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                          <span>
                            <strong className="text-text-primary">비할랄 가능:</strong>{" "}
                            하람 원료 명시 시 &quot;Non-Halal&quot; 라벨 의무 부착
                          </span>
                        </li>
                      </ul>
                    </div>
                  );
                }

                return null;
              }}
            </TabPanel>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
