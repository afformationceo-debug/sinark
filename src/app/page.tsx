import HeroSection from "@/components/sections/HeroSection";
import PartnershipSection from "@/components/sections/PartnershipSection";
import MarketSection from "@/components/sections/MarketSection";
import PipelineSection from "@/components/sections/PipelineSection";
import HalalSection from "@/components/sections/HalalSection";
import LicensingSection from "@/components/sections/LicensingSection";
import LogisticsSection from "@/components/sections/LogisticsSection";
import InfluencerSection from "@/components/sections/InfluencerSection";
import OfflineSection from "@/components/sections/OfflineSection";
import ShopeeSection from "@/components/sections/ShopeeSection";
import TiktokSection from "@/components/sections/TiktokSection";
import D2CSection from "@/components/sections/D2CSection";
import CustomerServiceSection from "@/components/sections/CustomerServiceSection";
import SNSSection from "@/components/sections/SNSSection";
import TranslationSection from "@/components/sections/TranslationSection";
import CTASection from "@/components/sections/CTASection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroller from "@/components/layout/SmoothScroller";

function SectionConnector({ phase }: { phase?: 'indigo' | 'cyan' | 'emerald' | 'amber' }) {
  const colors: Record<string, { line: string; dot: string; glow: string }> = {
    indigo: { line: 'rgba(99,102,241,0.3)', dot: '#6366f1', glow: 'rgba(99,102,241,0.5)' },
    cyan: { line: 'rgba(6,182,212,0.3)', dot: '#06b6d4', glow: 'rgba(6,182,212,0.5)' },
    emerald: { line: 'rgba(16,185,129,0.3)', dot: '#10b981', glow: 'rgba(16,185,129,0.5)' },
    amber: { line: 'rgba(245,158,11,0.3)', dot: '#f59e0b', glow: 'rgba(245,158,11,0.5)' },
  };
  const c = phase ? colors[phase] : colors.indigo;

  return (
    <div className="flex flex-col items-center py-2" aria-hidden="true">
      <div className="w-px h-10" style={{ background: `linear-gradient(180deg, transparent, ${c.line})` }} />
      <div className="w-2.5 h-2.5 rotate-45 my-1" style={{ background: c.dot, boxShadow: `0 0 10px ${c.glow}` }} />
      <div className="w-px h-10" style={{ background: `linear-gradient(180deg, ${c.line}, transparent)` }} />
    </div>
  );
}

export default function Home() {
  return (
    <SmoothScroller>
      <Navbar />
      <main className="relative">
        {/* ═══ HERO ═══ */}
        <HeroSection />

        <SectionConnector />

        {/* ═══ TRUST: Partnership ═══ */}
        <PartnershipSection />

        <SectionConnector />

        {/* ═══ DATA: Market ═══ */}
        <MarketSection />

        <SectionConnector />

        {/* ═══ CORE: Full-Funnel Pipeline ═══ */}
        <PipelineSection />

        <SectionConnector phase="indigo" />

        {/* ═══ PHASE 1: Market Entry (Indigo) ═══ */}
        <div id="services">
          <HalalSection />
          <SectionConnector phase="indigo" />
          <LicensingSection />
          <SectionConnector phase="indigo" />
          <LogisticsSection />
        </div>

        <SectionConnector phase="cyan" />

        {/* ═══ PHASE 2: Marketing (Cyan) ═══ */}
        <InfluencerSection />
        <SectionConnector phase="cyan" />
        <OfflineSection />

        <SectionConnector phase="emerald" />

        {/* ═══ PHASE 3: Sales (Emerald) ═══ */}
        <ShopeeSection />
        <SectionConnector phase="emerald" />
        <TiktokSection />
        <SectionConnector phase="emerald" />
        <D2CSection />

        <SectionConnector phase="amber" />

        {/* ═══ PHASE 4: Operations (Amber) ═══ */}
        <CustomerServiceSection />
        <SectionConnector phase="amber" />
        <SNSSection />
        <SectionConnector phase="amber" />
        <TranslationSection />

        <SectionConnector />

        {/* ═══ CTA ═══ */}
        <CTASection />
      </main>
      <Footer />
    </SmoothScroller>
  );
}
