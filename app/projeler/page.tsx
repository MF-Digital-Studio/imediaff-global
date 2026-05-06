import ProjectsHeader from "@/components/projects/projects-header"
import HorizontalGallery from "@/components/projects/horizontal-gallery"
import ProjectsIndex from "@/components/projects/projects-index"
import ProjectsCta from "@/components/projects/projects-cta"

export const metadata = {
  title: "Case Studies | imediaff Global",
  description:
    "Selected global campaigns across fashion, beauty, automotive, and technology.",
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHeader />
      <HorizontalGallery />
      <ProjectsIndex />
      <ProjectsCta />
    </>
  )
}
