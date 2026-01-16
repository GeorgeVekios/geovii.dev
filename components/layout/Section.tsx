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
        <div className="flex items-baseline justify-between">
          {title ? (
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              {title}
            </h2>
          ) : (
            <span />
          )}
          {right ?? null}
        </div>
      )}
      <div className={title ? "mt-6" : ""}>{children}</div>
    </section>
  );
}
