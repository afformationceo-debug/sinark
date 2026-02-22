"use client";

import { Headphones, MessageCircle, Bot, BarChart3, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

/* ── Chat mockup data ──────────────────────────────────────────── */
const chatMessages = [
  {
    sender: "customer",
    text: "Halo, saya mau tanya soal produk skincare dari Korea",
    time: "09:12",
  },
  {
    sender: "agent",
    text: "Halo! Selamat datang di K-Brand CS. Ada yang bisa kami bantu mengenai produk kami?",
    time: "09:12",
  },
  {
    sender: "customer",
    text: "Apakah serum ini cocok untuk kulit berminyak?",
    time: "09:13",
  },
  {
    sender: "agent",
    text: "Tentu! Serum ini diformulasikan khusus untuk kulit berminyak. Mengandung Niacinamide 10% untuk mengontrol sebum. Mau kami kirimkan katalog lengkapnya?",
    time: "09:14",
  },
];

/* ── Hub-spoke node data ───────────────────────────────────────── */
const spokeNodes = [
  { label: "WhatsApp", icon: MessageCircle, angle: 0 },
  { label: "LiveChat", icon: Phone, angle: 90 },
  { label: "FAQ Bot", icon: Bot, angle: 180 },
  { label: "VOC Analysis", icon: BarChart3, angle: 270 },
];

/* ── Feature list ──────────────────────────────────────────────── */
const features = [
  {
    title: "3개 국어 대응",
    desc: "인도네시아어 / 영어 / 한국어 실시간 CS 운영",
  },
  {
    title: "평균 응답 30분 이내",
    desc: "평일 09:00-21:00(WIB) 전담팀 운영",
  },
  {
    title: "VOC 리포트",
    desc: "월간 고객 불만/문의 유형 분석 리포트 제공",
  },
  {
    title: "에스컬레이션 프로세스",
    desc: "티켓 시스템 기반 이슈 추적 및 본사 연동",
  },
];

export default function CustomerServiceSection() {
  return (
    <section
      id="cs"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-phase-amber"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Section heading ─────────────────────────────────── */}
        <ScrollReveal>
          <SectionHeading
            badge="Phase 4 - CS"
            title="인도네시아 고객 서비스 채널"
            subtitle="현지 언어로, 현지 시간에, 현지 채널로 고객을 응대합니다"
            icon={<Headphones size={16} />}
            align="center"
          />
        </ScrollReveal>

        {/* ── Two-column layout ───────────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* ── Left: WhatsApp-style chat mockup ──────────────── */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="rounded-2xl border border-white/8 bg-[#0b141a] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-4 py-3 bg-[#1f2c34] border-b border-white/6">
                <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Headphones size={16} className="text-amber-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white/90">
                    K-Brand CS
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] text-white/50">Online</span>
                  </div>
                </div>
                <Phone size={18} className="text-white/40" />
              </div>

              {/* Chat body */}
              <div className="px-3 py-4 space-y-3 min-h-[320px]">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.sender === "customer" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-xl px-3.5 py-2.5 ${
                        msg.sender === "customer"
                          ? "bg-[#005c4b] rounded-tr-sm"
                          : "bg-[#1f2c34] rounded-tl-sm"
                      }`}
                    >
                      <p className="text-[13px] text-white/90 leading-relaxed">
                        {msg.text}
                      </p>
                      <p
                        className={`text-[10px] mt-1 ${
                          msg.sender === "customer"
                            ? "text-white/40 text-right"
                            : "text-white/40 text-right"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat input bar */}
              <div className="flex items-center gap-2 px-3 py-2.5 bg-[#1f2c34] border-t border-white/6">
                <div className="flex-1 rounded-full bg-[#2a3942] px-4 py-2">
                  <p className="text-xs text-white/30">메시지를 입력하세요...</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <MessageCircle size={14} className="text-amber-400" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right: Hub-spoke SVG + features ───────────────── */}
          <div className="flex flex-col gap-8">
            {/* Hub-spoke SVG diagram */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex justify-center">
                <svg
                  viewBox="0 0 320 320"
                  className="w-full max-w-[320px]"
                  fill="none"
                >
                  {/* Connecting lines */}
                  {spokeNodes.map((node, i) => {
                    const cx = 160;
                    const cy = 160;
                    const r = 110;
                    const rad = (node.angle - 90) * (Math.PI / 180);
                    const x = cx + r * Math.cos(rad);
                    const y = cy + r * Math.sin(rad);
                    return (
                      <line
                        key={`line-${i}`}
                        x1={cx}
                        y1={cy}
                        x2={x}
                        y2={y}
                        stroke="rgba(245,158,11,0.25)"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                      />
                    );
                  })}

                  {/* Center hub */}
                  <circle
                    cx="160"
                    cy="160"
                    r="36"
                    fill="rgba(245,158,11,0.08)"
                    stroke="rgba(245,158,11,0.3)"
                    strokeWidth="1.5"
                  />
                  <text
                    x="160"
                    y="156"
                    textAnchor="middle"
                    className="fill-amber-400 text-[13px] font-bold"
                  >
                    CS
                  </text>
                  <text
                    x="160"
                    y="172"
                    textAnchor="middle"
                    className="fill-amber-400 text-[13px] font-bold"
                  >
                    Hub
                  </text>

                  {/* Spoke nodes */}
                  {spokeNodes.map((node, i) => {
                    const cx = 160;
                    const cy = 160;
                    const r = 110;
                    const rad = (node.angle - 90) * (Math.PI / 180);
                    const x = cx + r * Math.cos(rad);
                    const y = cy + r * Math.sin(rad);
                    return (
                      <g key={`spoke-${i}`}>
                        <circle
                          cx={x}
                          cy={y}
                          r="28"
                          fill="rgba(245,158,11,0.06)"
                          stroke="rgba(245,158,11,0.2)"
                          strokeWidth="1"
                        />
                        <text
                          x={x}
                          y={y + 4}
                          textAnchor="middle"
                          className="fill-white/70 text-[10px] font-medium"
                        >
                          {node.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </ScrollReveal>

            {/* Feature list */}
            <StaggerChildren staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <Card key={f.title} variant="surface" color="amber">
                  <h4 className="text-sm font-semibold text-text-primary mb-1">
                    {f.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {f.desc}
                  </p>
                </Card>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
