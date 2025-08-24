import SocialBar from "@/components/SocialBar"

export default function Footer(){
  return (
    <footer className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 mt-16 pt-8 border-t border-black/10 dark:border-white/10 text-sm text-black/60 dark:text-white/60">
      <SocialBar className="mb-4" />
      <p>© {new Date().getFullYear()} George Vekios · Built with Next.js & Tailwind</p>
    </footer>
  );
}