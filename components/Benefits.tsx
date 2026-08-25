const benefits = [
  "Understand what is stopping your business growth",
  "Get a customized marketing strategy for your business",
  "Learn how to attract more quality leads",
  "Discover what is wasting your marketing budget",
  "Get clear action steps you can actually use",
];

const benefitIcons = ["✦", "◌", "◉", "✧", "▣"];

export function Benefits() {
  return (
    <section className="w-full border-b border-line bg-[#040916]/42 backdrop-blur-2xl">
      <div className="content-wrap px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="section-title mt-6 text-[clamp(2.05rem,4.1vw,3.4rem)]">
            How You Benefit From This Consultation
          </h2>
          <p className="body-copy mx-auto mt-5 max-w-3xl text-[1.03rem] leading-8 text-[#bcc5d3]">
            Every part of this page points toward one useful outcome.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="glass-card flex min-h-[10.5rem] flex-col justify-between rounded-[1.35rem] border border-white/10 bg-[#0a0d14]/92 p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#ff2600]/35 bg-white/[0.02] text-[0.78rem] font-black text-[#ff2600] shadow-[0_8px_16px_rgba(0,0,0,0.16)]">
                {benefitIcons[index]}
              </span>
              <p className="mt-4 text-[1.01rem] font-semibold leading-7 text-white">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


