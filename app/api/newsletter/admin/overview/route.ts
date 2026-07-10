import { verifyNewsletterAdminSecret } from "@/lib/newsletter-admin";
import { buildNewsletterAdminOverview } from "@/lib/newsletter-admin-data";
import { NextRequest, NextResponse } from "next/server";

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function GET(request: NextRequest) {
  const providedSecret = request.headers.get("x-newsletter-admin-secret");

  if (!verifyNewsletterAdminSecret(providedSecret)) {
    return jsonError("Unauthorized", 401);
  }

  try {
    const overview = await buildNewsletterAdminOverview();

    return NextResponse.json({ ok: true, ...overview });
  } catch (error) {
    console.error(
      "Newsletter admin overview failed:",
      error instanceof Error ? error.message : error,
    );

    return jsonError("Internal server error", 500);
  }
}
