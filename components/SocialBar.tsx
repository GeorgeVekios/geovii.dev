import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { site } from "@/data/site";

type Props = { className?: string };

export default function SocialBar({ className = "" }: Props) {
  const items = [
    { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
    { href: site.github, label: "GitHub", Icon: Github },
    { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: site.resumePath, label: "Résumé", Icon: FileText },
  ] as const;

  return (
    <nav
      aria-label="Social links"
      className={`flex justify-center gap-3 ${className}`}
    >
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          title={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full
                     ring-1 ring-black/10 dark:ring-white/15
                     hover:bg-black/5 dark:hover:bg-white/5
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50
                     dark:focus-visible:ring-white/50 focus-visible:ring-offset-2
                     transition"
        >
          <Icon className="h-5 w-5" />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </nav>
  );
}
