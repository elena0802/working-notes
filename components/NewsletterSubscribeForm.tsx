"use client";

import { FormEvent, useId, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

type NewsletterSubscribeFormProps = {
  source?: "home" | "newsletter" | "footer";
  variant?: "default" | "editorial";
};

export default function NewsletterSubscribeForm({
  source = "home",
  variant = "default",
}: NewsletterSubscribeFormProps) {
  const inputId = useId();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading" || status === "success") {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p
        className="body-calm mt-10 text-foreground/75 sm:mt-12"
        role="status"
        aria-live="polite"
      >
        구독 신청이 완료되었습니다. 다음 편지를 보내드릴게요.
      </p>
    );
  }

  return (
    <div className="mt-10 sm:mt-12">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:gap-0"
      >
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") {
              setStatus("idle");
            }
          }}
          placeholder="your@email.com"
          required
          autoComplete="email"
          disabled={status === "loading"}
          aria-invalid={status === "error"}
          className="min-w-0 flex-1 border border-foreground/15 bg-transparent px-5 py-3.5 text-base text-foreground placeholder:text-foreground/35 focus:border-accent focus:outline-none disabled:opacity-60 sm:text-sm"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-busy={status === "loading"}
          className={
            variant === "editorial"
              ? "home-btn shrink-0 sm:border-l-0"
              : "border border-foreground/15 px-8 py-3.5 text-xs uppercase tracking-[0.28em] text-foreground transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60 sm:border-l-0"
          }
        >
          {status === "loading"
            ? "Sending…"
            : variant === "editorial"
              ? "편지 받아보기 →"
              : "Subscribe"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-4 text-sm text-foreground/60" role="alert">
          잠시 후 다시 시도해주세요.
        </p>
      )}
    </div>
  );
}
