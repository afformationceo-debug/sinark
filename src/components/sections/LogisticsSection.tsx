"use client";

import {
  Factory,
  Ship,
  Warehouse,
  PackageCheck,
  Truck,
  Store,
  BarChart3,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const detailCards = [
  {
    number: "01",
    title: "국제 물류 & 통관",
    icon: Ship,
    items: [
      "해상/항공 운송",
      "HS 코드 분류 & 관세율 최적화",
      "통관 서류 대행",
      "보세창고 활용",
    ],
  },
  {
    number: "02",
    title: "온라인 풀필먼트 (B2C)",
    icon: PackageCheck,
    items: [
      "자카르타/반둥 풀필먼트 센터",
      "48시간 출고 SLA",
      "쇼피/틱톡샵 API 연동",
      "J&T/SiCepat 배송",
    ],
  },
  {
    number: "03",
    title: "오프라인 유통 (B2B)",
    icon: Store,
    items: [
      "Ranch Market, Kem Chicks",
      "Indomaret (21,000+)",
      "Guardian, Watsons",
    ],
  },
  {
    number: "04",
    title: "재고 관리 & 리포팅",
    icon: BarChart3,
    items: [
      "실시간 재고 모니터링",
      "리오더 자동 알림",
      "월간 리포트",
    ],
  },
];

/* SVG Flow Diagram Component */
function FlowDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      {/* Desktop SVG flow */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 900 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-4xl mx-auto"
          role="img"
          aria-label="물류 흐름도: 한국 공장에서 자카르타 물류센터를 거쳐 3개 유통 채널로 분기"
        >
          {/* Connection lines: top row */}
          <path
            d="M 200 80 L 330 80"
            stroke="rgb(99 102 241 / 0.3)"
            strokeWidth="2"
            strokeDasharray="6 4"
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M 530 80 L 660 80"
            stroke="rgb(99 102 241 / 0.3)"
            strokeWidth="2"
            strokeDasharray="6 4"
            markerEnd="url(#arrowhead)"
          />

          {/* Branching lines from center bottom */}
          <path
            d="M 780 110 L 780 180"
            stroke="rgb(99 102 241 / 0.3)"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
          {/* Branch to left */}
          <path
            d="M 780 180 L 450 180 L 450 210"
            stroke="rgb(99 102 241 / 0.3)"
            strokeWidth="2"
            strokeDasharray="6 4"
            markerEnd="url(#arrowhead)"
          />
          {/* Branch to center-right */}
          <path
            d="M 780 180 L 780 210"
            stroke="rgb(99 102 241 / 0.3)"
            strokeWidth="2"
            strokeDasharray="6 4"
            markerEnd="url(#arrowhead)"
          />
          {/* Branch to far right - but keep within viewbox */}
          <path
            d="M 780 180 L 450 180"
            stroke="rgb(99 102 241 / 0.3)"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
          <path
            d="M 450 180 L 150 180 L 150 210"
            stroke="rgb(99 102 241 / 0.3)"
            strokeWidth="2"
            strokeDasharray="6 4"
            markerEnd="url(#arrowhead)"
          />

          {/* Arrow marker */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="8"
              markerHeight="6"
              refX="8"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 8 3, 0 6"
                fill="rgb(99 102 241 / 0.4)"
              />
            </marker>
          </defs>

          {/* Node 1: 한국 공장 */}
          <rect
            x="30"
            y="45"
            width="170"
            height="70"
            rx="14"
            fill="rgb(99 102 241 / 0.06)"
            stroke="rgb(99 102 241 / 0.2)"
            strokeWidth="1"
          />
          <foreignObject x="30" y="45" width="170" height="70">
            <div className="flex items-center justify-center gap-2 h-full px-3">
              <Factory size={20} className="text-indigo-400 flex-shrink-0" />
              <span className="text-sm font-semibold text-text-primary">
                한국 공장
              </span>
            </div>
          </foreignObject>

          {/* Node 2: 국제 운송 */}
          <rect
            x="330"
            y="45"
            width="200"
            height="70"
            rx="14"
            fill="rgb(99 102 241 / 0.06)"
            stroke="rgb(99 102 241 / 0.2)"
            strokeWidth="1"
          />
          <foreignObject x="330" y="45" width="200" height="70">
            <div className="flex items-center justify-center gap-2 h-full px-3">
              <Ship size={20} className="text-indigo-400 flex-shrink-0" />
              <span className="text-sm font-semibold text-text-primary">
                국제 운송
              </span>
            </div>
          </foreignObject>

          {/* Node 3: 자카르타 물류센터 */}
          <rect
            x="660"
            y="45"
            width="210"
            height="70"
            rx="14"
            fill="rgb(99 102 241 / 0.08)"
            stroke="rgb(99 102 241 / 0.3)"
            strokeWidth="1"
          />
          <foreignObject x="660" y="45" width="210" height="70">
            <div className="flex items-center justify-center gap-2 h-full px-3">
              <Warehouse size={20} className="text-indigo-400 flex-shrink-0" />
              <span className="text-sm font-semibold text-text-primary">
                자카르타 물류센터
              </span>
            </div>
          </foreignObject>

          {/* Branch Node 1: 온라인 풀필먼트 */}
          <rect
            x="60"
            y="215"
            width="180"
            height="60"
            rx="12"
            fill="rgb(99 102 241 / 0.04)"
            stroke="rgb(99 102 241 / 0.15)"
            strokeWidth="1"
          />
          <foreignObject x="60" y="215" width="180" height="60">
            <div className="flex items-center justify-center gap-2 h-full px-3">
              <PackageCheck size={16} className="text-indigo-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-text-primary">
                온라인 풀필먼트
              </span>
            </div>
          </foreignObject>

          {/* Branch Node 2: 오프라인 유통 */}
          <rect
            x="360"
            y="215"
            width="180"
            height="60"
            rx="12"
            fill="rgb(99 102 241 / 0.04)"
            stroke="rgb(99 102 241 / 0.15)"
            strokeWidth="1"
          />
          <foreignObject x="360" y="215" width="180" height="60">
            <div className="flex items-center justify-center gap-2 h-full px-3">
              <Truck size={16} className="text-indigo-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-text-primary">
                오프라인 유통
              </span>
            </div>
          </foreignObject>

          {/* Branch Node 3: 리테일 입점 */}
          <rect
            x="690"
            y="215"
            width="180"
            height="60"
            rx="12"
            fill="rgb(99 102 241 / 0.04)"
            stroke="rgb(99 102 241 / 0.15)"
            strokeWidth="1"
          />
          <foreignObject x="690" y="215" width="180" height="60">
            <div className="flex items-center justify-center gap-2 h-full px-3">
              <Store size={16} className="text-indigo-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-text-primary">
                리테일 입점
              </span>
            </div>
          </foreignObject>
        </svg>
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden flex flex-col items-center gap-3">
        {/* Main flow nodes */}
        {[
          { label: "한국 공장", icon: Factory },
          { label: "국제 운송", icon: Ship },
          { label: "자카르타 물류센터", icon: Warehouse },
        ].map((node, idx) => (
          <div key={node.label} className="flex flex-col items-center">
            <div className="flex items-center gap-2.5 bg-indigo-500/[0.06] border border-indigo-500/20 rounded-xl px-5 py-3.5 min-w-[200px] justify-center">
              <node.icon size={18} className="text-indigo-400" />
              <span className="text-sm font-semibold text-text-primary">
                {node.label}
              </span>
            </div>
            {idx < 2 && (
              <div className="border-l-2 border-dashed border-indigo-500/25 h-6" />
            )}
          </div>
        ))}

        {/* Branch connector */}
        <div className="border-l-2 border-dashed border-indigo-500/25 h-6" />

        {/* Branch nodes */}
        <div className="flex flex-col items-center gap-3">
          {[
            { label: "온라인 풀필먼트", icon: PackageCheck },
            { label: "오프라인 유통", icon: Truck },
            { label: "리테일 입점", icon: Store },
          ].map((node) => (
            <div
              key={node.label}
              className="flex items-center gap-2 bg-indigo-500/[0.04] border border-indigo-500/15 rounded-lg px-4 py-2.5 min-w-[180px] justify-center"
            >
              <node.icon size={14} className="text-indigo-400" />
              <span className="text-xs font-semibold text-text-primary">
                {node.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LogisticsSection() {
  return (
    <section
      id="logistics"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-indigo"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 1 · 시장진입 준비"
            title="온/오프라인 물류 인프라 구축"
            subtitle="한국에서 인도네시아 고객 손까지, 완벽한 물류 체인"
            icon={<ServiceIcon serviceId="logistics" color="indigo" size="sm" />}
            align="center"
          />
        </ScrollReveal>

        {/* SVG Flow Diagram */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16">
            <FlowDiagram />
          </div>
        </ScrollReveal>

        {/* Detail Cards: horizontal scroll on mobile, 2x2 grid on desktop */}
        <div className="mt-14">
          {/* Desktop: 2x2 grid */}
          <div className="hidden md:block">
            <StaggerChildren
              staggerDelay={0.12}
              className="grid grid-cols-2 gap-6"
            >
              {detailCards.map((card) => {
                const IconComp = card.icon;
                return (
                  <Card
                    key={card.title}
                    variant="interactive"
                    color="indigo"
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-black text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 w-8 h-8 rounded-lg flex items-center justify-center font-mono">
                        {card.number}
                      </span>
                      <h4 className="text-lg font-bold text-text-primary">
                        {card.title}
                      </h4>
                      <IconComp
                        size={16}
                        className="text-indigo-400/40 ml-auto"
                      />
                    </div>
                    <ul className="space-y-1.5">
                      {card.items.map((item) => (
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
                  </Card>
                );
              })}
            </StaggerChildren>
          </div>

          {/* Mobile: horizontal scroll */}
          <ScrollReveal delay={0.3} className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4">
              {detailCards.map((card) => {
                const IconComp = card.icon;
                return (
                  <div
                    key={card.title}
                    className="snap-start flex-shrink-0 w-[280px]"
                  >
                    <Card
                      variant="interactive"
                      color="indigo"
                      className="flex flex-col h-full"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-black text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 w-8 h-8 rounded-lg flex items-center justify-center font-mono">
                          {card.number}
                        </span>
                        <h4 className="text-base font-bold text-text-primary">
                          {card.title}
                        </h4>
                        <IconComp
                          size={16}
                          className="text-indigo-400/40 ml-auto"
                        />
                      </div>
                      <ul className="space-y-1.5">
                        {card.items.map((item) => (
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
                    </Card>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
