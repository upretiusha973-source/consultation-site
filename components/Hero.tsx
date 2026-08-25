export function Hero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-line bg-[#040916]/42 backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,38,0,0.14),transparent_28%),radial-gradient(circle_at_0%_55%,rgba(0,174,255,0.12),transparent_24%),radial-gradient(circle_at_100%_55%,rgba(255,38,0,0.12),transparent_24%)]" />
      <div className="content-wrap relative flex flex-col items-center px-6 pb-14 pt-10 sm:px-8 md:pb-18 md:pt-12">
        <div className="flex w-full justify-center border-b border-white/10 pb-8">
          <img
            src="/logoo.png"
            alt="Digital Usha"
            className="h-auto w-[210px] max-w-[72vw] sm:w-[230px] md:w-[240px]"
            draggable={false}
          />
        </div>

        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <span className="eyebrow mt-12 text-[0.78rem] tracking-[0.22em] !text-[#ff2600]">
            Free 1:1 AI Marketing Consultation
          </span>

          <h1 className="mt-8 max-w-6xl text-balance text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.95] tracking-[-0.07em] text-white sm:whitespace-nowrap">
            Your Growth Partner in the Digital World.
          </h1>

          <p className="body-copy mt-6 max-w-4xl text-[1.02rem] leading-8 text-[#bbc4d4] sm:text-[1.08rem]">
            In this free consultation call, you&apos;ll get a free customized AI marketing
            strategy built specifically for your business.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#consultation-form"
              className="gradient-cta inline-flex h-14 items-center justify-center rounded-full px-8 text-[1rem] font-extrabold tracking-[-0.03em] transition-transform duration-200 hover:-translate-y-0.5 sm:px-10"
            >
              Book Free Consultation
            </a>
            <span className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-8 text-[0.98rem] font-semibold tracking-[-0.03em] text-white sm:px-10">
              Hurry! Only 2 Slots Available.
            </span>
          </div>

          <p className="mt-5 max-w-4xl text-center text-[1.02rem] leading-8 text-[#b8c0cf] sm:text-[1.08rem]">
            I personally guide business owners who want better leads, stronger sales and a
            clearer path forward.
          </p>
        </div>
      </div>
    </section>
  );
}
