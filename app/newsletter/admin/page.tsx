import NewsletterAdminPanel from "@/components/NewsletterAdminPanel";

export const metadata = {
  title: "Newsletter Admin",
  robots: { index: false, follow: false },
};

export default function NewsletterAdminPage() {
  return (
    <div className="page-shell mx-auto max-w-7xl pb-24 pt-10 md:pt-14">
      <header className="mx-auto max-w-3xl border-b border-muted/50 pb-10 md:pb-14">
        <p className="section-label">Newsletter</p>
        <h1 className="mt-5 font-serif text-4xl tracking-[0.02em] text-foreground sm:text-5xl">
          Admin
        </h1>
        <p className="body-calm mt-5 max-w-xl text-foreground/65 sm:mt-6">
          편지 발송과 운영 상태를 확인하는 내부 페이지입니다.
        </p>
      </header>

      <div className="mx-auto max-w-3xl pt-10 md:pt-14">
        <NewsletterAdminPanel />
      </div>
    </div>
  );
}
