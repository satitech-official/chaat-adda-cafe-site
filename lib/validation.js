import { z } from "zod";

const phone = z.string().regex(/^[0-9+\-\s()]{7,18}$/, "Enter a valid phone number");
const consent = z.literal(true, { errorMap: () => ({ message: "Consent is required" }) });

export const contactSchema = z.object({
  name: z.string().min(2).max(80),
  phone,
  email: z.string().email(),
  subject: z.string().min(3).max(100),
  message: z.string().min(10).max(1000),
  consent,
  website: z.string().max(0).optional()
});

export const reservationSchema = z.object({
  name: z.string().min(2).max(80),
  phone,
  email: z.string().email(),
  date: z.string().min(10),
  time: z.string().min(4),
  guests: z.coerce.number().min(1).max(18),
  seating: z.string().min(2),
  occasion: z.string().min(2),
  request: z.string().max(800).optional(),
  consent,
  website: z.string().max(0).optional()
}).refine((data) => new Date(`${data.date}T${data.time}`) > new Date(), {
  message: "Choose a future date and time",
  path: ["date"]
});

export const franchiseSchema = z.object({
  name: z.string().min(2).max(80),
  phone,
  email: z.string().email(),
  city: z.string().min(2),
  state: z.string().min(2),
  location: z.string().min(2),
  investment: z.string().min(2),
  experience: z.string().min(2),
  message: z.string().min(10).max(1000),
  consent,
  website: z.string().max(0).optional()
});

export const newsletterSchema = z.object({
  email: z.string().email(),
  consent,
  website: z.string().max(0).optional()
});
