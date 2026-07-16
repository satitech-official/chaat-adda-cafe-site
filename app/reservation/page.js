import FormBlock from "@/components/FormBlock";
import { SectionHeading } from "@/components/SectionShell";

export const metadata = { title: "Reservation", description: "Request a CHAAT ADDA table with validated booking details and manual confirmation." };

export default function ReservationPage() {
  return (
    <div className="pt-28">
      <section className="section-pad">
        <div className="container-main grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <SectionHeading eyebrow="Reservation" title="Request a table at CHAAT ADDA." text="Share your visit date, time, guest count and occasion. The request is submitted securely and remains pending until manually confirmed by the Chaat Adda team." />
          <FormBlock type="reservation" />
        </div>
      </section>
    </div>
  );
}
