"use client";

import { useEffect, useRef, useState } from "react";

/* ═══════ RadialGauge ═══════ */
interface RadialGaugeProps {
  value: number;
  max: number;
  label: string;
  color?: string;
  size?: number;
  className?: string;
}

export function RadialGauge({
  value,
  max,
  label,
  color = "#6366f1",
  size = 120,
  className = "",
}: RadialGaugeProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (animatedValue / max) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedValue(value);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="6"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
          strokeOpacity="0.6"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-bold text-text-primary">{label}</span>
      </div>
    </div>
  );
}

/* ═══════ ProgressBar ═══════ */
interface ProgressBarProps {
  value: number;
  max: number;
  label: string;
  suffix?: string;
  color?: string;
  className?: string;
}

export function ProgressBar({
  value,
  max,
  label,
  suffix = "",
  color = "#6366f1",
  className = "",
}: ProgressBarProps) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedWidth((value / max) * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, max]);

  return (
    <div ref={ref} className={className}>
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-xs text-text-secondary">{label}</span>
        <span className="text-xs text-text-tertiary">
          {value}{suffix}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-[1500ms] ease-out"
          style={{ width: `${animatedWidth}%`, background: color }}
        />
      </div>
    </div>
  );
}

/* ═══════ DonutRing ═══════ */
interface DonutRingProps {
  value: number;
  max: number;
  label: string;
  color?: string;
  size?: number;
  className?: string;
}

export function DonutRing({
  value,
  max,
  label,
  color = "#06b6d4",
  size = 80,
  className = "",
}: DonutRingProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (animatedValue / max) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedValue(value);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="4"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
          strokeOpacity="0.5"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] text-text-secondary">{label}</span>
      </div>
    </div>
  );
}

/* ═══════ Sparkline ═══════ */
interface SparklineProps {
  data: number[];
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function Sparkline({
  data,
  color = "#10b981",
  width = 120,
  height = 40,
  className = "",
}: SparklineProps) {
  const maxVal = Math.max(...data);
  const minVal = Math.min(...data);
  const range = maxVal - minVal || 1;
  const padding = 2;

  const points = data
    .map((val, i) => {
      const x = padding + (i / (data.length - 1)) * (width - padding * 2);
      const y = height - padding - ((val - minVal) / range) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");

  const areaPath = `M ${padding},${height} L ${points
    .split(" ")
    .map((p) => p)
    .join(" L ")} L ${width - padding},${height} Z`;

  return (
    <svg width={width} height={height} className={className} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id={`spark-grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#spark-grad-${color.replace("#", "")})`} />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
