import ProjectsHeader from "@/components/projects/projects-header"
import HorizontalGallery from "@/components/projects/horizontal-gallery"
import ProjectsIndex from "@/components/projects/projects-index"
import ProjectsCta from "@/components/projects/projects-cta"

export const metadata = {
  title: "Projeler / VOLT",
  description:
    "Seçili kampanyalar, yatay kayan galeride. Moda, güzellik, otomotiv, teknoloji ve daha fazlası.",
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
