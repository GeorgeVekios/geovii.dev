import {ReactNode} from "react";

export default function Card({
  children,
  className="",
}: {children: ReactNode; className?: string}) {
  return (
    <div className={`rounded-2xl ring-1 ring-black/10 dark:ring-white/10 p-4 sm:p-5 ${className}`}>
      {children}
      </div>
  );
}