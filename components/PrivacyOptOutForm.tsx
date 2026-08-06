"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function PrivacyOptOutForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const subject = String(form.get("subject") || "").trim();
    const message = String(form.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Please enter a valid email.";
    if (!phone) nextErrors.phone = "Please enter your phone number.";
    if (!subject) nextErrors.subject = "Please enter a subject.";
    if (!message) nextErrors.message = "Please add your message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("sent");
      formElement.reset();
    }, 900);
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line bg-white/70 px-6 py-12 text-center sm:px-10">
        <CheckCircle2 size={40} className="mx-auto text-teal" />
        <h3 className="mt-5 font-display text-2xl text-ink">Request submitted</h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-text-muted">
          Thank you. Your opt-out details have been recorded. You can also email the same details
          to info@vidimeth.com from your registered email address.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-teal"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-6 rounded-2xl border border-line bg-white/70 p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="privacy-name" name="name" label="Name" placeholder="Name" error={errors.name} />
        <Field
          id="privacy-email"
          name="email"
          label="E-Mail"
          type="email"
          placeholder="E-Mail"
          error={errors.email}
        />
        <Field
          id="privacy-phone"
          name="phone"
          label="Phone Number"
          type="tel"
          placeholder="Phone Number"
          error={errors.phone}
        />
        <Field
          id="privacy-subject"
          name="subject"
          label="Subject"
          placeholder="Subject"
          error={errors.subject}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="privacy-message" className="mb-1.5 block text-sm font-medium text-ink">
          Message Here
        </label>
        <textarea
          id="privacy-message"
          name="message"
          rows={5}
          placeholder="Message Here"
          className="w-full resize-none rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-teal disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting..." : "Submit Now"}
        {status !== "submitting" && <Send size={16} />}
      </button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  error,
  type = "text",
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
