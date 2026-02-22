"use client";

import { Store, MapPin, Tent, ShoppingBag, PartyPopper, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Card from "@/components/ui/Card";
import TabPanel from "@/components/ui/TabPanel";
import ScrollReveal from "@/components/animation/ScrollReveal";

/* ── Data ────────────────────────────────────────────── */

const popupData = {
  title: "프리미엄 팝업스토어",
  icon: Tent,
  sections: [
    {
      heading: "자카르타",
      items: ["Grand Indonesia", "Central Park Mall", "PIK Avenue"],
    },
    {
      heading: "수라바야",
      items: ["Tunjungan Plaza", "Ciputra World"],
    },
    {
      heading: "발리",
      items: ["Beachwalk", "Seminyak Village"],
    },
  ],
  extras: [
    "기획→설치→운영→철수 풀 매니지먼트",
    "현지 통역사 상주 지원",
    "평균 팝업 기간: 2-4주",
  ],
};

const retailData = {
  title: "상설 리테일 입점",
  icon: ShoppingBag,
  sections: [
    {
      heading: "시나르마스 계열",
      items: ["유통채널 우선 입점"],
    },
    {
      heading: "K-뷰티",
      items: ["Guardian", "Watsons", "Sociolla"],
    },
    {
      heading: "K-푸드",
      items: ["Ranch Market", "Kem Chicks", "Grand Lucky"],
    },
    {
      heading: "편의점",
      items: ["2만+ 점포 네트워크"],
    },
  ],
  extras: [],
};

const eventData = {
  title: "체험형 마케팅 이벤트",
  icon: PartyPopper,
  sections: [
    {
      heading: "시식회 (K-푸드)",
      items: ["프리미엄 슈퍼마켓 내 시식 부스"],
    },
    {
      heading: "뷰티 체험 (K-뷰티)",
      items: ["메이크업 클래스", "피부 진단"],
    },
    {
      heading: "팬미팅/사인회",
      items: ["인플루언서 콜라보 오프라인 이벤트"],
    },
    {
      heading: "한류 페스티벌",
      items: ["부스 참여"],
    },
  ],
  extras: [],
};

const tabContentMap: Record<string, typeof popupData> = {
  popup: popupData,
  retail: retailData,
  event: eventData,
};

const tabs = [
  { id: "popup", label: "팝업스토어", icon: <Tent size={14} /> },
  { id: "retail", label: "리테일 입점", icon: <ShoppingBag size={14} /> },
  { id: "event", label: "체험 이벤트", icon: <PartyPopper size={14} /> },
];

/* ── City markers for the map ───────────────────────── */

const cities = [
  { name: "Jakarta", x: 195, y: 195 },
  { name: "Surabaya", x: 290, y: 200 },
  { name: "Bali", x: 325, y: 210 },
];

/* ── Indonesia Map SVG ──────────────────────────────── */

function IndonesiaMap() {
  return (
    <div className="w-full flex items-center justify-center">
      <svg
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-md"
      >
        {/* Simplified Indonesia archipelago outline */}
        {/* Sumatra */}
        <path
          d="M80 130 L95 110 L115 100 L130 110 L140 130 L150 155 L145 175 L135 195 L120 210 L105 215 L90 205 L80 185 L75 160 Z"
          stroke="rgba(6,182,212,0.3)"
          strokeWidth="1.5"
          fill="rgba(6,182,212,0.05)"
        />
        {/* Java */}
        <path
          d="M155 195 L180 188 L210 190 L240 188 L270 190 L300 195 L320 200 L310 208 L280 210 L250 208 L220 210 L190 208 L165 205 Z"
          stroke="rgba(6,182,212,0.3)"
          strokeWidth="1.5"
          fill="rgba(6,182,212,0.05)"
        />
        {/* Kalimantan (Borneo - Indonesian part) */}
        <path
          d="M200 90 L230 75 L260 70 L285 80 L295 100 L290 125 L280 145 L260 155 L240 150 L220 140 L210 120 L200 100 Z"
          stroke="rgba(6,182,212,0.3)"
          strokeWidth="1.5"
          fill="rgba(6,182,212,0.05)"
        />
        {/* Sulawesi */}
        <path
          d="M310 80 L325 70 L335 80 L340 100 L335 120 L340 135 L330 145 L320 135 L315 120 L310 100 Z"
          stroke="rgba(6,182,212,0.3)"
          strokeWidth="1.5"
          fill="rgba(6,182,212,0.05)"
        />
        {/* Bali / Nusa Tenggara */}
        <path
          d="M325 200 L340 198 L355 200 L370 198 L385 200 L380 208 L365 210 L350 208 L335 210 L325 205 Z"
          stroke="rgba(6,182,212,0.3)"
          strokeWidth="1.5"
          fill="rgba(6,182,212,0.05)"
        />
        {/* Papua */}
        <path
          d="M400 90 L420 80 L445 85 L460 100 L455 120 L445 140 L430 150 L415 145 L405 130 L400 110 Z"
          stroke="rgba(6,182,212,0.3)"
          strokeWidth="1.5"
          fill="rgba(6,182,212,0.05)"
        />

        {/* City markers */}
        {cities.map((city) => (
          <g key={city.name}>
            {/* Pin outer ring */}
            <circle
              cx={city.x}
              cy={city.y}
              r="8"
              fill="rgba(6,182,212,0.15)"
              stroke="rgba(6,182,212,0.5)"
              strokeWidth="1.5"
            />
            {/* Pin inner dot */}
            <circle
              cx={city.x}
              cy={city.y}
              r="3"
              fill="rgb(6,182,212)"
            />
            {/* City label */}
            <text
              x={city.x}
              y={city.y - 14}
              textAnchor="middle"
              className="fill-cyan-400 text-[11px] font-medium"
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ── Tab content renderer ───────────────────────────── */

function TabContent({ data }: { data: typeof popupData }) {
  const Icon = data.icon;
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/8 border border-cyan-500/15 flex items-center justify-center">
          <Icon size={20} strokeWidth={1.5} className="text-cyan-400" />
        </div>
        <h4 className="text-lg font-bold text-text-primary">{data.title}</h4>
      </div>

      <div className="space-y-4">
        {data.sections.map((section) => (
          <div key={section.heading}>
            <p className="text-sm font-semibold text-cyan-400 mb-1.5">
              {section.heading}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-text-secondary flex items-start gap-2"
                >
                  <ChevronRight
                    size={14}
                    className="text-cyan-500/60 mt-0.5 flex-shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {data.extras.length > 0 && (
        <div className="mt-5 pt-4 border-t border-cyan-500/20 space-y-1.5">
          {data.extras.map((extra) => (
            <p
              key={extra}
              className="text-xs text-text-tertiary flex items-start gap-2"
            >
              <span className="text-cyan-500/50 flex-shrink-0 mt-0.5">
                <MapPin size={12} />
              </span>
              {extra}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Section Component ─────────────────────────── */

export default function OfflineSection() {
  return (
    <section
      id="offline"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-slightly-lighter"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 2 · 마케팅 & 브랜딩"
            title="오프라인 팝업 & 리테일 입점"
            subtitle="온라인을 넘어, 인도네시아 현장에서 브랜드를 체험하게 합니다"
            icon={<ServiceIcon serviceId="offline" color="cyan" size="sm" />}
            align="center"
          />
        </ScrollReveal>

        {/* Two-column layout: Map + Tabs */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Indonesia Map */}
          <ScrollReveal direction="left" delay={0.1}>
            <Card variant="surface" color="cyan">
              <h4 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-4 flex items-center gap-2">
                <MapPin size={14} className="text-cyan-400" />
                Coverage Area
              </h4>
              <IndonesiaMap />
              {/* City legend */}
              <div className="mt-4 flex flex-wrap gap-4 justify-center">
                {cities.map((city) => (
                  <div key={city.name} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span className="text-xs text-text-secondary font-medium">
                      {city.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>

          {/* Right: TabPanel */}
          <ScrollReveal direction="right" delay={0.2}>
            <Card variant="surface" color="cyan">
              <TabPanel tabs={tabs} color="cyan">
                {(activeTab) => {
                  const data = tabContentMap[activeTab];
                  if (!data) return null;
                  return <TabContent data={data} />;
                }}
              </TabPanel>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
