import { type LucideIcon } from "lucide-react";
import {
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
  Rocket,
  Building2,
  Megaphone,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

type PhaseColor = "indigo" | "cyan" | "emerald" | "amber";

interface ServiceIconProps {
  serviceId: string;
  color?: PhaseColor;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  halal: Shield,
  license: FileCheck,
  logistics: Package,
  influencer: Users,
  offline: Store,
  sns: Smartphone,
  shopee: ShoppingBag,
  tiktok: Play,
  d2c: Globe,
  cs: Headphones,
  translation: Languages,
  analytics: BarChart3,
  hub: Rocket,
  "phase-1": Building2,
  "phase-2": Megaphone,
  "phase-3": ShoppingCart,
  "phase-4": TrendingUp,
};

const colorStyles: Record<PhaseColor, { container: string; icon: string }> = {
  indigo: {
    container: "bg-indigo-500/8 border-indigo-500/15",
    icon: "text-indigo-400",
  },
  cyan: {
    container: "bg-cyan-500/8 border-cyan-500/15",
    icon: "text-cyan-400",
  },
  emerald: {
    container: "bg-emerald-500/8 border-emerald-500/15",
    icon: "text-emerald-400",
  },
  amber: {
    container: "bg-amber-500/8 border-amber-500/15",
    icon: "text-amber-400",
  },
};

const sizeConfig = {
  sm: { container: "w-8 h-8 rounded-md", iconSize: 16 },
  md: { container: "w-10 h-10 rounded-lg", iconSize: 20 },
  lg: { container: "w-12 h-12 rounded-xl", iconSize: 24 },
};

export default function ServiceIcon({
  serviceId,
  color = "indigo",
  size = "md",
  className = "",
}: ServiceIconProps) {
  const Icon = iconMap[serviceId] || Rocket;
  const colorStyle = colorStyles[color];
  const sizeStyle = sizeConfig[size];

  return (
    <div
      className={`inline-flex items-center justify-center border ${colorStyle.container} ${sizeStyle.container} ${className}`}
    >
      <Icon
        size={sizeStyle.iconSize}
        strokeWidth={1.5}
        className={colorStyle.icon}
      />
    </div>
  );
}

export { iconMap };
export type { PhaseColor };
