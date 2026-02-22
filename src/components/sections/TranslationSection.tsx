"use client";

import {
  Languages,
  FileText,
  Tag,
  Scale,
  Users,
  Film,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import ScrollReveal from "@/components/animation/ScrollReveal";

/* ── Translation service cards data ────────────────────────────── */
const translationServices = [
  {
    icon: FileText,
    title: "마케팅 콘텐츠 현지화 번역",
    desc: "브랜드 톤앤매너를 유지하면서 인도네시아 소비자에게 자연스럽게 전달되는 마케팅 카피를 제작합니다.",
    bullets: [
      "SNS 캡션, 광고 카피 현지화",
      "홈페이지/앱 UI 텍스트 번역",
      "브랜드 슬로건 트랜스크리에이션",
    ],
  },
  {
    icon: Tag,
    title: "제품 라벨 / 설명서 번역",
    desc: "인도네시아 BPOM 규정에 맞는 정확한 제품 라벨 및 사용 설명서를 제작합니다.",
    bullets: [
      "BPOM 규정 준수 라벨 번역",
      "성분표 인도네시아어 변환",
      "사용법/주의사항 현지화",
    ],
  },
  {
    icon: Scale,
    title: "계약서 / 법률 문서 전문 번역",
    desc: "법률 용어에 정통한 전문 번역사가 정확하고 신뢰할 수 있는 계약 문서를 제공합니다.",
    bullets: [
      "계약서, MOU, NDA 번역",
      "정부 제출 서류 공증 번역",
      "법인 설립/인허가 문서 번역",
    ],
  },
  {
    icon: Users,
    title: "비즈니스 미팅 동시통역 지원",
    desc: "바이어 상담부터 정부 미팅까지, 현장에서 즉시 투입 가능한 전문 통역사를 연결합니다.",
    bullets: [
      "동시통역 / 순차통역 선택",
      "자카르타, 수라바야, 발리 투입",
      "공장 실사 / 전시회 동행 통역",
    ],
  },
  {
    icon: Film,
    title: "영상 자막 및 더빙 제작",
    desc: "마케팅 영상, 교육 콘텐츠 등에 인도네시아어 자막 또는 더빙을 추가합니다.",
    bullets: [
      "마케팅 영상 자막 제작",
      "인도네시아어 성우 더빙",
      "YouTube/SNS 숏폼 자막 번역",
    ],
  },
];

export default function TranslationSection() {
  return (
    <section
      id="translation"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-amber"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 4 - Translation"
            title="전문 통번역 서비스"
            subtitle="언어 장벽 없이, 인도네시아 비즈니스를 진행하세요"
            icon={<Languages size={16} />}
            align="center"
          />
        </ScrollReveal>

        {/* ── Horizontal scroll carousel ──────────────────────── */}
        <ScrollReveal delay={0.15}>
          <HorizontalScroll
            showDots
            itemCount={translationServices.length}
            className="mt-4"
          >
            {translationServices.map((service) => (
              <div
                key={service.title}
                className="snap-start min-w-[280px] max-w-[320px] flex-shrink-0"
              >
                <Card
                  variant="interactive"
                  color="amber"
                  className="h-full"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <service.icon size={22} className="text-amber-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-text-primary mb-2 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-amber-400/60 flex-shrink-0 mt-0.5"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </HorizontalScroll>
        </ScrollReveal>
      </div>
    </section>
  );
}
