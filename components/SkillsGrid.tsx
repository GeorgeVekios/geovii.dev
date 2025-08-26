import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn"; // ⬅️ add

export default function SkillsGrid({
  strengths,
  learning,
}: { strengths: string[]; learning: string[] }) {
  return (
    <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
      <FadeIn delay={0.75}>
        <Card>
          <h3 className="text-base sm:text-lg font-semibold">What I’m good at</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-left text-black/75 dark:text-white/75">
            {strengths.map((s) => <li key={s}>• {s}</li>)}
          </ul>
        </Card>
      </FadeIn>

      <FadeIn delay={0.80}>
        <Card>
          <h3 className="text-base sm:text-lg font-semibold">Currently learning</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-left text-black/75 dark:text-white/75">
            {learning.map((l) => <li key={l}>• {l}</li>)}
          </ul>
        </Card>
      </FadeIn>
    </div>
  );
}
