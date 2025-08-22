"use client";
import Link from "next/link";
import { site } from "@/data/site";
import {usePathname} from "next/navigation";

const links =[
  {href: "/about", label: "About"},
  {href: "/experience", label: "Experience"},
  {href: "/projects", label: "Projects"},
  {href: "/contact", label: "Contact"},
];

export default function Header(){
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/30 border-b border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 h-14 flex items-center justify-between">
        <Link href = "/" className="font-semibold tracking-tight">{site.name}</Link>
        <nav className="flex gap-5 text-sm">
          {links.map(({href, label}) => {
            const active = pathname === href;
            return(
              <Link
                key={href}
                href={href}
                className={active ? "underline underline-offset-4" : "hover:underline-offset-4"}
                >
                  {label}
                </Link>
            );
          })}
        </nav>
      </div>
    </header>
  )
}