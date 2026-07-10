"use client";

import Link from "next/link";
import { FormEvent, useCallback, useState } from "react";

const ADMIN_SECRET_STORAGE_KEY = "newsletter-admin-secret";

type NewsletterAdminIssue = {
  slug: string;
  title: string;
  subject: string;
  status: "draft" | "published";
  publishedAt: string;
  alreadySent: boolean;
  sentAt: string | null;
  recipientCount: number | null;
  campaignStatus: "sent" | "not_sent";
};

type NewsletterAdminSystemStatus = {
  resend: boolean;
  supabase: boolean;
  unsubscribe: boolean;
};

type NewsletterAdminOverview = {
  ok: true;
  activeSubscriberCount: number;
  sendBatchLimit: number;
  publishedIssueCount: number;
  sentCampaignCount: number;
  systemStatus: NewsletterAdminSystemStatus;
  issues: NewsletterAdminIssue[];
};

type ResultMessage = {
  tone: "success" | "error";
  text: string;
};

function formatPublishedDate(publishedAt: string): string {
  const date = new Date(`${publishedAt}T12:00:00`);

  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatSentAt(sentAt: string): string {
  const date = new Date(sentAt);

  return date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function HealthCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string | number;
  detail?: string;
}) {
  return (
    <div className="flex flex-col justify-between border border-foreground/10 bg-background/60 px-5 py-6 sm:px-6">
      <p className="section-label">{label}</p>
      <p className="mt-6 font-serif text-3xl leading-none text-foreground sm:text-4xl">
        {value}
      </p>
      {detail && (
        <p className="body-calm mt-4 text-foreground/55">{detail}</p>
      )}
    </div>
  );
}

function StatusBadge({
  label,
  connected,
}: {
  label: string;
  connected: boolean;
}) {
  return (
    <div className="flex items-center gap-3 border border-foreground/10 bg-background/40 px-4 py-3.5">
      <span
        className={`text-sm leading-none ${connected ? "text-accent" : "text-foreground/35"}`}
        aria-hidden
      >
        {connected ? "✓" : "—"}
      </span>
      <span className="text-sm text-foreground/75">{label}</span>
      <span className="sr-only">{connected ? "Connected" : "Not configured"}</span>
    </div>
  );
}

function IssueCard({
  issue,
  sendBatchLimit,
  activeSubscriberCount,
  isSending,
  sendingMode,
  onSendTest,
  onSendAll,
}: {
  issue: NewsletterAdminIssue;
  sendBatchLimit: number;
  activeSubscriberCount: number;
  isSending: boolean;
  sendingMode: "test" | "all" | null;
  onSendTest: () => void;
  onSendAll: () => void;
}) {
  const sendAllDisabled =
    issue.alreadySent ||
    issue.status !== "published" ||
    activeSubscriberCount === 0;

  return (
    <article className="border border-foreground/10 bg-background/40 px-5 py-8 sm:px-8 sm:py-10">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="section-label">
          {issue.status === "published" ? "Published" : "Draft"}
        </span>
        <span
          className={`text-xs uppercase tracking-[0.22em] ${
            issue.campaignStatus === "sent"
              ? "text-accent"
              : "text-foreground/40"
          }`}
        >
          {issue.campaignStatus === "sent" ? "Campaign sent" : "Not sent"}
        </span>
      </div>

      <h3 className="mt-5 font-serif text-2xl leading-snug text-foreground sm:text-[1.75rem]">
        {issue.title}
      </h3>
      <p className="mt-3 font-serif text-lg leading-relaxed text-foreground/55 sm:text-xl">
        {issue.subject}
      </p>

      <dl className="mt-8 grid gap-4 border-t border-muted/50 pt-6 sm:grid-cols-2">
        <div>
          <dt className="text-xs uppercase tracking-[0.22em] text-foreground/40">
            Status
          </dt>
          <dd className="mt-2 text-sm text-foreground/75">
            {issue.status === "published" ? "Published" : "Draft"}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.22em] text-foreground/40">
            Published
          </dt>
          <dd className="mt-2 text-sm text-foreground/75">
            {formatPublishedDate(issue.publishedAt)}
          </dd>
        </div>
      </dl>

      {issue.alreadySent && issue.sentAt && (
        <div className="mt-8 border-t border-muted/40 pt-6">
          <p className="section-label">Last campaign</p>
          <dl className="mt-4 space-y-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-foreground/40">
                Sent date
              </dt>
              <dd className="mt-1.5 text-sm text-foreground/75">
                {formatSentAt(issue.sentAt)}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-foreground/40">
                Recipient count
              </dt>
              <dd className="mt-1.5 text-sm text-foreground/75">
                {issue.recipientCount ?? "—"}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-foreground/40">
                Campaign status
              </dt>
              <dd className="mt-1.5 text-sm text-foreground/75">Completed</dd>
            </div>
          </dl>
        </div>
      )}

      <Link
        href={`/newsletter/${issue.slug}`}
        className="mt-8 inline-block text-xs uppercase tracking-[0.28em] text-foreground/45 transition-colors hover:text-accent"
      >
        Preview on web
      </Link>

      <div className="mt-10 flex flex-col gap-3 border-t border-muted/40 pt-8 sm:flex-row">
        <button
          type="button"
          disabled={isSending || issue.status !== "published"}
          onClick={onSendTest}
          className="border border-foreground/15 px-6 py-3.5 text-xs uppercase tracking-[0.28em] text-foreground transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSending && sendingMode === "test" ? "Sending…" : "Send test"}
        </button>
        <button
          type="button"
          disabled={isSending || sendAllDisabled}
          onClick={onSendAll}
          className="border border-foreground/15 px-6 py-3.5 text-xs uppercase tracking-[0.28em] text-foreground transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSending && sendingMode === "all" ? "Sending…" : "Send to all"}
        </button>
      </div>

      {!issue.alreadySent &&
        issue.status === "published" &&
        activeSubscriberCount > sendBatchLimit && (
          <p className="body-calm mt-4 text-foreground/50">
            다음 발송 시 최대 {sendBatchLimit}명까지 전달됩니다.
          </p>
        )}
    </article>
  );
}

export default function NewsletterAdminPanel() {
  const [secretInput, setSecretInput] = useState("");
  const [adminSecret, setAdminSecret] = useState<string | null>(null);
  const [overview, setOverview] = useState<NewsletterAdminOverview | null>(null);
  const [overviewLoading, setOverviewLoading] = useState(false);
  const [overviewError, setOverviewError] = useState<string | null>(null);
  const [sendingSlug, setSendingSlug] = useState<string | null>(null);
  const [sendingMode, setSendingMode] = useState<"test" | "all" | null>(null);
  const [result, setResult] = useState<ResultMessage | null>(null);

  const loadOverview = useCallback(async (secret: string) => {
    setOverviewLoading(true);
    setOverviewError(null);

    try {
      const response = await fetch("/api/newsletter/admin/overview", {
        headers: {
          "x-newsletter-admin-secret": secret,
        },
      });

      const data = (await response.json()) as NewsletterAdminOverview & {
        error?: string;
      };

      if (!response.ok) {
        if (response.status === 401) {
          setAdminSecret(null);
          sessionStorage.removeItem(ADMIN_SECRET_STORAGE_KEY);
        }

        setOverview(null);
        setOverviewError(
          response.status === 401
            ? "Admin secret이 올바르지 않습니다."
            : "데이터를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.",
        );
        return;
      }

      setOverview(data);
    } catch {
      setOverview(null);
      setOverviewError("데이터를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setOverviewLoading(false);
    }
  }, []);

  function handleUnlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = secretInput.trim();

    if (!trimmed) {
      return;
    }

    sessionStorage.setItem(ADMIN_SECRET_STORAGE_KEY, trimmed);
    setAdminSecret(trimmed);
    setResult(null);
    void loadOverview(trimmed);
  }

  function handleLock() {
    sessionStorage.removeItem(ADMIN_SECRET_STORAGE_KEY);
    setAdminSecret(null);
    setSecretInput("");
    setOverview(null);
    setOverviewError(null);
    setResult(null);
  }

  function handleUseStoredSecret() {
    const stored = sessionStorage.getItem(ADMIN_SECRET_STORAGE_KEY);

    if (!stored) {
      return;
    }

    setAdminSecret(stored);
    setSecretInput(stored);
    setResult(null);
    void loadOverview(stored);
  }

  async function handleSend(slug: string, mode: "test" | "all") {
    if (!adminSecret || !overview) {
      return;
    }

    const issue = overview.issues.find((item) => item.slug === slug);

    if (!issue) {
      return;
    }

    if (mode === "all") {
      if (issue.alreadySent) {
        setResult({
          tone: "error",
          text: "이 편지는 이미 발송되었습니다.",
        });
        return;
      }

      if (issue.status !== "published") {
        setResult({
          tone: "error",
          text: "발행된 편지만 전체 발송할 수 있습니다.",
        });
        return;
      }

      if (overview.activeSubscriberCount === 0) {
        setResult({
          tone: "error",
          text: "활성 구독자가 없습니다.",
        });
        return;
      }

      const recipientNote =
        overview.activeSubscriberCount > overview.sendBatchLimit
          ? `${overview.sendBatchLimit}명까지 발송됩니다 (현재 활성 구독자 ${overview.activeSubscriberCount}명).`
          : `${overview.activeSubscriberCount}명에게 발송됩니다.`;

      const confirmed = window.confirm(
        `"${issue.title}"을(를) ${recipientNote}\n\n이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?`,
      );

      if (!confirmed) {
        return;
      }
    }

    setSendingSlug(slug);
    setSendingMode(mode);
    setResult(null);

    try {
      const response = await fetch("/api/newsletter/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-newsletter-admin-secret": adminSecret,
        },
        body: JSON.stringify({ newsletterSlug: slug, mode }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        mode?: string;
        messageId?: string;
        recipients?: number;
        newsletterSlug?: string;
        error?: string;
        details?: string;
      };

      if (response.status === 401) {
        handleLock();
        setResult({
          tone: "error",
          text: "Admin secret이 올바르지 않습니다.",
        });
        return;
      }

      if (response.status === 409) {
        setResult({
          tone: "error",
          text: "이 편지는 이미 발송되었습니다.",
        });
        await loadOverview(adminSecret);
        return;
      }

      if (!response.ok) {
        setResult({
          tone: "error",
          text: data.error ?? "발송에 실패했습니다. 잠시 후 다시 시도해주세요.",
        });
        return;
      }

      if (mode === "test" && data.messageId) {
        setResult({
          tone: "success",
          text: `테스트 메일을 보냈습니다. messageId: ${data.messageId}`,
        });
      } else if (mode === "all" && typeof data.recipients === "number") {
        setResult({
          tone: "success",
          text: `${data.recipients}명에게 편지를 보냈습니다.`,
        });
        await loadOverview(adminSecret);
      } else {
        setResult({
          tone: "success",
          text: "발송이 완료되었습니다.",
        });
        await loadOverview(adminSecret);
      }
    } catch {
      setResult({
        tone: "error",
        text: "발송에 실패했습니다. 잠시 후 다시 시도해주세요.",
      });
    } finally {
      setSendingSlug(null);
      setSendingMode(null);
    }
  }

  if (!adminSecret) {
    return (
      <div className="mx-auto max-w-md">
        <p className="section-label">Admin</p>
        <h2 className="mt-4 font-serif text-2xl text-foreground sm:text-3xl">
          Enter admin secret
        </h2>
        <p className="body-calm mt-4 text-foreground/65">
          내부 발송용 페이지입니다. Admin secret을 입력해야 합니다.
        </p>

        <form onSubmit={handleUnlock} className="mt-8 space-y-4">
          <label htmlFor="admin-secret" className="sr-only">
            Admin secret
          </label>
          <input
            id="admin-secret"
            type="password"
            value={secretInput}
            onChange={(event) => setSecretInput(event.target.value)}
            autoComplete="off"
            className="w-full border border-foreground/15 bg-transparent px-5 py-3.5 text-base text-foreground placeholder:text-foreground/35 focus:border-accent focus:outline-none sm:text-sm"
            placeholder="Admin secret"
          />
          <button
            type="submit"
            className="w-full border border-foreground/15 px-8 py-3.5 text-xs uppercase tracking-[0.28em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Unlock
          </button>
        </form>

        <button
          type="button"
          onClick={handleUseStoredSecret}
          className="mt-6 text-xs uppercase tracking-[0.22em] text-foreground/45 transition-colors hover:text-accent"
        >
          Use secret from this session
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-col gap-4 border-b border-muted/50 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label">Admin</p>
          <h2 className="mt-4 font-serif text-2xl text-foreground sm:text-3xl">
            Newsletter
          </h2>
        </div>
        <button
          type="button"
          onClick={handleLock}
          className="text-xs uppercase tracking-[0.22em] text-foreground/45 transition-colors hover:text-accent"
        >
          Lock
        </button>
      </div>

      {overviewLoading && (
        <p className="body-calm mt-12 text-foreground/60">불러오는 중…</p>
      )}

      {overviewError && (
        <p className="mt-12 text-sm text-foreground/60" role="alert">
          {overviewError}
        </p>
      )}

      {overview && !overviewLoading && (
        <>
          <section className="mt-12">
            <p className="section-label">Newsletter health</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <HealthCard
                label="Active subscribers"
                value={overview.activeSubscriberCount}
                detail={`Up to ${overview.sendBatchLimit} per send`}
              />
              <HealthCard
                label="Published issues"
                value={overview.publishedIssueCount}
              />
              <HealthCard
                label="Sent campaigns"
                value={overview.sentCampaignCount}
              />
            </div>
          </section>

          <section className="mt-12 border-t border-muted/50 pt-12">
            <p className="section-label">System status</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <StatusBadge
                label="Resend connected"
                connected={overview.systemStatus.resend}
              />
              <StatusBadge
                label="Supabase connected"
                connected={overview.systemStatus.supabase}
              />
              <StatusBadge
                label="Unsubscribe enabled"
                connected={overview.systemStatus.unsubscribe}
              />
            </div>
          </section>

          <section className="mt-16">
            <p className="section-label">Issues</p>
            <div className="mt-8 space-y-6">
              {overview.issues.map((issue) => (
                <IssueCard
                  key={issue.slug}
                  issue={issue}
                  sendBatchLimit={overview.sendBatchLimit}
                  activeSubscriberCount={overview.activeSubscriberCount}
                  isSending={sendingSlug === issue.slug}
                  sendingMode={sendingSlug === issue.slug ? sendingMode : null}
                  onSendTest={() => void handleSend(issue.slug, "test")}
                  onSendAll={() => void handleSend(issue.slug, "all")}
                />
              ))}
            </div>
          </section>
        </>
      )}

      {result && (
        <div
          className={`mt-12 border px-5 py-5 text-sm leading-relaxed sm:px-6 ${
            result.tone === "success"
              ? "border-foreground/15 bg-background/50 text-foreground/75"
              : "border-foreground/20 bg-background/30 text-foreground/65"
          }`}
          role="status"
        >
          {result.text}
        </div>
      )}
    </div>
  );
}
