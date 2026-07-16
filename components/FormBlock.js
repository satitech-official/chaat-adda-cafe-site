"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, franchiseSchema, newsletterSchema, reservationSchema } from "@/lib/validation";

const configs = {
  contact: {
    schema: contactSchema,
    endpoint: "/api/contact",
    fields: ["name", "phone", "email", "subject", "message"],
    submit: "Send Message"
  },
  reservation: {
    schema: reservationSchema,
    endpoint: "/api/reservation",
    fields: ["name", "phone", "email", "date", "time", "guests", "seating", "occasion", "request"],
    submit: "Request Booking"
  },
  franchise: {
    schema: franchiseSchema,
    endpoint: "/api/franchise",
    fields: ["name", "phone", "email", "city", "state", "location", "investment", "experience", "message"],
    submit: "Send Franchise Inquiry"
  },
  newsletter: {
    schema: newsletterSchema,
    endpoint: "/api/newsletter",
    fields: ["email"],
    submit: "Subscribe"
  }
};

export default function FormBlock({ type = "contact", compact = false }) {
  const config = configs[type];
  const [status, setStatus] = useState(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(config.schema), defaultValues: { consent: false, website: "" } });

  async function onSubmit(values) {
    setStatus(null);
    const response = await fetch(config.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const data = await response.json();
    if (!response.ok) {
      setStatus({ type: "error", message: data.message || "Something went wrong. Please try again." });
      return;
    }
    reset();
    setStatus({ type: "success", message: data.message });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-[1.5rem] bg-white/80 p-5 shadow-glow md:p-7" noValidate>
      <input className="hidden" tabIndex="-1" autoComplete="off" {...register("website")} />
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        {config.fields.map((field) => <Field key={field} field={field} register={register} error={errors[field]?.message} />)}
      </div>
      <label className="flex items-start gap-3 text-sm text-charcoal/75">
        <input type="checkbox" className="mt-1 h-5 w-5 accent-terracotta" {...register("consent")} />
        I consent to being contacted about this request. Bookings are confirmed manually by the cafe team.
      </label>
      {errors.consent && <p className="text-sm font-bold text-terracotta">{errors.consent.message}</p>}
      {status && <p role="status" className={`rounded-2xl p-4 font-bold ${status.type === "success" ? "bg-olive/15 text-olive" : "bg-terracotta/15 text-terracotta"}`}>{status.message}</p>}
      <button disabled={isSubmitting} className="btn-primary disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting && <Loader2 className="animate-spin" size={18} />}{config.submit}
      </button>
    </form>
  );
}

function Field({ field, register, error }) {
  const labels = {
    name: "Full name", phone: "Phone number", email: "Email address", subject: "Subject", message: "Message",
    date: "Reservation date", time: "Reservation time", guests: "Number of guests", seating: "Seating preference",
    occasion: "Occasion", request: "Special request", city: "City", state: "State", location: "Preferred location",
    investment: "Investment range", experience: "Business experience"
  };
  const isTextArea = ["message", "request", "experience"].includes(field);
  const isFull = isTextArea || field === "email";
  const type = field === "email" ? "email" : field === "date" ? "date" : field === "time" ? "time" : field === "guests" ? "number" : "text";
  return (
    <label className={isFull ? "md:col-span-2" : ""}>
      <span className="mb-2 block text-sm font-extrabold text-espresso">{labels[field]}</span>
      {isTextArea ? (
        <textarea rows={4} className="w-full rounded-2xl border border-espresso/10 bg-cream/65 px-4 py-3 outline-none focus:border-terracotta" {...register(field)} />
      ) : (
        <input type={type} min={field === "date" ? new Date().toISOString().split("T")[0] : undefined} className="w-full rounded-2xl border border-espresso/10 bg-cream/65 px-4 py-3 outline-none focus:border-terracotta" {...register(field)} />
      )}
      {error && <span className="mt-1 block text-sm font-bold text-terracotta">{error}</span>}
    </label>
  );
}
