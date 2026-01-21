"use client";
import Link from "next/link";
import { site } from "@/data/site";
import {usePathname} from "next/navigation";
import ThemePicker from "@/components/ui/ThemePicker";

const links =[
  {href: "/about", label: "About"},
  {href: "/experience", label: "Experience"},
  {href: "/projects", label: "Projects"},
  //{href: "/contact", label: "Contact"},
];

export default function Header(){
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-accent hover:text-accent-hover transition-colors">
          {site.headerName}
        </Link>
        <nav className="flex gap-6 text-sm">
          {links.map(({href, label}) => {
            const active = pathname === href;
            return(
              <Link
                key={href}
                href={href}
                className={`transition-colors ${
                  active
                    ? "text-accent font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <ThemePicker />
      </div>
    </header>
  )
}