import { readFileSync } from "fs";
import { join } from "path";

import { FlodeskRedirectWatcher } from "./FlodeskRedirectWatcher";

const flodeskEmbedHtml = readFileSync(
  join(process.cwd(), "components", "flodesk-embed.html"),
  "utf8",
);

export function CTAForm() {
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
          <div className="form-shell rounded-[1.65rem] border border-white/8 bg-[#040916]/80 px-5 py-8 sm:px-7 md:px-10 md:py-10">
            <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: flodeskEmbedHtml }} />
          </div>
        </div>
      </div>

      <FlodeskRedirectWatcher />
    </section>
  );
}
