import ScrollHero from "@/components/home/scroll-hero"
import AuthorityMetrics from "@/components/home/authority-metrics"
import GlobalValue from "@/components/home/global-value"
import StrategicGateway from "@/components/home/strategic-gateway"
import ClientMarquee from "@/components/home/client-marquee"
import StickyManifesto from "@/components/home/sticky-manifesto"
import ServicesPreview from "@/components/home/services-preview"
import FeaturedWork from "@/components/home/featured-work"
import CtaStrip from "@/components/home/cta-strip"

export default function HomePage() {
  return (
    <>
      <ScrollHero />
      <AuthorityMetrics />
      <ClientMarquee />
      <GlobalValue />
      <StrategicGateway />
      <StickyManifesto />
      <ServicesPreview />
      <FeaturedWork />
      <CtaStrip />
    </>
  )
}
