import { newsletterSchema } from "@/lib/validation";
import { bad, ok, rateLimit, sanitizePayload } from "@/lib/api";

const subscribers = new Set();

export async function POST(request) {
  if (!rateLimit(request, "newsletter", 10)) return bad("Too many subscription attempts. Please wait and try again.", 429);
  const body = sanitizePayload(await request.json());
  if (body.website) return bad("Spam protection rejected this request.", 400);
  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) return bad("Please enter a valid email and consent.", 422, parsed.error.flatten());
  const email = parsed.data.email.toLowerCase();
  if (subscribers.has(email)) return ok("You are already on the cafe updates list.");
  subscribers.add(email);
  return ok("Subscribed. You will receive cafe updates once the mailing provider is connected.");
}
