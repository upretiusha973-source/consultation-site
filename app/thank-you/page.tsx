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

      <section className="content-wrap px-6 pb-16 pt-8 sm:px-8 md:pb-24 md:pt-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="eyebrow">Thank You</span>
          <h1 className="mt-7 max-w-3xl text-[clamp(2.8rem,5.5vw,4.9rem)] font-black leading-[0.94] tracking-[-0.07em] text-white">
            Your consultation request has been received.
          </h1>
          <p className="body-copy mt-7 max-w-4xl text-[1.08rem] leading-9 text-[#bcc5d3]">
            Thank you for booking your free 1:1 AI marketing consultation. The next step is
            simple: keep an eye on your email and WhatsApp so we can confirm your consultation
            details.
          </p>

          <div className="mt-12 grid w-full gap-4 md:grid-cols-3">
            {[
              {
                title: "Next Step 1",
                text: "Check your email for follow-up details.",
              },
              {
                title: "Next Step 2",
                text: "Stay available on WhatsApp in case we reach out there first.",
              },
              {
                title: "Next Step 3",
                text: "Come ready to discuss your goals, current challenges, and growth opportunities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-line bg-[linear-gradient(180deg,rgba(15,26,57,0.96),rgba(9,18,42,0.96))] p-7 text-left"
              >
                <p className="text-[0.88rem] font-black uppercase tracking-[0.32em] text-[#b7bfd0]">
                  {item.title}
                </p>
                <p className="mt-4 text-[1.05rem] leading-8 text-[#d6dbe7]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-white/10 bg-[#172246] px-8 text-[1rem] font-extrabold text-white transition-colors hover:bg-[#1c2a55]"
            >
              Back to Landing Page
            </a>
            <a
              href="mailto:upretiusha973@gmail.com"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-[#25aef2] px-8 text-[1rem] font-extrabold text-[#05101f] transition-colors hover:bg-[#48bbf3]"
            >
              Check Email / Reply Fast
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
