import { ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import FadeIn from "@/components/ui/FadeIn";
import { MotionButton } from "@/components/ui/MotionButton";

export default function WelcomeHero() {
  return (
    <section className="min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center relative">
      <FadeIn mode="mount" className="w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            <span className="block">
              Hey, I&apos;m <span className="text-accent">{site.name.split(" ")[0]}</span>.
            </span>
            <span className="mt-2 block text-3xl sm:text-4xl font-medium text-muted">
              Full-Stack Developer building Cloud Solutions and exploring AI-Driven Development.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            I build reliable apps, automate workflows, and deploy to the cloud.
            Currently at <span className="text-foreground font-medium">RSM</span> working on M365 solutions and AI-oriented pipelines. Personally exploring AI-powered development.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MotionButton href="/projects" variant="accent">View my work</MotionButton>
            <MotionButton href="/about">About me</MotionButton>
          </div>

          <a
            href="#next"
            aria-label="Scroll to content"
            className="mt-14 inline-flex items-center justify-center h-10 w-10 rounded-full
                     border border-border hover:border-accent/50 hover:text-accent transition-colors"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
