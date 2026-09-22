import UberHealthProject from "@/components/UberHealthProject";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { uberHealthProject } from "@/lib/content";

export const metadata = {
  title: `${uberHealthProject.title} — Fathima NR`,
  description: uberHealthProject.overview,
};

export default function UberHealthPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <UberHealthProject />
      </main>
      <SiteFooter />
    </>
  );
}
