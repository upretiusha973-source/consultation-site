import { SiteFooter } from "@/components/SiteFooter";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen w-full bg-[#040916]">
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

      <section className="content-wrap px-6 pb-16 pt-8 sm:px-8 md:pb-20 md:pt-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="eyebrow">Thank You</span>
          <h1 className="mt-7 max-w-3xl text-[clamp(2rem,4vw,3.4rem)] font-black leading-[0.98] tracking-[-0.06em] text-white">
            Your consultation request has been received.
          </h1>
          <p className="body-copy mt-7 max-w-4xl text-[1.06rem] leading-9 text-[#bcc5d3]">
            Thank you for booking your free 1:1 AI marketing consultation. Please watch the
            video below carefully before closing this page.
          </p>

          <p className="mt-10 text-[clamp(1.08rem,1.5vw,1.32rem)] font-black leading-[1.15] tracking-[-0.04em] text-white sm:text-[1.3rem]">
            Watch the video below before closing this page...
          </p>

          <div className="mt-6 w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,26,57,0.96),rgba(9,18,42,0.96))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <div className="overflow-hidden rounded-[1.2rem] bg-black">
              <video
                className="h-full w-full"
                controls
                playsInline
                preload="metadata"
                src="/WhatsApp%20Video%202026-08-23%20at%204.38.03%20PM.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
