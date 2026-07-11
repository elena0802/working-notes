import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/notes", label: "기록과 생각" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-muted/50">
      <div className="page-shell mx-auto max-w-7xl py-14 md:py-20">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="group">
            <p className="font-serif text-lg tracking-[0.16em] text-foreground transition-colors group-hover:text-accent md:text-xl md:tracking-[0.18em]">
              WORKING NOTES
            </p>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/65">
            의사결정 과정과 생각의 변화를 기록합니다.
          </p>
          <nav
            aria-label="Footer"
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.22em] text-foreground/50 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
