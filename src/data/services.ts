import type { ServiceItem } from '@/types';

export const services: ServiceItem[] = [
  // ── Phase 1: 시장진입 준비 & 인프라 ──────────────────────
  {
    id: 'halal',
    title: '할랄 인증',
    titleEn: 'Halal Certification',
    description:
      '인도네시아 BPJPH 할랄 인증 취득을 위한 전 과정 대행. 원료 심사부터 현지 감사 대응, 인증서 발급까지 원스톱으로 지원합니다.',
    features: [
      'BPJPH 할랄 인증 신청 및 취득 대행',
      '원료·제조공정 할랄 적합성 사전 심사',
      '할랄 감사(Audit) 현장 대응 지원',
      '인증 갱신 및 사후 관리',
    ],
    phase: 1,
    icon: '🕌',
    duration: '3~6개월',
  },
  {
    id: 'license',
    title: '인허가/라이선스',
    titleEn: 'Licensing & Permits',
    description:
      'BPOM(식약청) 등록, 수입 라이선스(API-U), 유통 허가 등 인도네시아 진출에 필요한 모든 인허가를 대행합니다.',
    features: [
      'BPOM 제품 등록 (화장품·식품·건기식)',
      '수입업 라이선스(API-U) 취득',
      '유통업 허가(SIUP) 및 사업자 등록',
      'SNI 인증 등 추가 규격 인증 지원',
      '규제 변경 모니터링 및 대응',
    ],
    phase: 1,
    icon: '📋',
    duration: '2~4개월',
  },
  {
    id: 'logistics',
    title: '물류 인프라',
    titleEn: 'Logistics Infrastructure',
    description:
      '자카르타 및 주요 도시 물류 창고 확보, 라스트마일 배송 네트워크 구축, 재고 관리 시스템을 셋업합니다.',
    features: [
      '현지 물류 창고(Fulfillment Center) 확보',
      '라스트마일 배송 파트너 연결 (JNE, J&T 등)',
      '재고 관리 시스템(WMS) 연동',
      '통관·검역 프로세스 지원',
    ],
    phase: 1,
    icon: '📦',
    duration: '1~3개월',
  },

  // ── Phase 2: 마케팅 & 브랜딩 ─────────────────────────────
  {
    id: 'influencer',
    title: '인플루언서 마케팅',
    titleEn: 'Influencer Marketing',
    description:
      '인도네시아 현지 KOL(Key Opinion Leader) 및 마이크로 인플루언서를 활용한 브랜드 캠페인을 기획하고 실행합니다.',
    features: [
      '브랜드 맞춤 KOL/인플루언서 선정',
      '캠페인 기획 및 콘텐츠 방향 설정',
      '라이브 방송·리뷰 콘텐츠 제작 관리',
      '성과 리포팅 (도달률, 전환율, ROI)',
      '장기 앰배서더 프로그램 운영',
    ],
    phase: 2,
    icon: '🌟',
    duration: '월 단위 운영',
  },
  {
    id: 'offline',
    title: '오프라인 리테일',
    titleEn: 'Offline Retail Presence',
    description:
      '인도네시아 주요 오프라인 유통채널 입점 및 팝업스토어 운영을 통해 브랜드 체험 기회를 확대합니다.',
    features: [
      '주요 리테일 채널 입점 협상 (Sociolla, Guardian 등)',
      '팝업스토어 기획 및 운영',
      '매장 내 POP/VMD 디자인',
      '오프라인 프로모션 기획',
    ],
    phase: 2,
    icon: '🏬',
    duration: '2~4개월',
  },
  {
    id: 'sns',
    title: 'SNS 관리',
    titleEn: 'SNS Management',
    description:
      '인스타그램, 틱톡, 유튜브 등 주요 SNS 채널을 현지 트렌드에 맞게 운영하며 브랜드 커뮤니티를 구축합니다.',
    features: [
      '채널별 콘텐츠 전략 수립',
      '현지어 콘텐츠 제작 및 포스팅',
      '커뮤니티 관리 및 댓글 응대',
      '월간 퍼포먼스 리포트 제공',
      '유료 광고(Meta Ads, TikTok Ads) 운영',
    ],
    phase: 2,
    icon: '📱',
    duration: '월 단위 운영',
  },

  // ── Phase 3: 세일즈 채널 구축 ─────────────────────────────
  {
    id: 'shopee',
    title: '쇼피 입점',
    titleEn: 'Shopee Store Setup',
    description:
      '인도네시아 이커머스 1위 플랫폼 쇼피에 공식 스토어를 개설하고, 최적화된 상세페이지와 프로모션 전략으로 매출을 극대화합니다.',
    features: [
      '쇼피 공식/몰 스토어 개설',
      '상품 상세페이지 현지화 제작',
      '쇼피 내 광고(Shopee Ads) 운영',
      '메가세일 캠페인 참여 전략',
      '주문·배송·반품 프로세스 구축',
    ],
    phase: 3,
    icon: '🟠',
    duration: '1~2개월',
  },
  {
    id: 'tiktok',
    title: '틱톡샵',
    titleEn: 'TikTok Shop',
    description:
      '틱톡샵 입점 및 라이브커머스 운영을 통해 소셜커머스 채널에서의 판매를 확대합니다.',
    features: [
      '틱톡샵 셀러 등록 및 스토어 개설',
      '쇼핑 가능 숏폼 콘텐츠 제작',
      '라이브커머스 정기 방송 운영',
      '틱톡 어필리에이트 프로그램 활용',
      '틱톡 광고(Spark Ads) 최적화',
    ],
    phase: 3,
    icon: '🎵',
    duration: '1~2개월',
  },
  {
    id: 'd2c',
    title: 'D2C 웹사이트',
    titleEn: 'D2C Website',
    description:
      'Shopify 등을 활용한 자사몰(D2C) 구축으로 브랜드 자산을 축적하고 고객 데이터를 직접 확보합니다.',
    features: [
      'Shopify 기반 자사몰 구축',
      '인도네시아 결제 수단 연동 (OVO, GoPay, VA 등)',
      '현지어 UI/UX 최적화',
      'CRM 및 이메일 마케팅 자동화',
    ],
    phase: 3,
    icon: '🌐',
    duration: '2~3개월',
  },

  // ── Phase 4: 운영 & 성장 ──────────────────────────────────
  {
    id: 'cs',
    title: 'CS 채널',
    titleEn: 'Customer Service',
    description:
      '인도네시아어 네이티브 스피커 기반의 고객 응대 채널을 구축하여 고객 만족도를 높이고 재구매를 유도합니다.',
    features: [
      '인도네시아어 CS 전담팀 운영',
      'WhatsApp, 라이브챗 등 다채널 응대',
      'FAQ 및 자동응답 시스템 구축',
      '고객 VOC 분석 및 제품 피드백 리포트',
    ],
    phase: 4,
    icon: '🎧',
    duration: '월 단위 운영',
  },
  {
    id: 'translation',
    title: '통번역',
    titleEn: 'Translation & Interpretation',
    description:
      '마케팅 콘텐츠, 제품 설명, 법률 문서 등 한국어-인도네시아어 간 전문 통번역 서비스를 제공합니다.',
    features: [
      '마케팅 콘텐츠 현지화 번역',
      '제품 라벨·설명서 번역',
      '계약서·법률 문서 전문 번역',
      '비즈니스 미팅 동시통역 지원',
      '영상 자막 및 더빙 제작',
    ],
    phase: 4,
    icon: '🗣️',
    duration: '건별/월 단위',
  },
  {
    id: 'analytics',
    title: '데이터 분석',
    titleEn: 'Data Analytics',
    description:
      '판매 데이터, 마케팅 퍼포먼스, 시장 트렌드를 종합 분석하여 데이터 기반 성장 전략을 수립합니다.',
    features: [
      '채널별 판매 데이터 통합 대시보드',
      '마케팅 ROI 분석 및 최적화 제안',
      '경쟁사 모니터링 및 벤치마킹',
      '소비자 트렌드 리포트 제공',
      '성장 전략 수립 및 분기별 리뷰',
    ],
    phase: 4,
    icon: '📊',
    duration: '월 단위 운영',
  },
];
