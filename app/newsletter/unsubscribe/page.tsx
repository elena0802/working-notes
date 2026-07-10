import Link from "next/link";
import { normalizeEmail } from "@/lib/newsletter-admin";
import {
  unsubscribeNewsletterEmail,
  verifyUnsubscribeToken,
} from "@/lib/newsletter-unsubscribe";

export const metadata = {
  title: "Unsubscribe",
  robots: { index: false, follow: false },
};

type PageProps = {
  searchParams: Promise<{ email?: string; token?: string }>;
};

export default async function NewsletterUnsubscribePage({
  searchParams,
}: PageProps) {
  const { email: rawEmail, token } = await searchParams;

  const email =
    typeof rawEmail === "string" && rawEmail.trim()
      ? normalizeEmail(rawEmail)
      : "";
  const tokenValue = typeof token === "string" ? token.trim() : "";

  const isValid =
    email.length > 0 &&
    tokenValue.length > 0 &&
    verifyUnsubscribeToken(email, tokenValue);

  if (!isValid) {
    return (
      <div className="page-shell mx-auto max-w-xl pb-24 pt-10 text-center md:pt-14">
        <p className="section-label">Newsletter</p>
        <h1 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">
          Unsubscribe
        </h1>
        <p className="body-calm mt-8 text-foreground/70">
          구독 해지 링크가 유효하지 않습니다.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block text-xs uppercase tracking-[0.28em] text-foreground/45 transition-colors hover:text-accent"
        >
          Return home
        </Link>
      </div>
    );
  }

  try {
    await unsubscribeNewsletterEmail(email);
  } catch {
    return (
      <div className="page-shell mx-auto max-w-xl pb-24 pt-10 text-center md:pt-14">
        <p className="section-label">Newsletter</p>
        <h1 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">
          Unsubscribe
        </h1>
        <p className="body-calm mt-8 text-foreground/70">
          구독 해지 링크가 유효하지 않습니다.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block text-xs uppercase tracking-[0.28em] text-foreground/45 transition-colors hover:text-accent"
        >
          Return home
        </Link>
      </div>
    );
  }

  return (
    <div className="page-shell mx-auto max-w-xl pb-24 pt-10 text-center md:pt-14">
      <p className="section-label">Newsletter</p>
      <h1 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">
        Unsubscribe
      </h1>
      <div className="body-calm mx-auto mt-8 max-w-md space-y-4 text-foreground/75">
        <p>구독이 해지되었습니다.</p>
        <p>Second Season의 편지는 더 이상 이 이메일로 발송되지 않습니다.</p>
      </div>
      <Link
        href="/newsletter"
        className="mt-10 inline-block text-xs uppercase tracking-[0.28em] text-foreground/45 transition-colors hover:text-accent"
      >
        Back to letters
      </Link>
    </div>
  );
}
