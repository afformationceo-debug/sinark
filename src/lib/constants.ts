export const NAV_LINKS = [
  { label: '서비스', href: '#services' },
  { label: '파이프라인', href: '#pipeline' },
  { label: '시장현황', href: '#market' },
  { label: '파트너십', href: '#partnership' },
  { label: '문의', href: '#contact' },
] as const;

export const PHASE_COLORS = {
  1: { name: '시장진입', gradient: 'from-brand-indigo to-brand-purple', css: 'indigo', dashClass: 'dash-card-indigo', glowClass: 'glow-indigo' },
  2: { name: '마케팅', gradient: 'from-brand-cyan to-brand-blue', css: 'cyan', dashClass: 'dash-card-cyan', glowClass: 'glow-cyan' },
  3: { name: '세일즈', gradient: 'from-brand-emerald to-brand-teal', css: 'emerald', dashClass: 'dash-card-emerald', glowClass: 'glow-emerald' },
  4: { name: '운영', gradient: 'from-brand-amber to-brand-orange', css: 'amber', dashClass: 'dash-card-amber', glowClass: 'glow-amber' },
} as const;

export const BRAND_CATEGORIES = [
  '뷰티/화장품',
  '식품/음료',
  '패션/의류',
  '생활용품',
  '건강기능식품',
  '기타',
] as const;

export const EXPERIENCE_OPTIONS = [
  '없음',
  '아시아 일부',
  '글로벌',
] as const;

export const SERVICE_OPTIONS = [
  '할랄인증',
  '쇼피입점',
  '틱톡샵',
  '인플루언서',
  '오프라인',
  '풀퍼널',
] as const;

export const TRUST_BADGES = [
  'BPJPH 인증 파트너',
  '쇼피 공식 파트너',
  '틱톡샵 공식 파트너',
  '시나르마스 전략 파트너',
] as const;
