import InfluencerHeader from "@/components/influencers/influencer-header"
import InfluencerGrid from "@/components/influencers/influencer-grid"
import InfluencerCta from "@/components/influencers/influencer-cta"

export const metadata = {
  title: "Influencerlar / VOLT",
  description:
    "VOLT ailesi. Editorial estetikle küratörlüğü yapılan, yüksek etkileşimli içerik yaratıcıları.",
}

export default function InfluencerPage() {
  return (
    <>
      <InfluencerHeader />
      <InfluencerGrid />
      <InfluencerCta />
    </>
  )
}
