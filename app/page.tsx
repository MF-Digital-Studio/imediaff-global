import ScrollHero from "@/components/home/scroll-hero"
import AuthorityMetrics from "@/components/home/authority-metrics"
import RegionsGrid from "@/components/home/regions-grid"
import AffiliatePreview from "@/components/home/affiliate-preview"
import GlobalValue from "@/components/home/global-value"
import StrategicGateway from "@/components/home/strategic-gateway"
import ClientMarquee from "@/components/home/client-marquee"
import StickyManifesto from "@/components/home/sticky-manifesto"
import ServicesPreview from "@/components/home/services-preview"
import FeaturedEvents from "@/components/home/featured-events"
import CtaStrip from "@/components/home/cta-strip"

export default function HomePage() {
  return (
    <>
      <ScrollHero />
      <AuthorityMetrics />
      <RegionsGrid />
      <AffiliatePreview />
      <ClientMarquee />
      <FeaturedEvents />
      <GlobalValue />
      <StrategicGateway />
      <StickyManifesto />
      <ServicesPreview />
      <CtaStrip />
    </>
  )
}
