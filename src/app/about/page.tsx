import Section from "@/components/Section";
import Highlights from "@/components/Highlights";
import AboutHeader from "@/components/AboutHeader";
import EducationCard from "@/components/EducationCard";
import SkillsGrid from "@/components/SkillsGrid";
import { site } from "@/data/site";
import { about } from "@/data/about";
import Link from "next/link";
import { MotionButton } from "@/components/MotionButton";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <Section title="About">
      {/* centered avatar + intro */}
      <AboutHeader data={about} />

      {/* full-width education card above grid */}
      {about.education && <EducationCard items={about.education} />}

      {/* two card grid */}
      <SkillsGrid strengths={about.strengths} learning={about.learning} />

      {/* highlights centered */}
      <FadeIn delay={0.90}>
        <div className="mt-8 flex justify-center">
          <Highlights items={site.highlights} />
        </div>
      </FadeIn>

      {/* resume centered */}
      <FadeIn delay={0.95}>
      <div className="mt-8 flex justify-center">
        <MotionButton href={site.resumePath}>View Resume</MotionButton>
      </div>
      </FadeIn>
    </Section>
  );
}
