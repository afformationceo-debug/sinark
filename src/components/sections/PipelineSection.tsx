"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animation/ScrollReveal";
import PipelineGraph from "@/components/sections/PipelineGraph";

export default function PipelineSection() {
  return (
    <section
      id="pipeline"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden section-slightly-lighter"
    >
      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            badge="풀퍼널 서비스"
            title="원스톱 풀퍼널 파이프라인"
            subtitle="K브랜드의 인도네시아 시장 진출, 처음부터 끝까지"
            align="center"
          />
        </ScrollReveal>

        {/* Desktop: Full SVG node graph */}
        <div className="mt-12 hidden lg:block">
          <PipelineGraph />
        </div>

        {/* Tablet: Simplified 2-row */}
        <div className="mt-12 hidden md:block lg:hidden">
          <PipelineGraph />
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="mt-12 md:hidden">
          <MobileTimeline />
        </div>

        <ScrollReveal delay={0.5}>
          <p className="mt-10 text-sm text-text-tertiary text-center">
            모든 서비스가 유기적으로 연결된 원스톱 풀퍼널 파이프라인
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* Mobile vertical timeline fallback */
import {
  Building2,
  Megaphone,
  ShoppingCart,
  TrendingUp,
  Shield,
  FileCheck,
  Package,
  Users,
  Store,
  Smartphone,
  ShoppingBag,
  Play,
  Globe,
  Headphones,
  Languages,
  BarChart3,
} from "lucide-react";

const mobilePhases = [
  {
    label: "시장진입 준비",
    color: "#6366f1",
    colorClass: "border-indigo-500/20 bg-indigo-500/5",
    iconColor: "text-indigo-400",
    Icon: Building2,
    services: [
      { label: "할랄 인증", Icon: Shield },
      { label: "인허가", Icon: FileCheck },
      { label: "물류", Icon: Package },
    ],
  },
  {
    label: "마케팅 & 브랜딩",
    color: "#06b6d4",
    colorClass: "border-cyan-500/20 bg-cyan-500/5",
    iconColor: "text-cyan-400",
    Icon: Megaphone,
    services: [
      { label: "인플루언서", Icon: Users },
      { label: "오프라인", Icon: Store },
      { label: "SNS", Icon: Smartphone },
    ],
  },
  {
    label: "세일즈 채널",
    color: "#10b981",
    colorClass: "border-emerald-500/20 bg-emerald-500/5",
    iconColor: "text-emerald-400",
    Icon: ShoppingCart,
    services: [
      { label: "쇼피", Icon: ShoppingBag },
      { label: "틱톡샵", Icon: Play },
      { label: "D2C", Icon: Globe },
    ],
  },
  {
    label: "운영 & 성장",
    color: "#f59e0b",
    colorClass: "border-amber-500/20 bg-amber-500/5",
    iconColor: "text-amber-400",
    Icon: TrendingUp,
    services: [
      { label: "CS", Icon: Headphones },
      { label: "통번역", Icon: Languages },
      { label: "분석", Icon: BarChart3 },
    ],
  },
];

function MobileTimeline() {
  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/20 via-cyan-500/20 via-emerald-500/20 to-amber-500/20" />

      <div className="space-y-8">
        {mobilePhases.map((phase, i) => (
          <ScrollReveal key={phase.label} delay={0.1 + i * 0.08}>
            <div className="relative">
              {/* Dot on timeline */}
              <div
                className="absolute -left-8 top-3 w-2 h-2 rounded-full"
                style={{ background: phase.color }}
              />

              {/* Phase header */}
              <div className={`rounded-xl border p-4 ${phase.colorClass}`}>
                <div className="flex items-center gap-2 mb-3">
                  <phase.Icon size={16} strokeWidth={1.5} className={phase.iconColor} />
                  <span className="text-sm font-semibold text-text-primary">{phase.label}</span>
                </div>

                {/* Services */}
                <div className="grid grid-cols-3 gap-2">
                  {phase.services.map((svc) => (
                    <div key={svc.label} className="flex flex-col items-center gap-1 py-2">
                      <svc.Icon size={14} strokeWidth={1.5} className={phase.iconColor} />
                      <span className="text-[10px] text-text-tertiary">{svc.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
