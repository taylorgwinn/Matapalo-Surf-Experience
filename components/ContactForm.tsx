"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    whatsapp: "",
    dates: "",
    interest: "",
    message: "",
  });

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("https://formspree.io/f/mqeybeke", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setState("success");
        setFields({ name: "", email: "", whatsapp: "", dates: "", interest: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const inputCls =
    "w-full rounded-[10px] border-2 border-[#e0ead1] bg-cream px-4 py-3 font-nunito text-[0.95rem] text-text outline-none transition-colors duration-200 focus:border-ocean appearance-none";
  const labelCls =
    "mb-[0.35rem] block text-[0.82rem] font-extrabold uppercase tracking-[0.06em] text-[#5a6b5b]";

  return (
    <div className="rounded-[20px] bg-cream p-8 shadow-[0_8px_30px_rgba(0,0,0,0.07)]">
      <h3 className="font-bebas mb-[1.2rem] text-[1.5rem] tracking-[0.03em] text-dark">
        Send a Message
      </h3>

      {state === "success" ? (
        <div className="rounded-[14px] border-2 border-jungle bg-[#f0faf4] p-6 text-center">
          <p className="text-[1.1rem] font-bold text-jungle">Message sent! 🤙</p>
          <p className="mt-2 text-[0.95rem] text-[#4a5c4b]">
            We&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className={labelCls}>Your Name</label>
            <input type="text" name="name" placeholder="Jane Doe" required value={fields.name} onChange={set("name")} className={inputCls} />
          </div>
          <div className="mb-4">
            <label className={labelCls}>Email</label>
            <input type="email" name="email" placeholder="jane@example.com" required value={fields.email} onChange={set("email")} className={inputCls} />
          </div>
          <div className="mb-4">
            <label className={labelCls}>WhatsApp Number</label>
            <input type="tel" name="whatsapp" placeholder="e.g. +1 555 123 4567" value={fields.whatsapp} onChange={set("whatsapp")} className={inputCls} />
          </div>
          <div className="mb-4">
            <label className={labelCls}>Dates</label>
            <input type="text" name="dates" placeholder="e.g. March 15–20, flexible, TBD..." value={fields.dates} onChange={set("dates")} className={inputCls} />
          </div>
          <div className="mb-4">
            <label className={labelCls}>I&apos;m Interested In</label>
            <select name="interest" value={fields.interest} onChange={set("interest")} className={inputCls}>
              <option value="">Select a service...</option>
              <option>Surf Lesson / Guiding</option>
              <option>Excursions</option>
              <option>Partner Retreats</option>
              <option>General Inquiry</option>
              <option>Photos / Videos</option>
            </select>
          </div>
          <div className="mb-4">
            <label className={labelCls}>Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your trip, dates, skill level, group size..."
              value={fields.message}
              onChange={set("message")}
              className={`${inputCls} min-h-[100px] resize-y`}
            />
          </div>

          {state === "error" && (
            <p className="mb-3 text-[0.9rem] text-coral">
              Something went wrong. Please try again or contact us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={state === "submitting"}
            className="mt-2 w-full cursor-pointer rounded-full bg-coral py-[0.9rem] font-nunito text-[1rem] font-extrabold text-cream transition-all duration-200 hover:-translate-y-px hover:bg-[#c9623c] disabled:opacity-60"
          >
            {state === "submitting" ? "Sending..." : "Send It! 🤙"}
          </button>
        </form>
      )}
    </div>
  );
}
