import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <div className="flex items-start gap-6">
      {/* Avatar (optional)*/}
      <div className="relative h-16 w-16 rounded-full ring-1 ring-black/10 dark:ring-white/10 overflow-hidden flex-shrink-0">
        <Image
          src="/george.jpg" //headshot @ /public/george.jpg or placeholder
          alt={"Portrait of ${site.name}"}
          fill
          sizes="64px"
          priority
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {site.name}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-2xl">
          {site.tagline} Temple IST &379;25. Shipping full-stack apps, automating real
          workflows, and deploying to the cloud with a focus on maintainability.
        </p>

        {/* <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/15 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            About
          </Link>
          <Link
            href="/experience"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/15 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/15 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            Projects
          </Link>
          <Link
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/15 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/15 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            Contact
          </Link>
        </div> */}
      </div>
    </div>
  );
}
