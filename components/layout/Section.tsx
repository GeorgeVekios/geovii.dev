import { ReactNode } from "react";

type Props = {
  title?: string;
  right?: ReactNode; //optional right-aligned header content
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({
  title,
  right,
  children,
  className,
  id,
}: Props) {
  return (
    <section
      id={id}
      className={`max-w-5xl mx-auto scroll-mt-24 ${className ?? ""}`}
    >
      {(title || right) && (
        <div className="flex items-baseline justify-between mb-6">
          {title ? (
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              <span className="text-accent">/</span> {title}
            </h2>
          ) : (
            <span />
          )}
          {right && <span className="text-sm text-muted hover:text-accent transition-colors">{right}</span>}
        </div>
      )}
      <div>{children}</div>
    </section>
  );
}
