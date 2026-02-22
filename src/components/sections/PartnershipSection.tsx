"use client";

import { Rocket, Building2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/animation/ScrollReveal";

const afformationBullets = [
  "2021년 창립, 마케팅 기술 혁신",
  "누적 100억+ 병원 매출 기여 실적",
  "AI 기반 인플루언서 발굴 솔루션 (ScoutManager)",
  "대만·일본·영미권 해외 마케팅 운영 경험",
  "LLM 기반 풀퍼널 마케팅 자동화 기술 보유",
  "다국어 콘텐츠 제작 & 현지화 전문",
];

const sinarmasBullets = [
  "1970년 설립, 50년+ 역사",
  "7대 사업 부문 운영 (펄프&제지, 금융, 부동산, 식품, 통신, 에너지, 헬스케어)",
  "수십만 명 직접/간접 고용",
  "인도네시아 GDP 기여 핵심 기업군",
];

export default function PartnershipSection() {
  return (
    <section
      id="partnership"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-slightly-lighter"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="최강의 조합"
            title="Afformation &times; Sinarmas Group"
            subtitle="K브랜드 전문 마케팅 테크 &times; 인도네시아 최대 인프라"
            align="center"
          />
        </ScrollReveal>

        {/* ── Two-column layout with center connector ─────────── */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-center">
          {/* Left card -- Afformation */}
          <ScrollReveal direction="left" delay={0.2}>
            <Card variant="elevated" color="indigo" className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10">
                  <Rocket className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    Afformation
                  </h3>
                  <p className="text-text-secondary text-xs tracking-wide">
                    마케팅 테크 전문 기업
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/6 mb-5" />

              <ul className="space-y-3 mb-6">
                {afformationBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] text-text-secondary leading-relaxed"
                  >
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-lg bg-white/[0.02] border border-white/6 px-4 py-3">
                <p className="text-xs text-text-tertiary">
                  <span className="text-indigo-400 font-semibold">핵심 역량:</span>{" "}
                  마케팅 전략 / AI 자동화 / 글로벌 운영
                </p>
              </div>
            </Card>
          </ScrollReveal>

          {/* Center connector */}
          <ScrollReveal delay={0.4} className="flex items-center justify-center py-4 lg:py-0 lg:px-2">
            <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center">
              <span className="text-lg font-semibold text-text-secondary">&times;</span>
            </div>
          </ScrollReveal>

          {/* Right card -- Sinarmas Group */}
          <ScrollReveal direction="right" delay={0.2}>
            <Card variant="elevated" color="amber" className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10">
                  <Building2 className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    Sinarmas Group
                  </h3>
                  <p className="text-text-secondary text-xs tracking-wide">
                    인도네시아 최대 재벌 그룹
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/6 mb-5" />

              <ul className="space-y-3 mb-6">
                {sinarmasBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] text-text-secondary leading-relaxed"
                  >
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-lg bg-white/[0.02] border border-white/6 px-4 py-3">
                <p className="text-xs text-text-tertiary">
                  <span className="text-amber-400 font-semibold">핵심 역량:</span>{" "}
                  인도네시아 유통망 / 정부 네트워크 / 현지 인프라
                </p>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        {/* ── Bottom banner ───────────────────────────────────── */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16">
            <Card variant="featured" color="indigo" className="text-center py-8 px-6">
              <p className="text-[15px] md:text-base font-medium text-text-secondary leading-relaxed">
                <span className="gradient-text font-semibold">K브랜드 전문 마케팅 테크</span>
                {" "}&times;{" "}
                <span className="text-amber-400 font-semibold">인도네시아 최대 인프라</span>
                <br className="hidden sm:block" />
                <span className="mt-2 block text-text-primary">
                  = 당신의 브랜드를 위한 최강 진출 파트너십
                </span>
              </p>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
