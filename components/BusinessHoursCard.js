import { Clock } from "lucide-react";
import { site } from "@/data/site";
import { todayHours } from "@/lib/utils";

export default function BusinessHoursCard() {
  const status = todayHours(site.hours, site.timezone);

  return (
    <section className="rounded-[1.4rem] bg-white/85 p-6 shadow-glow">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow mb-2">Business Hours</p>
          <h2 className="text-2xl font-black text-espresso">Weekly schedule</h2>
        </div>
        <span className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-black ${status.openNow ? "bg-olive/15 text-olive" : "bg-terracotta/15 text-terracotta"}`}>
          <Clock size={16} /> {status.openNow ? "Open Now" : "Closed Now"}
        </span>
      </div>
      <div className="grid gap-2">
        {site.hours.map((item) => {
          const active = item.day === status.current.day;
          return (
            <div key={item.day} className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold ${active ? "bg-saffron text-espresso" : "bg-cream/75 text-charcoal/75"}`}>
              <span>{item.day}</span>
              <span>{item.open} - {item.close}</span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-sm leading-6 text-charcoal/65">Holiday hours and exact opening rules are configurable once verified by the cafe team.</p>
    </section>
  );
}
