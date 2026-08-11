"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

export function CTAForm() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formsubmit.co/ajax/upretiusha973@gmail.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to submit consultation form");
    }

    router.push("/thank-you");
  }

  return (
    <section id="consultation-form" className="w-full border-b border-line bg-[#040916]">
      <div className="content-wrap px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <span className="eyebrow">Register Now</span>
          <h2 className="section-title mt-6 text-[clamp(2.1rem,4.2vw,3.5rem)]">
            Book Your Free 1:1 Consultation
          </h2>
          <p className="body-copy mx-auto mt-5 max-w-3xl text-[1.03rem] leading-8 text-[#bcc5d3]">
            Get a personalized strategy designed around your business goals, challenges, and
            growth opportunities.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-[2rem] border border-line bg-[linear-gradient(135deg,rgba(13,40,60,0.86),rgba(34,18,78,0.7))] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:p-5">
          <form
            onSubmit={handleSubmit}
            className="rounded-[1.65rem] border border-white/8 bg-[#040916]/80 px-5 py-8 sm:px-7 md:px-10 md:py-10"
          >
            <input type="hidden" name="_subject" value="New consultation request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-[1rem] font-extrabold text-white">
                  Full Name
                </label>
                <input
                  required
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-[#050b19] px-4 py-4 text-[1rem] text-white outline-none transition focus:border-cyan-400/60"
                />
              </div>

              <div>
                <label className="mb-3 block text-[1rem] font-extrabold text-white">
                  Active Email
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Enter your active email"
                  className="w-full rounded-xl border border-white/10 bg-[#050b19] px-4 py-4 text-[1rem] text-white outline-none transition focus:border-cyan-400/60"
                />
              </div>

              <div>
                <label className="mb-3 block text-[1rem] font-extrabold text-white">
                  WhatsApp Number
                </label>
                <input
                  required
                  name="whatsapp"
                  type="tel"
                  placeholder="Enter your WhatsApp number"
                  className="w-full rounded-xl border border-white/10 bg-[#050b19] px-4 py-4 text-[1rem] text-white outline-none transition focus:border-cyan-400/60"
                />
              </div>

              <div>
                <label className="mb-3 block text-[1rem] font-extrabold text-white">
                  Business Name
                </label>
                <input
                  required
                  name="businessName"
                  type="text"
                  placeholder="Enter your business name"
                  className="w-full rounded-xl border border-white/10 bg-[#050b19] px-4 py-4 text-[1rem] text-white outline-none transition focus:border-cyan-400/60"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-3 block text-[1rem] font-extrabold text-white">
                  Website / Facebook URL
                </label>
                <input
                  name="website"
                  type="url"
                  placeholder="Add your website or Facebook URL"
                  className="w-full rounded-xl border border-white/10 bg-[#050b19] px-4 py-4 text-[1rem] text-white outline-none transition focus:border-cyan-400/60"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-3 block text-[1rem] font-extrabold text-white">
                  Anything you want to say
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us a little about your business, goals, or current challenges"
                  className="w-full rounded-xl border border-white/10 bg-[#050b19] px-4 py-4 text-[1rem] text-white outline-none transition focus:border-cyan-400/60"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 text-center">
              <p className="max-w-2xl text-[0.96rem] leading-7 text-[#aab4c3]">
                We respect your privacy. No spam.
              </p>
              <button
                type="submit"
                className="gradient-cta inline-flex h-14 items-center justify-center rounded-full px-9 text-[1rem] font-extrabold tracking-[-0.03em] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Book Free Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
