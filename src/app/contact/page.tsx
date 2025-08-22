import Section from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <Section title="Contact">
      <p className="text-black/75 dark:text-white/75">Looking to reach out?</p>

      <div className="mt-4">
        <SocialLinks />
      </div>

      {/* mailto CTA*/}
      <div className="mt-6">
        <a
          href={`mailto:${site.email}?subject=Hello%20from%20your%20portfolio%20at%20geovii.dev`}
          className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
        >
          Email Me
        </a>
      </div>
    </Section>
  );
}
