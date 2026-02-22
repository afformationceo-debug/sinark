"use client";

import { Users, ShoppingCart, ShoppingBag, Play, Sparkles, Wallet } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Counter from "@/components/ui/Counter";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { RadialGauge, ProgressBar, DonutRing, Sparkline } from "@/components/ui/DataViz";

/* ────────────────────────────────────────────────────────────────
   Sparkline sample data — e-commerce market growth trajectory
   ──────────────────────────────────────────────────────────────── */
const ecomGrowthData = [180, 220, 280, 340, 410, 490, 580, 670, 751];

export default function MarketSection() {
  return (
    <section
      id="market"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-cyan"
    >
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

        {/* ── Bento grid ──────────────────────────────────────── */}
        <div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{
            gridTemplateRows: "auto auto auto",
          }}
        >
          {/* ─ Population (row 1-2, col 1) ───────────────────── */}
          <ScrollReveal delay={0.1} className="sm:row-span-2">
            <Card variant="elevated" color="indigo" className="h-full flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 mb-4">
                <Users className="w-5 h-5 text-indigo-400" />
              </div>
              <p className="text-xs tracking-wide uppercase text-text-tertiary mb-3">인구</p>
              <RadialGauge
                value={2.8}
                max={5}
                label="2.8억"
                color="#6366f1"
                size={140}
                className="mb-4"
              />
              <Counter
                end={2.8}
                suffix="억명"
                decimals={1}
                duration={2200}
                className="text-2xl md:text-3xl font-semibold text-text-primary"
              />
              <p className="text-[15px] text-text-secondary mt-2 leading-relaxed">
                세계 4위, 동남아 최대 소비시장
              </p>
            </Card>
          </ScrollReveal>

          {/* ─ E-commerce (row 1, col 2-3) ───────────────────── */}
          <ScrollReveal delay={0.15} className="sm:col-span-1 lg:col-span-2">
            <Card variant="elevated" color="cyan" className="h-full">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 mb-3">
                    <ShoppingCart className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-xs tracking-wide uppercase text-text-tertiary mb-1">이커머스 시장</p>
                  <Counter
                    end={751}
                    prefix="$"
                    suffix="억"
                    decimals={0}
                    duration={2200}
                    className="text-2xl md:text-3xl font-semibold text-text-primary"
                  />
                  <p className="text-[15px] text-text-secondary mt-2 leading-relaxed">
                    2024년 기준, 연 15.2% 성장 &rarr; 2032년 $2,305억
                  </p>
                </div>
                <Sparkline
                  data={ecomGrowthData}
                  color="#06b6d4"
                  width={160}
                  height={60}
                  className="flex-shrink-0 mt-4"
                />
              </div>
            </Card>
          </ScrollReveal>

          {/* ─ Shopee GMV (row 2, col 2) ─────────────────────── */}
          <ScrollReveal delay={0.2}>
            <Card variant="elevated" color="emerald" className="h-full">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 mb-3">
                <ShoppingBag className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-xs tracking-wide uppercase text-text-tertiary mb-1">쇼피 GMV</p>
              <Counter
                end={187}
                prefix="$"
                suffix="억"
                decimals={0}
                duration={2200}
                className="text-2xl md:text-3xl font-semibold text-text-primary"
              />
              <ProgressBar
                value={187}
                max={520}
                label="이커머스 점유율"
                suffix="억 (36%)"
                color="#10b981"
                className="mt-4"
              />
              <p className="text-[15px] text-text-secondary mt-3 leading-relaxed">
                인도네시아 이커머스 1위 (36% 점유율)
              </p>
            </Card>
          </ScrollReveal>

          {/* ─ TikTok (row 2, col 3) ─────────────────────────── */}
          <ScrollReveal delay={0.25}>
            <Card variant="elevated" color="amber" className="h-full">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 mb-3">
                    <Play className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-xs tracking-wide uppercase text-text-tertiary mb-1">틱톡 사용자</p>
                  <Counter
                    end={1.27}
                    suffix="억명"
                    decimals={2}
                    duration={2200}
                    className="text-2xl md:text-3xl font-semibold text-text-primary"
                  />
                  <p className="text-[15px] text-text-secondary mt-2 leading-relaxed">
                    세계 2위 틱톡 시장, 소셜커머스 급성장
                  </p>
                </div>
                <DonutRing
                  value={1.27}
                  max={2}
                  label="1.27억"
                  color="#f59e0b"
                  size={72}
                  className="flex-shrink-0 mt-2"
                />
              </div>
            </Card>
          </ScrollReveal>

          {/* ─ K-Beauty (row 3, col 1) ───────────────────────── */}
          <ScrollReveal delay={0.3}>
            <Card variant="elevated" color="indigo" className="h-full">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 mb-3">
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </div>
              <p className="text-xs tracking-wide uppercase text-text-tertiary mb-1">K-뷰티 수요</p>
              <div className="flex items-baseline gap-1">
                <Counter
                  end={30}
                  prefix="+"
                  suffix="%"
                  decimals={0}
                  duration={2200}
                  className="text-2xl md:text-3xl font-semibold text-text-primary"
                />
                <span className="text-lg text-text-secondary">/년</span>
              </div>
              <p className="text-[15px] text-text-secondary mt-2 leading-relaxed">
                인도네시아 K-뷰티 수입 매년 30%+ 성장
              </p>
            </Card>
          </ScrollReveal>

          {/* ─ Middle class (row 3, col 2-3) ─────────────────── */}
          <ScrollReveal delay={0.35} className="sm:col-span-1 lg:col-span-2">
            <Card variant="elevated" color="cyan" className="h-full">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 mb-3">
                <Wallet className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-xs tracking-wide uppercase text-text-tertiary mb-1">중산층 인구</p>
              <Counter
                end={7000}
                suffix="만+"
                decimals={0}
                duration={2200}
                className="text-2xl md:text-3xl font-semibold text-text-primary"
              />
              <ProgressBar
                value={7000}
                max={28000}
                label="전체 인구 대비 중산층"
                suffix="만 (25%)"
                color="#06b6d4"
                className="mt-4"
              />
              <p className="text-[15px] text-text-secondary mt-3 leading-relaxed">
                구매력 있는 소비자층 급속 확대
              </p>
            </Card>
          </ScrollReveal>
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
