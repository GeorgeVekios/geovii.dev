import Image from "next/image";
import Link from "next/link";
import link from "next/link";

export const metadata = {
  title: "George Vekios - Portfolio",
  description:
    "Full-stack student developer on the verge of entering the professional world.",
};

export default function Home() {
  return (
    <main className="min-h-screen px-6 sm:px-10 lg:px-16 py-14">
      {/* HERO */}
      <section className="max-w-5xl mx-auto">
        <div className="flex items-start gap-6">
          {/* Avatar (optional) */}
          <div className="relative h-16 w-16 rounded-full ring-1 ring-black/10 dark:ring-white/10 overflow-hidden flex-shrink-0">
            <Image
              src="/next.svg"
              alt="Portrait of George Vekios - currently a placeholder"
              fill
              sizes="64px"
              priority
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              George Vekios
            </h1>
            <p className="mt-3 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-2xl">
              Building reliable, human‑centered software across the stack.
              Temple IST ’25. I ship full‑stack apps, automate real workflows,
              and deploy to the cloud with a focus on maintainability.
            </p>

            {/*CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/15 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/15 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                Projects
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/15 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                Experience
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/15 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                Contact
              </Link>
              <Link
                href="/George_Vekios_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/15 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                Download Resume
              </Link>
            </div>

            {/* Highlights */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "ASP.NET Core • React • SQL",
                "AWS & Azure deployments",
                "Automation + DevOps mindset",
              ].map((chip) => (
                <span
                  key={chip}
                  className="text-xs sm:text-sm rounded-full px-3 py-1 ring-1 ring-black/10 dark:ring-white/15 text-black/70 dark:text-white/70"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-4 text-sm text-black/60 dark:text-white/60">
              <a
                className="hover:underline underline-offset-4"
                href="mailto:georgevekios@gmail.com"
              >
                Email
              </a>{" "}
              -{" "}
              <a
                className="hover:underline underline-offset-4"
                href="https://github.com/GeorgeVekios"
                target="_blank"
                rel="noopener noreferer"
              >
                GitHub
              </a>{" "}
              -{" "}
              <a
                className="hover:underline underline-offset-4"
                href="https://www.linkedin.com/in/george-vekios"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
