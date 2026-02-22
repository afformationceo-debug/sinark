export interface PipelineNode {
  id: string;
  label: string;
  labelEn?: string;
  description?: string;
  type: 'hub' | 'phase' | 'service';
  phase?: 1 | 2 | 3 | 4;
  color: 'indigo' | 'cyan' | 'emerald' | 'amber';
  icon?: string;
  x?: number;
  y?: number;
}

export interface PipelineEdge {
  from: string;
  to: string;
  type: 'solid' | 'dashed';
}

export interface MarketStat {
  icon: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
  color: 'indigo' | 'cyan' | 'emerald' | 'amber';
}

export interface ServiceItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  features: string[];
  phase: 1 | 2 | 3 | 4;
  icon: string;
  duration?: string;
}

export interface ContactFormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  experience: string;
  services: string[];
  message: string;
}
