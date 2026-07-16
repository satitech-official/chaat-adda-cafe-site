import { contactSchema } from "@/lib/validation";
import { bad, ok, rateLimit, sanitizePayload } from "@/lib/api";

export async function POST(request) {
  if (!rateLimit(request, "contact")) return bad("Too many requests. Please wait a minute and try again.", 429);
  const body = sanitizePayload(await request.json());
  if (body.website) return bad("Spam protection rejected this request.", 400);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return bad("Please correct the highlighted fields.", 422, parsed.error.flatten());
  console.info("Contact inquiry accepted", { subject: parsed.data.subject, email: parsed.data.email });
  return ok("Thanks. Your message was received and is ready for cafe follow-up.");
}
