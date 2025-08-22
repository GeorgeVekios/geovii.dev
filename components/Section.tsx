import {ReactNode} from "react";

type Props = {
  title?: string;
  right?: ReactNode; //optional right-aligned header content
  children: ReactNode;
  className?: string;
};

export default function Section({ title, right, children, className}: Props){
  return (
    <section className={`max-w-5xl mx-auto ${className ?? ""}`}>
      {(title || right) && (
        <div className="flex items-baseline justify-between">
          {title ? (
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h2>
          ) : <span />}
          {right ?? null}
        </div>
      )}
      <div className={title ? "mt-6" : ""}>{children}</div>
    </section>
  );
}