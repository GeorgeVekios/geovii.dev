import Section from "@/components/Section";
import Highlights from "@/components/Highlights";
import AboutHeader from "@/components/AboutHeader";
import EducationCard from "@/components/EducationCard";
import SkillsGrid from "@/components/SkillsGrid";
import { site } from "@/data/site";
import { about } from "@/data/about";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Section title="About">
      {/* Centered avatar + intro */}
      <AboutHeader data={about} />

      {/* Full-width Education card ABOVE the grid */}
      {about.education && <EducationCard items={about.education} />}

      {/* Grid of two cards below */}
      <SkillsGrid strengths={about.strengths} learning={about.learning} />

      {/* Highlights centered */}
      <div className="mt-8 flex justify-center">
        <Highlights items={site.highlights} />
      </div>

      {/* Resume CTA centered */}
      <div className="mt-8 flex justify-center">
        <Link
          href={site.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium
                     ring-1 ring-black/15 dark:ring-white/20
                     hover:bg-black/5 dark:hover:bg-white/5 transition"
        >
          Download Résumé
        </Link>
      </div>
    </Section>
  );
}
