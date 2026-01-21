import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";

export default function SkillsGrid({
  strengths,
  learning,
}: { strengths: string[]; learning: string[] }) {
  return (
    <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
      <FadeIn delay={0.50}>
        <Card>
          <h3 className="text-base sm:text-lg font-semibold">
            <span className="text-accent">›</span> What I&apos;m good at
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-left text-muted">
            {strengths.map((s) => <li key={s}><span className="text-accent/60 mr-1">—</span> {s}</li>)}
          </ul>
        </Card>
      </FadeIn>

      <FadeIn delay={0.70}>
        <Card>
          <h3 className="text-base sm:text-lg font-semibold">
            <span className="text-accent">›</span> Currently learning
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-left text-muted">
            {learning.map((l) => <li key={l}><span className="text-accent/60 mr-1">—</span> {l}</li>)}
          </ul>
        </Card>
      </FadeIn>
    </div>
  );
}
