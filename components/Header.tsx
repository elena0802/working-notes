import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/notes", label: "기록과 생각" },
];

export default function Header() {
  return (
    <header className="border-b border-muted/50">
      <div className="page-shell mx-auto max-w-7xl py-8 md:py-10 lg:py-12">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="group max-w-full">
            <p className="font-serif text-lg tracking-[0.16em] text-foreground transition-colors group-hover:text-accent sm:text-xl md:text-2xl md:tracking-[0.22em]">
              WORKING NOTES
            </p>
          </Link>

          <nav aria-label="Primary" className="mt-6 w-full md:mt-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-6 md:gap-x-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs uppercase tracking-[0.22em] text-foreground/70 transition-colors hover:text-accent sm:tracking-[0.28em]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
