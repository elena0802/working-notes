import {
  validateSubscribeEmail,
  validateSubscribeSource,
} from "@/lib/newsletter-subscribe";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { NextRequest, NextResponse } from "next/server";

type SubscribeRequestBody = {
  email?: unknown;
  source?: unknown;
};

export async function POST(request: NextRequest) {
  let body: SubscribeRequestBody;

  try {
    body = (await request.json()) as SubscribeRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const emailResult = validateSubscribeEmail(body.email);

  if (!emailResult.ok) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const source = validateSubscribeSource(body.source);
  const now = new Date().toISOString();

  try {
    const supabase = getSupabaseAdmin();

    const { error } = await supabase.from("newsletter_subscribers").upsert(
      {
        email: emailResult.email,
        status: "active",
        source,
        updated_at: now,
        unsubscribed_at: null,
      },
      { onConflict: "email" },
    );

    if (error) {
      console.error("Newsletter subscribe failed:", error.message);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(
      "Newsletter subscribe error:",
      error instanceof Error ? error.message : error,
    );

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
