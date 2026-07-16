import { reservationSchema } from "@/lib/validation";
import { bad, ok, rateLimit, sanitizePayload } from "@/lib/api";

export async function POST(request) {
  if (!rateLimit(request, "reservation", 5)) return bad("Too many booking attempts. Please wait a minute and try again.", 429);
  const body = sanitizePayload(await request.json());
  if (body.website) return bad("Spam protection rejected this request.", 400);
  const parsed = reservationSchema.safeParse(body);
  if (!parsed.success) return bad("Please correct the highlighted booking fields.", 422, parsed.error.flatten());
  const hour = Number(parsed.data.time.split(":")[0]);
  if (hour < 9 || hour > 23) return bad("Please choose a reservation time within cafe business hours.", 422);
  console.info("Reservation request accepted", { date: parsed.data.date, time: parsed.data.time, guests: parsed.data.guests });
  return ok("Your table request was submitted. The cafe team must manually confirm the booking before it is final.");
}
