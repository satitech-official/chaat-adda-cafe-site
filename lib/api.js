import { NextResponse } from "next/server";

const buckets = new Map();

export function rateLimit(request, key = "form", limit = 8, windowMs = 60_000) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const bucketKey = `${key}:${ip}`;
  const now = Date.now();
  const bucket = buckets.get(bucketKey) || [];
  const active = bucket.filter((time) => now - time < windowMs);
  active.push(now);
  buckets.set(bucketKey, active);
  return active.length <= limit;
}

export function sanitizePayload(payload) {
  return Object.fromEntries(Object.entries(payload).map(([key, value]) => [key, typeof value === "string" ? value.trim().replace(/[<>]/g, "") : value]));
}

export function ok(message, extra = {}) {
  return NextResponse.json({ message, ...extra });
}

export function bad(message, status = 400, issues = null) {
  return NextResponse.json({ message, issues }, { status });
}
