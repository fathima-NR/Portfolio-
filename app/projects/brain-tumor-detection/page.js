import BrainTumorProject from "@/components/BrainTumorProject";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { brainTumorProject } from "@/lib/content";

export const metadata = {
  title: `${brainTumorProject.title} — Fathima NR`,
  description: brainTumorProject.overview,
};

export default function BrainTumorDetectionPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <BrainTumorProject />
      </main>
      <SiteFooter />
    </>
  );
}
