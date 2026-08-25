import { SiteFooter } from "@/components/SiteFooter";

export default function ThankYouPage() {
  return (
    <main className="thank-you-page min-h-screen w-full bg-[#02070f]">
      <section className="content-wrap px-6 py-10 sm:px-8 md:py-12">
        <div className="flex justify-center border-b border-white/10 pb-8">
          <img
            src="/logoo.png"
            alt="Digital Usha"
            className="h-auto w-[210px] max-w-[72vw] sm:w-[230px] md:w-[240px]"
            draggable={false}
          />
        </div>
      </section>

      <section className="content-wrap px-6 pb-12 pt-4 sm:px-8 md:pb-14 md:pt-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="eyebrow !text-[#ff2600]">THANK YOU</span>
          <h1 className="mt-4 max-w-3xl text-balance text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.95] tracking-[-0.07em] text-white sm:text-[clamp(2rem,4vw,4rem)]">
            Your consultation request has been received.
          </h1>

          <p className="mt-7 text-[clamp(1.02rem,1.35vw,1.16rem)] font-normal leading-[1.2] tracking-[-0.04em] text-white sm:text-[1.16rem]">
            Watch the video below before closing this page...
          </p>

          <div className="mt-4 w-full max-w-[420px] overflow-hidden rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,26,57,0.96),rgba(9,18,42,0.96))] p-2 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <div className="aspect-video overflow-hidden rounded-[0.9rem] bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/7iJWVI4hwVk"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-[1rem] font-semibold leading-7 tracking-[-0.02em] text-[#d6dbe7] sm:text-[1.02rem]">
            This Consultation Is For Serious Business Owners Only.
          </p>

          <a
            href="https://wa.me/+9779767122322"
            target="_blank"
            rel="noreferrer"
            className="gradient-cta mt-4 inline-flex h-12 items-center justify-center rounded-full px-7 text-[0.98rem] font-extrabold text-white"
          >
            Chat on WhatsApp
          </a>

          <p className="mt-4 text-[1rem] font-semibold leading-7 tracking-[-0.02em] text-white sm:text-[1.03rem]">
            See you inside the Call.
          </p>

          <div className="mt-7 flex justify-center">
            <div className="flex items-center gap-3">
              <img
                src="/ChatGPT Image Aug 24, 2026, 03_59_59 AM.png"
                alt="Usha Uprety"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/15"
                draggable={false}
              />
              <p className="text-[0.96rem] font-semibold tracking-[-0.02em] text-white sm:text-[1rem]">
                Usha Uprety
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}



