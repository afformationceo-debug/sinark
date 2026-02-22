"use client";

import { useState } from "react";
import {
  Smartphone,
  Instagram,
  Video,
  PenTool,
  Users,
  TrendingUp,
  BarChart3,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Music,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

/* ── Service features ──────────────────────────────────────────── */
const serviceFeatures = [
  {
    icon: PenTool,
    title: "콘텐츠 기획 & 제작",
    desc: "월간 캘린더 수립, 인도네시아 트렌드 기반 숏폼/피드 콘텐츠 제작",
  },
  {
    icon: Users,
    title: "커뮤니티 관리",
    desc: "댓글 응대, DM 관리, 팔로워 인게이지먼트 전략 운영",
  },
  {
    icon: TrendingUp,
    title: "인플루언서 협업",
    desc: "현지 크리에이터 섭외, UGC 리포스팅, 챌린지 기획 실행",
  },
  {
    icon: BarChart3,
    title: "성과 분석 리포트",
    desc: "주간/월간 KPI 트래킹, 콘텐츠별 도달/전환율 분석 제공",
  },
];

export default function SNSSection() {
  const [platform, setPlatform] = useState<"instagram" | "tiktok">("instagram");

  return (
    <section
      id="sns"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-slightly-lighter"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 4 - SNS"
            title="인도네시아 전용 SNS 운영"
            subtitle="현지 트렌드에 맞는 콘텐츠로 브랜드 팬덤을 구축합니다"
            icon={<Smartphone size={16} />}
            align="center"
          />
        </ScrollReveal>

        {/* ── Platform toggle ─────────────────────────────────── */}
        <ScrollReveal delay={0.1}>
          <div className="flex justify-center mt-2 mb-10">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
              <button
                onClick={() => setPlatform("instagram")}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all cursor-pointer ${
                  platform === "instagram"
                    ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                    : "text-text-secondary hover:text-text-primary border border-transparent"
                }`}
              >
                <Instagram size={16} />
                Instagram
              </button>
              <button
                onClick={() => setPlatform("tiktok")}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all cursor-pointer ${
                  platform === "tiktok"
                    ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                    : "text-text-secondary hover:text-text-primary border border-transparent"
                }`}
              >
                <Video size={16} />
                TikTok
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Platform mockup ─────────────────────────────────── */}
        <ScrollReveal delay={0.15}>
          <div className="flex justify-center mb-14">
            {platform === "instagram" ? (
              <InstagramMockup />
            ) : (
              <TikTokMockup />
            )}
          </div>
        </ScrollReveal>

        {/* ── Service features 2x2 grid ───────────────────────── */}
        <StaggerChildren
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {serviceFeatures.map((f) => (
            <Card key={f.title} variant="interactive" color="amber">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <f.icon size={20} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-1">
                    {f.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ── Instagram feed mockup ─────────────────────────────────────── */
function InstagramMockup() {
  return (
    <div className="w-full max-w-[380px] rounded-2xl border border-white/8 bg-[#0a0a0a] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/6">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center">
          <span className="text-[10px] font-bold text-white">KB</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white/90">kbrand.id</p>
          <p className="text-[10px] text-white/40">Jakarta, Indonesia</p>
        </div>
      </div>

      {/* Square image placeholder */}
      <div className="aspect-square bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
        <div className="text-center">
          <Instagram size={40} className="text-white/10 mx-auto mb-2" />
          <p className="text-xs text-white/20">K-Beauty Content</p>
        </div>
      </div>

      {/* Action bar */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <Heart size={22} className="text-white/70" />
            <MessageCircle size={22} className="text-white/70" />
            <Share2 size={22} className="text-white/70" />
          </div>
          <Bookmark size={22} className="text-white/70" />
        </div>
        <p className="text-sm font-semibold text-white/80 mb-1">2,847 likes</p>
        <p className="text-sm text-white/60 leading-relaxed">
          <span className="font-semibold text-white/80">kbrand.id</span>{" "}
          Rahasia kulit glowing ala Korea! Coba serum terbaru kami yang cocok
          untuk semua jenis kulit
          <span className="text-amber-400/60"> #KBeauty #SkincareIndonesia</span>
        </p>
        <p className="text-[11px] text-white/30 mt-2">2 hours ago</p>
      </div>
    </div>
  );
}

/* ── TikTok vertical video mockup ──────────────────────────────── */
function TikTokMockup() {
  return (
    <div className="w-full max-w-[280px] rounded-2xl border border-white/8 bg-[#0a0a0a] overflow-hidden">
      {/* 9:16 video placeholder */}
      <div className="relative" style={{ aspectRatio: "9/16" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f23] flex items-center justify-center">
          <div className="text-center">
            <Video size={40} className="text-white/10 mx-auto mb-2" />
            <p className="text-xs text-white/20">K-Beauty Routine</p>
          </div>
        </div>

        {/* Right-side action buttons */}
        <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5">
          {/* Profile */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center border-2 border-white/20">
              <span className="text-[9px] font-bold text-white">KB</span>
            </div>
          </div>
          {/* Heart */}
          <div className="flex flex-col items-center gap-0.5">
            <Heart size={26} className="text-white/80" />
            <span className="text-[10px] text-white/60">24.5K</span>
          </div>
          {/* Comment */}
          <div className="flex flex-col items-center gap-0.5">
            <MessageCircle size={26} className="text-white/80" />
            <span className="text-[10px] text-white/60">1,204</span>
          </div>
          {/* Share */}
          <div className="flex flex-col items-center gap-0.5">
            <Share2 size={26} className="text-white/80" />
            <span className="text-[10px] text-white/60">892</span>
          </div>
        </div>

        {/* Bottom info */}
        <div className="absolute left-3 right-14 bottom-4">
          <p className="text-sm font-semibold text-white/90 mb-1">@kbrand.id</p>
          <p className="text-xs text-white/70 leading-relaxed mb-2">
            Tutorial skincare pagi ala Korea yang simpel dan efektif!
          </p>
          <div className="flex items-center gap-1.5">
            <Music size={12} className="text-white/50" />
            <p className="text-[10px] text-white/50 truncate">
              Original Sound - kbrand.id
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
