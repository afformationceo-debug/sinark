"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";
import ScrollReveal from "@/components/animation/ScrollReveal";

/* ────────────────────────────────────────────────────────────────
   Stat card data — self-contained
   ──────────────────────────────────────────────────────────────── */

interface StatCard {
  icon: string;
  end: number;
  prefix?: string;
  suffix: string;
  decimals: number;
  label: string;
  description: string;
  r: number;
  g: number;
  b: number;
  variant: "indigo" | "cyan" | "emerald" | "amber";
}

const stats: StatCard[] = [
  {
    icon: "👥",
    end: 2.8,
    suffix: "억명",
    decimals: 1,
    label: "인구",
    description: "세계 4위, 동남아 최대 소비시장",
    r: 99, g: 102, b: 241, // indigo
    variant: "indigo",
  },
  {
    icon: "🛒",
    end: 751,
    prefix: "$",
    suffix: "억",
    decimals: 0,
    label: "이커머스 시장",
    description: "2024년 기준, 연 15.2% 성장 → 2032년 $2,305억",
    r: 6, g: 182, b: 212, // cyan
    variant: "cyan",
  },
  {
    icon: "🟠",
    end: 187,
    prefix: "$",
    suffix: "억",
    decimals: 0,
    label: "쇼피 GMV",
    description: "인도네시아 이커머스 1위 (36% 점유율)",
    r: 16, g: 185, b: 129, // emerald
    variant: "emerald",
  },
  {
    icon: "📱",
    end: 1.27,
    suffix: "억명",
    decimals: 2,
    label: "틱톡 사용자",
    description: "세계 2위 틱톡 시장, 소셜커머스 급성장",
    r: 245, g: 158, b: 11, // amber
    variant: "amber",
  },
  {
    icon: "💄",
    end: 30,
    prefix: "+",
    suffix: "%/년",
    decimals: 0,
    label: "K-뷰티 수요",
    description: "인도네시아 K-뷰티 수입 매년 30%+ 성장",
    r: 99, g: 102, b: 241, // indigo
    variant: "indigo",
  },
  {
    icon: "💰",
    end: 7000,
    suffix: "만+",
    decimals: 0,
    label: "중산층 인구",
    description: "구매력 있는 소비자층 급속 확대",
    r: 6, g: 182, b: 212, // cyan
    variant: "cyan",
  },
];

/* ────────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────────── */

export default function MarketSection() {
  return (
    <section id="market" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-cyan grid-pattern">
      {/* Subtle radial gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Floating geometric decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[8%] w-24 h-24 rounded-full border border-brand-cyan/10 animate-float-slow" />
        <div className="absolute bottom-[15%] right-[5%] w-16 h-16 rotate-45 border border-brand-indigo/10 animate-float-reverse" />
        <div className="absolute top-[50%] left-[90%] w-3 h-3 rounded-full bg-brand-cyan/20 animate-pulse-glow" />
        <div className="absolute top-[25%] right-[85%] w-2 h-2 rounded-full bg-brand-indigo/20 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="숫자가 말하는 기회"
            title="왜 인도네시아인가?"
            subtitle="동남아 최대 시장의 폭발적 성장 데이터"
            align="center"
          />
        </ScrollReveal>

        {/* ── Stats grid ──────────────────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <ScrollReveal key={stat.label} delay={0.1 + idx * 0.05}>
              <div
                className={`rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] corner-dots corner-dots-${stat.variant}${idx === 0 ? " accent-bar-cyan" : ""}${idx === 3 ? " accent-bar-indigo" : ""}`}
                style={{
                  background: `linear-gradient(135deg, rgba(${stat.r},${stat.g},${stat.b},0.2) 0%, rgba(${stat.r},${stat.g},${stat.b},0.1) 100%)`,
                  border: `1px solid rgba(${stat.r},${stat.g},${stat.b},0.35)`,
                  boxShadow: `0 0 30px rgba(${stat.r},${stat.g},${stat.b},0.15)`,
                }}
              >
                {/* Icon badge */}
                <div className="mb-4">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-2xl"
                    style={{
                      background: `rgba(${stat.r},${stat.g},${stat.b},0.15)`,
                      border: `1px solid rgba(${stat.r},${stat.g},${stat.b},0.3)`,
                      boxShadow: `0 0 20px rgba(${stat.r},${stat.g},${stat.b},0.1)`,
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>

                {/* Counter value */}
                <Counter
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  duration={2200}
                  className="text-4xl md:text-5xl font-black font-display tracking-tight text-text-primary"
                  style={{ color: '#f9fafb' }}
                />

                {/* Label */}
                <p className="text-base font-bold mt-2">{stat.label}</p>

                {/* Description */}
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Bottom quote ────────────────────────────────────── */}
        <ScrollReveal delay={0.5}>
          <p className="mt-16 text-center text-lg md:text-xl italic text-text-secondary leading-relaxed max-w-3xl mx-auto">
            &ldquo;인도네시아는 더 이상 &lsquo;옵션&rsquo;이 아닙니다.
            <br className="hidden sm:block" />
            K브랜드의{" "}
            <span className="gradient-text font-bold not-italic">
              필수
            </span>{" "}
            시장입니다.&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
