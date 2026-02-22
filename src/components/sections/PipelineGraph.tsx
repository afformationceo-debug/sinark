"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Rocket,
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

gsap.registerPlugin(ScrollTrigger);

const phaseColors = {
  indigo: { hex: "#6366f1", rgb: "99,102,241" },
  cyan: { hex: "#06b6d4", rgb: "6,182,212" },
  emerald: { hex: "#10b981", rgb: "16,185,129" },
  amber: { hex: "#f59e0b", rgb: "245,158,11" },
};

const hubNode = { x: 400, y: 50, label: "K-Brand 진출 허브", sublabel: "Afformation × Sinarmas" };

const phaseNodes = [
  { id: "p1", x: 120, y: 170, label: "시장진입 준비", labelEn: "Market Entry", color: "indigo" as const, Icon: Building2 },
  { id: "p2", x: 280, y: 170, label: "마케팅 & 브랜딩", labelEn: "Marketing", color: "cyan" as const, Icon: Megaphone },
  { id: "p3", x: 520, y: 170, label: "세일즈 채널", labelEn: "Sales", color: "emerald" as const, Icon: ShoppingCart },
  { id: "p4", x: 680, y: 170, label: "운영 & 성장", labelEn: "Operations", color: "amber" as const, Icon: TrendingUp },
];

const serviceNodes = [
  // Phase 1
  { id: "s-halal", x: 55, y: 290, label: "할랄 인증", Icon: Shield, color: "indigo" as const, phase: "p1" },
  { id: "s-license", x: 120, y: 310, label: "인허가", Icon: FileCheck, color: "indigo" as const, phase: "p1" },
  { id: "s-logistics", x: 185, y: 290, label: "물류", Icon: Package, color: "indigo" as const, phase: "p1" },
  // Phase 2
  { id: "s-influencer", x: 215, y: 290, label: "인플루언서", Icon: Users, color: "cyan" as const, phase: "p2" },
  { id: "s-offline", x: 280, y: 310, label: "오프라인", Icon: Store, color: "cyan" as const, phase: "p2" },
  { id: "s-sns", x: 345, y: 290, label: "SNS", Icon: Smartphone, color: "cyan" as const, phase: "p2" },
  // Phase 3
  { id: "s-shopee", x: 455, y: 290, label: "쇼피", Icon: ShoppingBag, color: "emerald" as const, phase: "p3" },
  { id: "s-tiktok", x: 520, y: 310, label: "틱톡샵", Icon: Play, color: "emerald" as const, phase: "p3" },
  { id: "s-d2c", x: 585, y: 290, label: "D2C", Icon: Globe, color: "emerald" as const, phase: "p3" },
  // Phase 4
  { id: "s-cs", x: 615, y: 290, label: "CS", Icon: Headphones, color: "amber" as const, phase: "p4" },
  { id: "s-translation", x: 680, y: 310, label: "통번역", Icon: Languages, color: "amber" as const, phase: "p4" },
  { id: "s-analytics", x: 745, y: 290, label: "분석", Icon: BarChart3, color: "amber" as const, phase: "p4" },
];

function cubicPath(x1: number, y1: number, x2: number, y2: number): string {
  const midY = (y1 + y2) / 2;
  return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
}

export default function PipelineGraph() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const ctx = gsap.context(() => {
      // Hub node
      const hub = svgRef.current?.querySelector("[data-hub]");
      if (hub) gsap.set(hub, { opacity: 0, scale: 0.8 });

      // Edges
      const hubEdges = svgRef.current?.querySelectorAll("[data-hub-edge]");
      const svcEdges = svgRef.current?.querySelectorAll("[data-svc-edge]");
      const phaseNodeEls = svgRef.current?.querySelectorAll("[data-phase-node]");
      const svcNodeEls = svgRef.current?.querySelectorAll("[data-svc-node]");

      if (hubEdges) {
        hubEdges.forEach((el) => {
          const path = el as SVGPathElement;
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        });
      }
      if (svcEdges) {
        svcEdges.forEach((el) => {
          const path = el as SVGPathElement;
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        });
      }
      if (phaseNodeEls) gsap.set(phaseNodeEls, { opacity: 0, scale: 0.7, transformOrigin: "center center" });
      if (svcNodeEls) gsap.set(svcNodeEls, { opacity: 0, scale: 0.5, transformOrigin: "center center" });

      ScrollTrigger.create({
        trigger: svgRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline();

          // 1. Hub fade in
          if (hub) tl.to(hub, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" });

          // 2. Hub edges draw
          if (hubEdges?.length) tl.to(hubEdges, { strokeDashoffset: 0, duration: 0.8, stagger: 0.1, ease: "power2.inOut" }, "-=0.2");

          // 3. Phase nodes appear
          if (phaseNodeEls?.length) tl.to(phaseNodeEls, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.3");

          // 4. Service edges draw
          if (svcEdges?.length) tl.to(svcEdges, { strokeDashoffset: 0, duration: 0.6, stagger: 0.04, ease: "power2.inOut" }, "-=0.1");

          // 5. Service nodes appear
          if (svcNodeEls?.length) tl.to(svcNodeEls, { opacity: 1, scale: 1, duration: 0.35, stagger: 0.04, ease: "back.out(1.5)" }, "-=0.3");
        },
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 360"
      className="w-full h-auto"
      fill="none"
    >
      {/* Hub → Phase edges */}
      {phaseNodes.map((phase) => (
        <path
          key={`e-hub-${phase.id}`}
          data-hub-edge
          d={cubicPath(hubNode.x, hubNode.y + 25, phase.x, phase.y - 22)}
          stroke={phaseColors[phase.color].hex}
          strokeWidth="1.5"
          strokeOpacity="0.35"
          fill="none"
        />
      ))}

      {/* Phase → Service edges */}
      {serviceNodes.map((svc) => {
        const parent = phaseNodes.find((p) => p.id === svc.phase)!;
        return (
          <path
            key={`e-${svc.id}`}
            data-svc-edge
            d={cubicPath(parent.x, parent.y + 22, svc.x, svc.y - 18)}
            stroke={phaseColors[svc.color].hex}
            strokeWidth="1"
            strokeOpacity="0.2"
            strokeDasharray="4 3"
            fill="none"
          />
        );
      })}

      {/* Phase-to-phase horizontal connectors */}
      {phaseNodes.slice(0, -1).map((phase, i) => {
        const next = phaseNodes[i + 1];
        return (
          <line
            key={`h-${i}`}
            x1={phase.x + 50}
            y1={phase.y}
            x2={next.x - 50}
            y2={next.y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
        );
      })}

      {/* Hub node */}
      <g data-hub>
        <rect x={hubNode.x - 60} y={hubNode.y - 22} width="120" height="44" rx="10"
          fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
        <foreignObject x={hubNode.x - 60} y={hubNode.y - 22} width="120" height="44">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex items-center gap-1">
              <Rocket size={12} strokeWidth={1.5} className="text-indigo-400" />
              <span className="text-[9px] font-semibold text-indigo-300">{hubNode.label}</span>
            </div>
            <span className="text-[7px] text-text-tertiary">{hubNode.sublabel}</span>
          </div>
        </foreignObject>
      </g>

      {/* Phase nodes */}
      {phaseNodes.map((phase) => (
        <g key={phase.id} data-phase-node>
          <rect
            x={phase.x - 45}
            y={phase.y - 22}
            width="90"
            height="44"
            rx="8"
            fill={`rgba(${phaseColors[phase.color].rgb},0.06)`}
            stroke={phaseColors[phase.color].hex}
            strokeWidth="1"
            strokeOpacity="0.25"
          />
          <foreignObject x={phase.x - 45} y={phase.y - 22} width="90" height="44">
            <div className="flex flex-col items-center justify-center h-full">
              <phase.Icon size={14} strokeWidth={1.5} style={{ color: phaseColors[phase.color].hex }} />
              <span className="text-[8px] font-semibold text-text-primary mt-0.5">{phase.label}</span>
              <span className="text-[7px] text-text-tertiary">{phase.labelEn}</span>
            </div>
          </foreignObject>
        </g>
      ))}

      {/* Service nodes */}
      {serviceNodes.map((svc) => (
        <g key={svc.id} data-svc-node>
          <rect
            x={svc.x - 28}
            y={svc.y - 18}
            width="56"
            height="36"
            rx="6"
            fill={`rgba(${phaseColors[svc.color].rgb},0.04)`}
            stroke={phaseColors[svc.color].hex}
            strokeWidth="0.75"
            strokeOpacity="0.2"
          />
          <foreignObject x={svc.x - 28} y={svc.y - 18} width="56" height="36">
            <div className="flex flex-col items-center justify-center h-full">
              <svc.Icon size={12} strokeWidth={1.5} style={{ color: phaseColors[svc.color].hex }} />
              <span className="text-[7px] text-text-secondary mt-0.5">{svc.label}</span>
            </div>
          </foreignObject>
        </g>
      ))}
    </svg>
  );
}
