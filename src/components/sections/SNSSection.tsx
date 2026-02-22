"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/animation/ScrollReveal";

const instagramFeatures = [
  "인도네시아 전용 계정 운영 (@brand.id)",
  "피드 포스트: 주 3-4회",
  "스토리: 매일 (폴, 퀴즈, BTS, 이벤트)",
  "릴스: 주 2-3회 (트렌드 기반 숏폼)",
  "인도네시아어 카피라이팅",
  "해시태그 전략 (#KBeauty #SkincareIndonesia)",
  "DM 관리 & 댓글 응대",
];

const tiktokFeatures = [
  "인도네시아 전용 계정 운영",
  "숏폼 콘텐츠: 주 5-7회",
  "트렌드 사운드/챌린지 참여",
  "GRWM, 루틴, 비포에프터, 리뷰 포맷",
  "해시태그 챌린지 기획 & 실행",
  "크리에이터 UGC 리포스팅",
  "TikTok SEO 최적화",
];

const commonServices = [
  "월간 콘텐츠 캘린더 수립",
  "인도네시아 현지 모델/크리에이터 촬영 코디",
  "콘텐츠 성과 분석",
  "커뮤니티 관리",
];

export default function SNSSection() {
  return (
    <section id="sns" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-slightly-lighter">
      <div className="max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 4 · 운영 & 성장"
            title="인도네시아 전용 SNS 운영"
            subtitle="현지 트렌드에 맞는 콘텐츠로 브랜드 팬덤을 구축합니다"
            icon="📸"
            align="center"
          />
        </ScrollReveal>

        {/* ── Two-column layout ───────────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Instagram */}
          <ScrollReveal direction="left" delay={0.2}>
            <GlowCard variant="amber" className="h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="icon-badge icon-badge-amber">📸</div>
                <h3 className="text-xl font-bold text-text-primary">
                  Instagram 운영
                </h3>
              </div>
              <ul className="space-y-3">
                {instagramFeatures.map((item) => (
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

          {/* Right: TikTok */}
          <ScrollReveal direction="right" delay={0.2}>
            <GlowCard variant="amber" className="h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="icon-badge icon-badge-amber">🎵</div>
                <h3 className="text-xl font-bold text-text-primary">
                  TikTok 운영
                </h3>
              </div>
              <ul className="space-y-3">
                {tiktokFeatures.map((item) => (
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

        {/* ── Bottom: Common services ─────────────────────────── */}
        <ScrollReveal delay={0.4}>
          <div className="mt-6">
            <GlowCard variant="amber">
              <h3 className="text-lg font-bold text-text-primary mb-4">
                공통 서비스
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {commonServices.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                  >
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-amber" />
                    {item}
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
