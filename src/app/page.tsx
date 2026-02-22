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

/* Minimal section connector — small dot + gradient line */
function SectionConnector({ from, to }: { from?: string; to?: string }) {
  const fromColor = from || "rgba(99,102,241,0.2)";
  const toColor = to || fromColor;

  return (
    <div className="flex flex-col items-center py-1" aria-hidden="true">
      <div
        className="w-px h-8"
        style={{ background: `linear-gradient(180deg, transparent, ${fromColor})` }}
      />
      <div
        className="w-1.5 h-1.5 rounded-full my-1"
        style={{
          background: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
        }}
      />
      <div
        className="w-px h-8"
        style={{ background: `linear-gradient(180deg, ${toColor}, transparent)` }}
      />
    </div>
  );
}

const PHASE = {
  indigo: "rgba(99,102,241,0.3)",
  cyan: "rgba(6,182,212,0.3)",
  emerald: "rgba(16,185,129,0.3)",
  amber: "rgba(245,158,11,0.3)",
};

export default function Home() {
  return (
    <SmoothScroller>
      <Navbar />
      <main className="relative">
        {/* Hero */}
        <HeroSection />

        <SectionConnector from={PHASE.indigo} />

        {/* Trust: Partnership */}
        <PartnershipSection />

        <SectionConnector from={PHASE.indigo} />

        {/* Data: Market */}
        <MarketSection />

        <SectionConnector from={PHASE.indigo} />

        {/* Core: Full-Funnel Pipeline */}
        <PipelineSection />

        <SectionConnector from={PHASE.indigo} />

        {/* Phase 1: Market Entry (Indigo) */}
        <div id="services">
          <HalalSection />
          <SectionConnector from={PHASE.indigo} />
          <LicensingSection />
          <SectionConnector from={PHASE.indigo} />
          <LogisticsSection />
        </div>

        {/* Phase transition: Indigo → Cyan */}
        <SectionConnector from={PHASE.indigo} to={PHASE.cyan} />

        {/* Phase 2: Marketing (Cyan) */}
        <InfluencerSection />
        <SectionConnector from={PHASE.cyan} />
        <OfflineSection />

        {/* Phase transition: Cyan → Emerald */}
        <SectionConnector from={PHASE.cyan} to={PHASE.emerald} />

        {/* Phase 3: Sales (Emerald) */}
        <ShopeeSection />
        <SectionConnector from={PHASE.emerald} />
        <TiktokSection />
        <SectionConnector from={PHASE.emerald} />
        <D2CSection />

        {/* Phase transition: Emerald → Amber */}
        <SectionConnector from={PHASE.emerald} to={PHASE.amber} />

        {/* Phase 4: Operations (Amber) */}
        <CustomerServiceSection />
        <SectionConnector from={PHASE.amber} />
        <SNSSection />
        <SectionConnector from={PHASE.amber} />
        <TranslationSection />

        <SectionConnector from={PHASE.amber} to={PHASE.indigo} />

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </SmoothScroller>
  );
}
