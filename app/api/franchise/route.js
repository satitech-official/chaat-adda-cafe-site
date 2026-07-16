import { franchiseSchema } from "@/lib/validation";
import { bad, ok, rateLimit, sanitizePayload } from "@/lib/api";

export async function POST(request) {
  if (!rateLimit(request, "franchise", 4)) return bad("Too many franchise inquiries. Please wait and try again.", 429);
  const body = sanitizePayload(await request.json());
  if (body.website) return bad("Spam protection rejected this request.", 400);
  const parsed = franchiseSchema.safeParse(body);
  if (!parsed.success) return bad("Please correct the highlighted inquiry fields.", 422, parsed.error.flatten());
  console.info("Franchise inquiry accepted", { city: parsed.data.city, email: parsed.data.email });
  return ok("Your franchise inquiry was received. Verified business details will be shared by the cafe team.");
}
