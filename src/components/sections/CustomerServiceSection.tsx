"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import DiamondConnector from "@/components/ui/DiamondConnector";
import NodeConnector from "@/components/ui/NodeConnector";
import ScrollReveal from "@/components/animation/ScrollReveal";

const whatsappFeatures = [
  "인도네시아 1위 메신저 (DAU 1억+)",
  "자동 인사/FAQ 챗봇 설정",
  "주문 상태 자동 알림",
  "카탈로그 기능으로 상품 안내",
];

const middleNodes = [
  {
    title: "챗봇 자동응답",
    items: [
      "FAQ 기반 자동 응답",
      "주문/배송 상태 조회",
      "24시간 무중단 운영",
    ],
  },
  {
    title: "CS팀 운영",
    items: [
      "인도네시아어/영어/한국어 3개 국어",
      "평일 09:00-21:00 (WIB) 운영",
      "평균 응답 시간 목표: 30분 이내",
      "에스컬레이션 프로세스 수립",
    ],
  },
  {
    title: "CRM 시스템",
    items: [
      "문의 티켓 시스템",
      "VIP 고객 관리 프로세스",
      "월간 CS 리포트",
    ],
  },
];

const satisfactionFeatures = [
  "고객 만족도(CSAT) 정기 조사",
  "리뷰 관리 & 네거티브 대응",
  "재구매 유도 프로그램",
];

export default function CustomerServiceSection() {
  return (
    <section id="cs" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-amber phase-accent-amber">
      <div className="max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 4 · 운영 & 성장"
            title="인도네시아 고객 서비스 채널"
            subtitle="현지 언어로, 현지 시간에, 현지 채널로 고객을 응대합니다"
            icon="💬"
            align="center"
          />
        </ScrollReveal>

        {/* ── Node diagram ────────────────────────────────────── */}
        <div className="mt-16 flex flex-col items-center">
          {/* Top node: WhatsApp Business */}
          <ScrollReveal delay={0.1}>
            <GlowCard variant="amber" className="max-w-md w-full text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="icon-badge icon-badge-amber">💬</div>
                <h3 className="text-xl font-bold text-text-primary">
                  WhatsApp Business API
                </h3>
              </div>
              <ul className="space-y-2.5 text-left">
                {whatsappFeatures.map((item) => (
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
          </ScrollReveal>

          {/* Vertical connector + diamond */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-center py-1">
              <NodeConnector variant="dashed" color="amber" vertical />
              <DiamondConnector color="amber" size="md" animated />
              <NodeConnector variant="dashed" color="amber" vertical />
            </div>
          </ScrollReveal>

          {/* Middle row: 3 branching nodes */}
          <ScrollReveal delay={0.3} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {middleNodes.map((node) => (
                <GlowCard key={node.title} variant="amber">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="icon-badge icon-badge-amber">
                      {node.title === "챗봇 자동응답" ? "🤖" : node.title === "CS팀 운영" ? "👥" : "📋"}
                    </div>
                    <h3 className="text-lg font-bold text-text-primary">
                      {node.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {node.items.map((item) => (
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
            </div>
          </ScrollReveal>

          {/* Vertical connectors merge */}
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col items-center py-1">
              <NodeConnector variant="dashed" color="amber" vertical />
              <DiamondConnector color="amber" size="md" animated />
              <NodeConnector variant="dashed" color="amber" vertical />
            </div>
          </ScrollReveal>

          {/* Bottom node: Customer satisfaction */}
          <ScrollReveal delay={0.5}>
            <GlowCard variant="amber" className="max-w-md w-full text-center">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                고객 만족도 관리
              </h3>
              <ul className="space-y-2.5 text-left">
                {satisfactionFeatures.map((item) => (
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
