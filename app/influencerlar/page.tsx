import InfluencerHeader from "@/components/influencers/influencer-header"
import InfluencerGrid from "@/components/influencers/influencer-grid"
import InfluencerCta from "@/components/influencers/influencer-cta"

export const metadata = {
  title: "Talent | imediaff Global",
  description:
    "A curated global creator roster built for premium campaigns and measurable brand growth.",
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
