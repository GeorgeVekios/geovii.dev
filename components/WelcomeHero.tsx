import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import { MotionButton } from "@/components/MotionButton";

export default function WelcomeHero() {
  return (
    <section className="min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center">
      <FadeIn>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            <span className="block">Hello, I’m {site.name.split(" ")[0]}.</span>
            <span className="mt-2 block text-4xl sm:text-5xl font-semibold text-black/70 dark:text-white/80">
              Welcome to geovii.dev
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-black/75 dark:text-white/75">
            I build full-stack apps, automate workflows, and deploy to the
            cloud. Take a look around to see what I’ve been working on.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <MotionButton href="/about">Start exploring</MotionButton>

            <MotionButton href="/projects">View projects</MotionButton>
          </div>

          <a
            href="#next"
            aria-label="Scroll to content"
            className="mt-14 inline-flex items-center justify-center h-10 w-10 rounded-full
                     ring-1 ring-black/10 dark:ring-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
    </FadeIn>
    </section>
  );
}
