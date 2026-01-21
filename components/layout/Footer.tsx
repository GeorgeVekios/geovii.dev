import SocialBar from "@/components/shared/SocialBar"

export default function Footer(){
  return (
    <footer className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 mt-16 pt-8 border-t border-border text-sm text-muted">
      <SocialBar className="mb-4" />
      <p>© {new Date().getFullYear()} George Vekios · Built with Next.js & Tailwind</p>
    </footer>
  );
}