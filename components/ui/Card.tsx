import {ReactNode} from "react";

export default function Card({
  children,
  className="",
}: {children: ReactNode; className?: string}) {
  return (
    <div className={`rounded-xl bg-surface border border-border hover:border-border-hover transition-colors p-4 sm:p-5 ${className}`}>
      {children}
    </div>
  );
}