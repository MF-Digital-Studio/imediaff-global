import ScrollHero from "@/components/home/scroll-hero"
import ClientMarquee from "@/components/home/client-marquee"
import StickyManifesto from "@/components/home/sticky-manifesto"
import StatsCounter from "@/components/home/stats-counter"
import ServicesPreview from "@/components/home/services-preview"
import FeaturedWork from "@/components/home/featured-work"
import CtaStrip from "@/components/home/cta-strip"

export default function HomePage() {
  return (
    <>
      <ScrollHero />
      <ClientMarquee />
      <StickyManifesto />
      <StatsCounter />
      <ServicesPreview />
      <FeaturedWork />
      <CtaStrip />
    </>
  )
}
