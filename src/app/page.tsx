import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { CatalogFAQ } from "@/components/CatalogFAQ";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <ProjectsGrid />
        <ArchitectureSection />
        <CatalogFAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
