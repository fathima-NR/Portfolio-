import HrPortalProject from "@/components/HrPortalProject";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { hrPortalProject } from "@/lib/content";

export const metadata = {
  title: `${hrPortalProject.title} — Fathima NR`,
  description: hrPortalProject.overview,
};

export default function HrPortalPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HrPortalProject />
      </main>
      <SiteFooter />
    </>
  );
}
