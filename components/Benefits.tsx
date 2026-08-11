const benefits = [
  "Understand what is stopping your business growth",
  "Get a customized marketing strategy for your business",
  "Learn how to attract more quality leads",
  "Discover what is wasting your marketing budget",
  "Get clear action steps you can actually use",
];

export function Benefits() {
  return (
    <section className="w-full border-b border-line bg-[#040916]">
      <div className="content-wrap px-6 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="section-title mt-6 text-[clamp(2.05rem,4.1vw,3.4rem)]">
            How You Benefit From This Consultation
          </h2>
          <p className="body-copy mx-auto mt-5 max-w-3xl text-[1.03rem] leading-8 text-[#bcc5d3]">
            Every part of this page points toward one useful outcome.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="glass-card flex min-h-[10.5rem] flex-col justify-between rounded-[1.35rem] p-5"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#23b8f0,#675aff)] text-[0.95rem] font-black text-white">
                {index + 1}
              </span>
              <p className="mt-4 text-[1.01rem] font-semibold leading-7 text-white">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
